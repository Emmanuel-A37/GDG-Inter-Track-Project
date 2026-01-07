import React, { useState } from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Accordion from '../../../components/Accordion';
import Input from '../../../components/common/Input';
import FileUpload from '../../../components/common/FileUpload';
import Button from '../../../components/common/Button';
import { BuildingAPI } from '../../../services/buildingapi';

const UploadBuildingIpad = () => {
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingImage: null
  });

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!formData.buildingName) {
      alert('Building name is required');
      return;
    }

    const payload = new FormData();
    payload.append('name', formData.buildingName);

    if (formData.buildingImage) {
      payload.append('image', formData.buildingImage);
    }

    try {
      setLoading(true);

      const response = await BuildingAPI.createBuilding(payload);

      console.log('Building created:', response.data);
      alert('Building uploaded successfully');

      // Reset form
      setFormData({
        buildingName: '',
        buildingImage: null
      });

    } catch (error) {
      console.error(error);
      alert(
        error?.response?.data?.message ||
        'Failed to upload building'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 max-w-[744px] min-h-[1133px] mx-auto">
      <PageHeader
        title="Building Data Upload"
        showBack={true}
        showSave={true}
        onSave={handleSubmit}
      />

      <main className="px-5 py-6 space-y-6">
        <Accordion
          title="Upload Building Data"
          containerClassName="max-w-[712px] min-h-[601px]"
        >
          <Input
            label="Building Name"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleInputChange}
            placeholder="Enter building name"
            required
          />

          <FileUpload
            containerClassName="max-w-[255px] h-[171px]"
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

export default UploadBuildingIpad;
