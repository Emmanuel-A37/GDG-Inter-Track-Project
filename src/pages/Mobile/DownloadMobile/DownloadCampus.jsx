import React from 'react';
import PageHeader from '../../../components/common/PageHeader';
import PageLayout from '../../../components/common/PageLayout';
import DownloadButton from '../../../components/common/DownloadButton';
import DownloadCampusIcon from '../../../components/Icons/DownloadCampusIcon';
import { getScreenSize,ICON_SIZES } from '../../../constants';

const DownloadCampus = ({ screenSize = 'mobile' }) => {
  const sizes = getScreenSize(screenSize);
  const iconSize = ICON_SIZES[screenSize] || 80;

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
        <div className="mb-6 flex justify-center">
          <DownloadCampusIcon size={iconSize} />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          Download campus directions
        </h1>

        <p className="text-sm text-gray-600 text-center max-w-md mx-auto px-4">
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
