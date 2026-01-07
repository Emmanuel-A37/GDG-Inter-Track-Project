import React from "react";
import "./App.css";
import UserFlow from "./pages/user/UserFlow";
import AdminFlow from "./pages/admin/AdminFlow";
import { Routes, Route } from "react-router-dom";
import DownloadCampusIpad from "./pages/Ipad/DownloadIpad/DownloadCampusIpad";
import DownloadCampusDesktop from "./pages/Desktop/Download/DownloadCampusDesktop";
import DownloadCampus from "./pages/Mobile/DownloadMobile/DownloadCampus";
import DownloadCampusIpod from "./pages/Ipod/DownloadIpoad/DownloadCampusIpod";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserFlow />} />
        <Route path="/admin/*" element={<AdminFlow />} />
        <Route path="/direction" element={<DownloadCampusIpad/>}/>
        <Route path="/desktop" element={<DownloadCampusDesktop/>}/>
        <Route path="/mobile" element={<DownloadCampus/>} />
         <Route path="/ipod" element={<DownloadCampusIpod/>} />
      </Routes>
    </>
  );
};

export default App;
