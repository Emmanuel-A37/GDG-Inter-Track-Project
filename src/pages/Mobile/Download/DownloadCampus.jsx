import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import PageLayout from '../../../components/common/PageLayout';
import DownloadButton from '../../../components/common/DownloadButton';
import { getScreenSize } from '../../../constants';

const DownloadCampus = ({ screenSize = 'mobile' }) => {
  const sizes = getScreenSize(screenSize);

  const handleDownload = () => {
    console.log('Download started');
  };

  return (
    <PageLayout maxWidth={sizes.maxWidth}>
      <PageLayout.Header height={sizes.headerHeight}>
        <PageHeader 
          title="Download Directions" 
          showBack={true} 
          showSave={false}
        />
      </PageLayout.Header>

      <PageLayout.Content height={sizes.contentHeight}>
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-blue-600 mx-auto"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          Download campus directions
        </h1>

        <p className="text-sm text-gray-600 text-center max-w-md px-4">
          Download the campus map once to find buildings and lecture offices 
          anytime, even without an internet connection.
        </p>
      </PageLayout.Content>

      <PageLayout.Footer height={sizes.footerHeight}>
        <DownloadButton
          width={sizes.buttonWidth}
          height={sizes.buttonHeight}
          onClick={handleDownload}
        >
          Download
        </DownloadButton>
      </PageLayout.Footer>
    </PageLayout>
  );
};

export default DownloadCampus;