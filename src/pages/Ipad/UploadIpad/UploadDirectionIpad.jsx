import React, { useState } from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Dropdown from '../../../components/common/Dropdown';
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { BuildingAPI } from '../../../services/buildingapi';
const UploadDirectionsIpad = () => {
  const navigate = useNavigate();
    const [buildings, setBuildings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const [formData, setFormData] = useState({
      startingPoint: '',
      destination: '',
    });
  
    const [instructions, setInstructions] = useState([{ id: 1, text: '' }]);
  
  
    useEffect(() => {
      const loadBuildings = async () => {
        try {
          const res = await BuildingAPI.getAllBuildings();
          if (res.data.success) {
            setBuildings(
              res.data.data.map((b) => ({
                label: b.name,
                value: b.id.toString(),
              }))
            );
          }
        } catch (err) {
          console.error(err);
        }
      };
      loadBuildings();
    }, []);
  
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
  
    const handleInstructionChange = (id, value) => {
      setInstructions((prev) =>
        prev.map((i) => (i.id === id ? { ...i, text: value } : i))
      );
    };
  
    
    const handleAddStep = () => {
      setInstructions((prev) => [...prev, { id: prev.length + 1, text: '' }]);
    };
  
   
    const handleSubmit = async () => {
      if (!formData.startingPoint || !formData.destination) {
        return alert('Please select starting point and destination');
      }
  
      const steps = instructions
        .filter((s) => s.text.trim())
        .map((s, i) => ({
          step_number: i + 1,
          instruction: s.text,
          image_url: '',
        }));
  
      if (steps.length === 0) {
        return alert('Please add at least one step');
      }
  
      setIsLoading(true);
  
      try {
        const res = await RoutesAPI.createRoute({
    start_building_id: Number(formData.startingPoint),
    end_building_id: Number(formData.destination),
    steps,
  });
  
        const data = await res.json();
        data.success
          ? navigate('/upload/status', { state: { success: true } })
          : navigate('/upload/status', { state: { success: false } });
      } catch (err) {
        console.error(err);
        navigate('/upload/status', { state: { success: false } });
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <div className="min-h-[1133px] bg-white max-w-[744px] mx-auto flex flex-col sm:text-blue-500 xl:text-red-500">
      <PageHeader
        title="Upload Directions"
        showBack
      
      />
      
      <main className='px-5 py-6 space-y-6'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 mb-1'>Define Route</h1>
          <p className='text-sm text-gray-500 mb-4'>
            Select buildings to map a new navigation path
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
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold text-gray-900'>Instructions</h2>
            <span className='text-sm text-gray-500'>
              {instructions.length} step{instructions.length !== 1 ? 's' : ''} added
            </span>
          </div>

          <div className='space-y-4'>
            {instructions.map((instruction, index) => (
              <div key={instruction.id} className='flex gap-3'>
                <div className='flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                  {index + 1}
                </div>
                <textarea
                  value={instruction.text}
                  onChange={(e) => handleInstructionChange(instruction.id, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-20 bg-gray-50'
                />
              </div>
            ))}
          </div>
          <button
            type='button'
            onClick={handleAddStep}
            className='flex items-center gap-2 text-blue-600 font-medium mt-4 hover:text-blue-700'
          >
            <span>Add Next Step</span>
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
          </button>
        </div>
        <div className='pt-4'>
          <Button
            variant="primary"
            fullWidth={true}
            onClick={handleSubmit}
            disabled = {isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit Directions'}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default UploadDirectionsIpad;