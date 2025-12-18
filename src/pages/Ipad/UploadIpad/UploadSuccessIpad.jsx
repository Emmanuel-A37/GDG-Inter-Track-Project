import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Button from '../../../components/common/Button';

const UploadSuccessIpod = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[1133px] bg-white max-w-[744px] mx-auto flex flex-col">
      <PageHeader 
        title="Upload Status" 
        showBack={true} 
        showSave={false}
      />
      
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-6">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Data Uploaded Successfully!
        </h2>

        {/* Go Back Button */}
        <div className="w-full max-w-sm px-4">
          <Button 
            variant="primary" 
            fullWidth={true}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
        </div>
      </main>
    </div>
  );
};

export default UploadSuccessIpod;