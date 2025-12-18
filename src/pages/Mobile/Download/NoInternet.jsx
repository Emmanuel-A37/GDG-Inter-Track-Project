import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import DownloadButton from '../../../components/common/DownloadButton';
import { getScreenSize } from '../../../constants';

const NoInternet = ({ screenSize = 'mobile' }) => {
  const sizes = getScreenSize(screenSize);

  const handleRetry = () => {
    console.log('Retrying...');
  };

  return (
    <PageLayout maxWidth={sizes.maxWidth}>
      <PageLayout.Content height={sizes.contentHeight}>
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-blue-300 mx-auto"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
            />
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth={1.5} />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          Connect to the Internet
        </h1>

        <p className="text-sm text-gray-600 text-center max-w-md px-4">
          An internet connection is required to download campus maps and 
          directions for the first time.
        </p>
      </PageLayout.Content>

      <PageLayout.Footer height={sizes.footerHeight}>
        <DownloadButton
          width={sizes.buttonWidth}
          height={sizes.buttonHeight}
          onClick={handleRetry}
        >
          Retry
        </DownloadButton>
      </PageLayout.Footer>
    </PageLayout>
  );
};

export default NoInternet;