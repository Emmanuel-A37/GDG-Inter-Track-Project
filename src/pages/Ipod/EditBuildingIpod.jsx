import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import Button from '../../components/common/Button';
import ImageUpload from '../../components/common/ImageUpload';
import { BuildingAPI } from '../../services/buildingapi';
import { getScreenSize } from '../../constants';
import { SaveIcon,DeleteIcon } from '../../components/Icons/editIcon';

const EditBuildingIpod = ({ buildingId, screenSize = 'ipod', onBack }) => {
  const [buildingName, setBuildingName] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');

  const sizes = getScreenSize(screenSize);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuilding = async () => {
      try {
        const res = await BuildingAPI.getBuildingById(buildingId);
        setBuildingName(res.data.name || '');
        setExistingImage(res.data.image || '');
      } catch {
        setError('Failed to load building');
      }
    };

    if (buildingId) fetchBuilding();
  }, [buildingId]);

  const handleSave = async () => {
    if (!buildingName.trim()) {
      setError('Building name is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('name', buildingName);
      formData.append('description', '');

      if (coverImage) {
        formData.append('image', coverImage);
      }

      await BuildingAPI.updateBuilding(buildingId, formData);
      navigate('/buildings');
    } catch {
      setError('Failed to update building');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this building?')) return;

    setDeleting(true);
    try {
      await BuildingAPI.deleteBuilding(buildingId);
      navigate('/buildings');
    } catch {
      setError('Failed to delete building');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-gray-50 mx-auto" style={{ maxWidth: sizes.maxWidth }}>
      <PageHeader title="Edit Building" showBack onBack={onBack || (() => navigate(-1))} />

      <div className="px-5 py-6 flex justify-center">
        <div className="w-full space-y-4" style={{ maxWidth: sizes.contentWidth }}>
          <div className="bg-white rounded-lg px-4 flex items-center" style={{ height: sizes.inputHeight }}>
            <input
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
              placeholder="Building name"
              className="w-full outline-none"
            />
          </div>

          <ImageUpload
            imageHeight={sizes.imageHeight}
            existingImage={existingImage}
            onFileSelect={setCoverImage}
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button variant="primary" fullWidth onClick={handleSave} disabled={loading || deleting}>
            <div className="flex gap-2 items-center">
              <span>{loading ? 'Saving...' : 'Save Changes'}</span>
              <SaveIcon />
            </div>
          </Button>

          <Button variant="danger" fullWidth onClick={handleDelete} disabled={loading || deleting}>
            <div className="flex gap-2 items-center">
              <span>{deleting ? 'Deleting...' : 'Delete Building'}</span>
              <DeleteIcon />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditBuildingIpod;
