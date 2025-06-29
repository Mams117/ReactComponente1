import { Routes, Route } from 'react-router-dom';
import Info from '../Components/Info.jsx';
import Login from '../Components/Login.jsx';
import Profile from '../Components/Profile.jsx';
import ProfileDetails from '../Components/ProfileDetails.jsx';
import ProfileSettings from '../Components/ProfileSettings.jsx';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/info" element={<Info />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ProfileDetails" element={<ProfileDetails />} />
      <Route path="/ProfileSettings" element={<ProfileSettings />} />
    </Routes>
  );
};
