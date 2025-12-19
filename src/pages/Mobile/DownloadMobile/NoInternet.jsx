import React from 'react';
import PageLayout from '../../../components/common/PageLayout';
import DownloadButton from '../../../components/common/DownloadButton';
import NoInternetIcon from '../../../components/Icons/NoInternetIcon';
import { getScreenSize, NO_INTERNET_ICON_SIZES } from '../../../constants';

const NoInternet = ({ screenSize = 'mobile' }) => {
  const sizes = getScreenSize(screenSize);
  const iconSize = NO_INTERNET_ICON_SIZES[screenSize] || 88;

  const handleRetry = () => {
    console.log('Retrying...');
  };

  return (
    <PageLayout maxWidth={sizes.maxWidth}>
      <PageLayout.Content height={sizes.contentHeight}>
        <div className="mb-6 flex justify-center">
          <NoInternetIcon size={iconSize} />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          Connect to the Internet
        </h1>

        <p className="text-sm text-gray-600 text-center max-w-md mx-auto px-4">
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
