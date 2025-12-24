import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Button from '../../../components/common/Button';
import UploadFailureIcon from '../../../components/Icons/UploadFailureIcon';
import { UPLOAD_FAILURE_ICON_SIZES } from '../../../constants';

const UploadFailureDesktop = ({ screenSize = 'desktop' }) => {
  const iconSize = UPLOAD_FAILURE_ICON_SIZES[screenSize] || 160;

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-[900px] bg-white max-w-[1440px] mx-auto flex flex-col">
      <PageHeader
        title="Upload Status"
        showBack={true}
        showSave={false}
      />

      <main className="flex-1 flex flex-col items-center justify-between px-5 py-6">
        <div className="flex flex-col items-center justify-center mt-60">
        <div className="mb-6 flex justify-center items-center">
          <UploadFailureIcon size={iconSize} />
        </div>

    
        <h2 className="text-xl font-semibold text-gray-900 mb-8">
          Data Upload Failed!
        </h2>
</div>
      
        <div className="w-full pb-4 px-4">
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

export default UploadFailureDesktop;
