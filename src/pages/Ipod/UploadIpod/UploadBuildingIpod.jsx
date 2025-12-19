import React, { useState } from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Accordion from '../../../components/Accordion';
import Input from '../../../components/common/Input';
import FileUpload from '../../../components/common/FileUpload';
import Button from '../../../components/common/Button';

const UploadBuildingIpod = () => {
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
    console.log('Save clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" bg-gray-50 max-w-[320px] min-h-[568px] mx-auto">
      <PageHeader
        title="Building Data Upload"
        showBack={true}
        showSave={true}
        onSave={handleSave}
      />

      <main className="px-5 py-6 space-y-6">
        <Accordion title="Upload Building Data"
        containerClassName="max-w-[287px] min-h-[549px]">
          <Input
            label="Building Name"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleInputChange}
            placeholder="Enter building name"
          />

          <FileUpload containerClassName="max-w-[255px] h-[171px]" onFileSelect={handleFileSelect} />

          <Button
            variant="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Upload Building
          </Button>
        </Accordion>
      </main>
    </div>
  );
};

export default UploadBuildingIpod;
