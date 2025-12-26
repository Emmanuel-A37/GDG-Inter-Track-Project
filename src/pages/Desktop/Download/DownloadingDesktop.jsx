import React, { useState, useEffect } from 'react';
import PageLayout from '../../../components/common/PageLayout';
import DownloadButton from '../../../components/common/DownloadButton';
import { getScreenSize } from '../../../constants';
import { useNavigate } from 'react-router-dom';
const DownloadingDesktop = ({ screenSize = 'Desktop' }) => {
  const [progress, setProgress] = useState(0);
  const sizes = getScreenSize(screenSize);
  const navigate = useNavigate();
  useEffect(() => {
  const downloadData = async () => {
      try {
        const response = await api.get('/sync/all/', {
          onDownloadProgress: (e) => {
            if (e.total) {
              setProgress(Math.round((e.loaded * 100) / e.total));
            } else {
              setProgress((prev) => Math.min(prev + 3, 95));
            }
          },
        });

        if (response.data.success) {
          localStorage.setItem('offline_data', JSON.stringify(response.data.data));
          localStorage.setItem('last_sync', new Date().toISOString());
          setProgress(100);
          setTimeout(() => navigate(-2), 1500); // Back to home after success
        }
      } catch (err) {
        alert('Download failed. Check your connection.');
        navigate('/download/no-internet');
      }
    };

    downloadData();

    // Fallback smooth animation if no progress events
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleCancel = () => {
    console.log('Download cancelled');
  };

  return (
    <PageLayout maxWidth={sizes.maxWidth}>
      <PageLayout.Content height={sizes.contentHeight}>
        <div className="relative mb-8">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#2563eb"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">{progress}%</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Downloading...
        </h1>

        <p className="text-sm text-gray-500 text-center">
          Preparing for offline navigation.
        </p>
      </PageLayout.Content>

      <PageLayout.Footer height={sizes.footerHeight}>
        <DownloadButton
          variant="secondary"
          width={sizes.buttonWidth}
          height={sizes.buttonHeight}
          onClick={handleCancel}
        >
          Cancel
        </DownloadButton>
      </PageLayout.Footer>
    </PageLayout>
  );
};

export default DownloadingDesktop;