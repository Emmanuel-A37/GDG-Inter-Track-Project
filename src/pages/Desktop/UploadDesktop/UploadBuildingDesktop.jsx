import React, { useState } from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Input from '../../../components/common/Input';
import FileUpload from '../../../components/common/FileUpload';
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { BuildingAPI } from '../../../services/buildingapi';
import Accordion from '../../../components/Accordion';

const UploadBuildingDesktop = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file) => {
    setFormData((prev) => ({ ...prev, buildingImage: file }));
  };

  const uploadImage = async (file) => {
    const form = new FormData();
    form.append('image', file);
    const res = await fetch('https://api.postimage.org/1/upload', {
      method: 'POST',
      body: form,
    });
    const data = await res.json();
    if (data.status === 200) return data.url;
    throw new Error('Image upload failed');
  };

  const handleSave = async () => {
    if (!formData.buildingName) return alert('Please enter building name');
    setIsLoading(true);

    try {
      const imageUrl = formData.buildingImage ? await uploadImage(formData.buildingImage) : '';
      await BuildingAPI.createBuilding({
        name: formData.buildingName,
        image_url: imageUrl,
        description: '',
      });
      navigate('/upload/status', { state: { success: true } });
    } catch (error) {
      console.error(error);
      navigate('/upload/status', { state: { success: false } });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 max-w-[1440px] min-h-[900px] mx-auto px-4">
      <PageHeader
        title="Building Data Upload"
        showBack
        showSave
        onSave={handleSave}
      />
      <main className="px-5 py-6 space-y-6">
        <Accordion title="Upload Building Data" containerClassName="max-w-[1407px] min-h-[881px]">
          <Input
            label="Building Name"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleInputChange}
            placeholder="Enter building name"
          />
          <FileUpload
            containerClassName="max-w-[1365px] h-[503px]"
            onFileSelect={handleFileSelect}
          />
          <Button
            variant="primary"
            fullWidth
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Upload Building'}
          </Button>
        </Accordion>
      </main>
    </div>
  );
};

export default UploadBuildingDesktop;
