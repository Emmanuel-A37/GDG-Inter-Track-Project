import React, { useState } from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Accordion from '../../../components/Accordion';
import Input from '../../../components/common/Input';
import FileUpload from '../../../components/common/FileUpload';
import Button from '../../../components/common/Button';
import useBuildings from '../../../hooks/useBuildings';

const UploadBuilding = () => {
  const { uploadBuilding, loading, error } = useBuildings();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileSelect = (file) => {
    setFormData(prev => ({
      ...prev,
      buildingImage: file
    }));
  };

  const handleSave = () => {
    handleSubmit();
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!formData.buildingName || !formData.buildingImage) {
      alert("Please provide both name and image");
      return;
    }

    const data = new FormData();
    data.append('name', formData.buildingName);
    data.append('image', formData.buildingImage);

    try {
      await uploadBuilding(data);
      setSuccess(true);
      setFormData({ buildingName: '', buildingImage: null });
    } catch (err) {
      console.error('Upload failed');
    }
  };

  return (
    <div className=" bg-gray-50 max-w-[744px] min-h-[1133px] mx-auto">
      <PageHeader
        title="Building Data Upload"
        showBack={true}
        showSave={true}
        onSave={handleSave}
      />

      <main className="px-5 py-6 space-y-6">
        {success && (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
            Building uploaded successfully!
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        <Accordion title="Upload Building Data"
        containerClassName="max-w-[712px] min-h-[681px]">
          <Input
            label="Building Name"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleInputChange}
            placeholder="Enter building name"
          />

          <FileUpload 
            containerClassName="max-w-[680px] h-[269px]" 
            onFileSelect={handleFileSelect} 
          />

          <Button
            variant="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Building'}
          </Button>
        </Accordion>
      </main>
    </div>
  );
};

export default UploadBuilding;
