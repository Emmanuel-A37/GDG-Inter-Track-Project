import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeader from '../../../components/common/PageHeader';
import Dropdown from '../../../components/common/Dropdown';
import Button from '../../../components/common/Button';
import FileUpload from '../../../components/common/FileUpload';
import api from '../../../utils/api';

const UploadDirectionsDesktop = () => {
  const navigate = useNavigate();
  const { id: routeId } = useParams(); 
  const isEditMode = Boolean(routeId);
  
  const [loading, setLoading] = useState(false);
  const [fetchingRoute, setFetchingRoute] = useState(false);
  const [buildings, setBuildings] = useState([]);
  const [formData, setFormData] = useState({
    startingPoint: '',
    destination: '',
  });

  const [instructions, setInstructions] = useState([
    { id: 1, text: '', image: null, existingImageUrl: '' }
  ]);

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const response = await api.get('/buildings');
        if (response.data.success) {
          const buildingOptions = response.data.data.map(building => ({
            value: building.id,
            label: building.name
          }));
          setBuildings(buildingOptions);
        }
      } catch (error) {
        console.error('Failed to fetch buildings:', error);
      }
    };

    fetchBuildings();
  }, []);

  useEffect(() => {
    const fetchRouteData = async () => {
      if (!isEditMode || buildings.length === 0) return;
      
      setFetchingRoute(true);
      try {
        const response = await api.get(`/routes/${routeId}`);
        if (response.data.success) {
          const route = response.data.data;
          const startBuilding = buildings.find(b => b.label === route.start_building?.name);
          const endBuilding = buildings.find(b => b.label === route.end_building?.name);
          
          setFormData({
            startingPoint: startBuilding?.value || route.start_building?.id || '',
            destination: endBuilding?.value || route.end_building?.id || ''
          });
          
          if (route.steps && route.steps.length > 0) {
            const existingInstructions = route.steps
              .sort((a, b) => a.step_number - b.step_number)
              .map((step, index) => ({
                id: index + 1,
                text: step.instruction || '',
                image: null,
                existingImageUrl: step.image_url || ''
              }));
            setInstructions(existingInstructions);
          }
        }
      } catch (error) {
        console.error('Failed to fetch route:', error);
        alert('Failed to load route data');
        navigate('/admin/manage-routes');
      } finally {
        setFetchingRoute(false);
      }
    };

    fetchRouteData();
  }, [isEditMode, routeId, buildings, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleInstructionChange = (id, value) => {
    setInstructions((prev) =>
      prev.map((i) => (i.id === id ? { ...i, text: value } : i))
    );
  };

  const handleImageSelect = (id, file) => {
    setInstructions(prev =>
      prev.map(instruction =>
        instruction.id === id ? { ...instruction, image: file } : instruction
      )
    );
  };

  const handleAddStep = () => {
    const newId = instructions.length > 0 ? Math.max(...instructions.map(i => i.id)) + 1 : 1;
    setInstructions(prev => [...prev, { id: newId, text: '', image: null, existingImageUrl: '' }]);
  };

  const handleRemoveStep = (id) => {
    if (instructions.length <= 1) {
      alert('You need at least one step');
      return;
    }
    setInstructions(prev => prev.filter(inst => inst.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('start_building_id', formData.startingPoint);
      formDataToSend.append('end_building_id', formData.destination);

      const stepsData = instructions.map((inst, index) => ({
        step_number: index + 1,
        instruction: inst.text,
        image_url: inst.existingImageUrl || '' 
      }));

      formDataToSend.append('steps', JSON.stringify(stepsData));

      instructions.forEach((inst, index) => {
        if (inst.image) {
          formDataToSend.append(`step_image_${index}`, inst.image);
        }
      });

      let response;
      if (isEditMode) {
     
        response = await api.put(`/routes/${routeId}`, formDataToSend, {
          headers: {
            'Content-Type': undefined
          }
        });
      } else {
       
        response = await api.post('/routes', formDataToSend, {
          headers: {
            'Content-Type': undefined
          }
        });
      }

      if (response.data.success || response.status === 201 || response.status === 200) {
        navigate('/admin/upload-success'); 
      }
    } catch (error) {
      console.error(`Error ${isEditMode ? 'updating' : 'creating'} route:`, error);
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please login again.");
        navigate('/admin/login');
      } else if (error.response?.status === 404) {
        alert('Route or building not found');
      } else {
        navigate('/admin/upload-failure');
      }
    } finally {
      setLoading(false);
    }
  };

  if (fetchingRoute) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Loading route data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[900px] bg-white max-w-[1440px] mx-auto flex flex-col">
      <PageHeader
        title={isEditMode ? "Edit Route" : "Upload Directions"}
        showBack={true}
        showSave={false}
      />
      
      <main className='px-5 py-6 space-y-6'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 mb-1'>
            {isEditMode ? 'Edit Route' : 'Define Route'}
          </h1>
          <p className='text-sm text-gray-500 mb-4'>
            {isEditMode 
              ? 'Modify the buildings and navigation path'
              : 'Select buildings to map a new navigation path'
            }
          </p>
          <div className='space-y-4'>
            <Dropdown
              label="From"
              name="startingPoint"
              value={formData.startingPoint}
              onChange={handleInputChange}
              placeholder="Select Starting Point"
              options={buildings}
              color='text-blue-700'
            />
            
            <div className='flex justify-center'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-blue-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>

            <Dropdown
              label="To"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              placeholder="Select Destination"
              options={buildings}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Instructions</h2>
            <span className="text-sm text-gray-500">
              {instructions.length} step{instructions.length !== 1 ? 's' : ''} added
            </span>
          </div>

          <div className="space-y-4">
            {instructions.map((instruction, index) => (
              <div key={instruction.id} className='relative border border-gray-200 rounded-lg p-4 bg-gray-50'>
                <div className='absolute -left-3 -top-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm ring-4 ring-white'>
                  {index + 1}
                </div>
                
                {/* Remove button */}
                {instructions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveStep(instruction.id)}
                    className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 ring-2 ring-white"
                    title="Remove step"
                  >
                    ×
                  </button>
                )}
                
                <div className="mt-2 space-y-4">
                  <textarea
                    value={instruction.text}
                    onChange={(e) => handleInstructionChange(instruction.id, e.target.value)}
                    placeholder={`Describe step ${index + 1}...`}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24 bg-white'
                  />
                  
                  <div className="bg-white rounded-lg">
                    {instruction.existingImageUrl && !instruction.image && (
                      <div className="mb-2 p-2 bg-green-50 rounded border border-green-200">
                        <p className="text-sm text-green-700">Current image: {instruction.existingImageUrl.split('/').pop()}</p>
                      </div>
                    )}
                     <FileUpload 
                        onFileSelect={(file) => handleImageSelect(instruction.id, file)}
                        containerClassName="h-[150px] !p-4" 
                     />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddStep}
            className='flex items-center gap-2 text-blue-600 font-medium mt-6 hover:text-blue-700 mx-auto'
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 4v16m8-8H4" 
                />
              </svg>
            </div>
            <span>Add Next Step</span>
          </button>
        </div>
        <div className='pt-4'>
          <Button
            variant="primary"
            fullWidth={true}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading 
              ? (isEditMode ? 'Updating Route...' : 'Creating Route...') 
              : (isEditMode ? 'Update Route' : 'Submit Directions')
            }
          </Button>
        </div>
      </main>
    </div>
  );
};

export default UploadDirectionsDesktop;
