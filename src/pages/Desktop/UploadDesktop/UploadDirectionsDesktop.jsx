import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Dropdown from '../../../components/common/Dropdown';
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { BuildingAPI } from '../../../services/buildingapi';

const UploadDirectionsDesktop = () => {
  const navigate = useNavigate();
  const [buildings, setBuildings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    startingPoint: '',
    destination: '',
  });

  const [instructions, setInstructions] = useState([{ id: 1, text: '' }]);

  // Load buildings for dropdowns
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
        image_url: '', // Placeholder
      }));

    if (steps.length === 0) {
      return alert('Please add at least one step');
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/v1/routes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
        },
        body: JSON.stringify({
          start_building_id: Number(formData.startingPoint),
          end_building_id: Number(formData.destination),
          steps,
        }),
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
    <div className="min-h-[900px] bg-white max-w-[1440px] mx-auto px-4">
      <PageHeader title="Upload Directions" showBack />
      <main className="px-5 py-6 space-y-6">
        <Dropdown
          label="From"
          name="startingPoint"
          value={formData.startingPoint}
          onChange={handleInputChange}
          options={buildings}
          placeholder="Select Starting Point"
        />
        <Dropdown
          label="To"
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          options={buildings}
          placeholder="Select Destination"
        />

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Instructions</h2>
            <span className="text-sm text-gray-500">
              {instructions.length} step{instructions.length !== 1 ? 's' : ''} added
            </span>
          </div>

          <div className="space-y-4">
            {instructions.map((instruction, index) => (
              <div key={instruction.id} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {index + 1}
                </div>
                <textarea
                  value={instruction.text}
                  onChange={(e) => handleInstructionChange(instruction.id, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20 bg-gray-50"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddStep}
            className="flex items-center gap-2 text-blue-600 font-medium mt-4 hover:text-blue-700"
          >
            Add Next Step
          </button>
        </div>

        <Button
          variant="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Directions'}
        </Button>
      </main>
    </div>
  );
};

export default UploadDirectionsDesktop;
