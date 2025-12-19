import React from 'react';
import UploadDirections from './pages/Mobile/UploadMobile/UploadDirections';
import UploadFailure from './pages/Mobile/UploadMobile/UploadFailure';
import UploadBuilding from './pages/Mobile/UploadMobile/UploadBuildingMobile';
import NoInternet from './pages/Mobile/DownloadMobile/NoInternet';
import Downloading from './pages/Mobile/DownloadMobile/Downloading';
import DownloadCampus from './pages/Mobile/DownloadMobile/DownloadCampus';
import UploadFailureIpod from './pages/Ipod/UploadIpod/UploadFailureIpod';
import UploadSuccessIpod from './pages/Ipod/UploadIpod/UploadSucessIpod';
import UploadBuildingIpod from './pages/Ipod/UploadIpod/UploadBuildingIpod';
import UploadBuildingDesktop from './pages/Desktop/UploadDesktop/UploadBuildingDesktop';
import DownloadCampusDesktop from './pages/Desktop/Download/DownloadCampusDesktop';
import NoInternetIpad from './pages/Ipad/DownloadIpad/NoInternetIpad';
import UploadSuccess from './pages/Mobile/UploadMobile/UploadSucess';
import UploadDirectionsDesktop from './pages/Desktop/UploadDesktop/UploadDirectionsDesktop';
import UploadDirectionsIpad from './pages/Ipad/UploadIpad/UploadDirectionIpad';
import UploadDirectionsIpod from './pages/Ipod/UploadIpod/UploadDirectionIpod';
import UploadSuccessDesktop from './pages/Desktop/UploadDesktop/UploadSuccessDesktop';
import UploadSuccessIpad from './pages/Ipad/UploadIpad/UploadSuccessIpad';
import UploadFailureIpad from './pages/Ipad/UploadIpad/UploadFailureIpad';
import UploadFailureDesktop from './pages/Desktop/UploadDesktop/UploadFailureDesktop';


function App() {
  return (
    <div className="App">
      <UploadSuccessDesktop/>
    </div>
  );
}

export default App;