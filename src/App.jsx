import React from 'react';
import UploadDirections from './pages/Mobile/Upload admin for mobile/UploadDirections';
import UploadFailure from './pages/Mobile/Upload admin for mobile/UploadFailure';
import UploadBuilding from './pages/Mobile/Upload admin for mobile/UploadBuildingMobile';
import NoInternet from './pages/Mobile/Download/NoInternet';
import Downloading from './pages/Mobile/Download/Downloading';
import DownloadCampus from './pages/Mobile/Download/DownloadCampus';
import UploadFailureIpod from './pages/Ipod/Uploadadmin/UploadFailure';
import UploadSuccessIpod from './pages/Ipod/Uploadadmin/UploadSucess';
import UploadBuildingIpod from './pages/Ipod/Uploadadmin/UploadBuildingIpod';
import UploadBuildingDesktop from './pages/Desktop/UploadDesktop/UploadBuildingDesktop';


function App() {
  return (
    <div className="App">
      <UploadBuildingDesktop/>
    </div>
  );
}

export default App;