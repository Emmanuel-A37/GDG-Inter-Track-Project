import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import Button from '../../../components/common/Button';
import UploadSuccessIcon from '../../../components/Icons/UploadSuccessIcon';
import { UPLOAD_SUCCESS_ICON_SIZES } from '../../../constants';

const UploadSuccessDesktop = ({ screenSize = 'desktop' }) => {
  const iconSize = UPLOAD_SUCCESS_ICON_SIZES[screenSize] || 144;

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
          <UploadSuccessIcon size={iconSize} />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">
          Data Uploaded Successfully!
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

export default UploadSuccessDesktop;
