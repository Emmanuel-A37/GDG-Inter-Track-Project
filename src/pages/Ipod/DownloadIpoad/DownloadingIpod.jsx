import React, { useState, useEffect } from 'react';
import PageLayout from '../../../components/common/PageLayout';
import DownloadButton from '../../../components/common/DownloadButton';
import { getScreenSize } from '../../../constants';

const DownloadingIpod = ({ screenSize = 'Ipod' }) => {
  const [progress, setProgress] = useState(0);
  const sizes = getScreenSize(screenSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

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

export default DownloadingIpod;