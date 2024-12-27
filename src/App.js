// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Admindashboard from './dashboard/Admindashboard';
import AdminLogin from './dashboard/AdminLogin'
import ReadMore from './pages/ReadMore';
import Timeline from './dashboard/Timeline';
import TeamMember from './dashboard/TeamMember'
import ClientReview from './pages/ClientReview';
import Achievement from './dashboard/Achievement'
import JobCreate from './dashboard/JobCreate'
import GetTeamMember from './dashboard/GetTeamMember'
import GetUpdateJob from './dashboard/GetUpdateJob'
import ApplySubmit from './dashboard/ApplySubmit'
import FullTeam from './pages/FullTeam';
import FullJob_Apply from './pages/FullJob_Apply';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/adminlogin' element={<AdminLogin />} />
      <Route path='/admindashboard' element={<Admindashboard />} />
      <Route path='/ReadMore' element={<ReadMore />} />
      <Route path='/timeline' element={<Timeline />} />
      <Route path='/teammember' element={<TeamMember />} />
      <Route path='/Clientreview' element={<ClientReview />} />
      <Route path='/achievement' element={<Achievement />} />
      <Route path='/jobcreate' element={<JobCreate />} />
      <Route path='/getteammember' element={<GetTeamMember />} />
      <Route path='/getupdatejob' element={<GetUpdateJob />} />
      <Route path='/applysubmit' element={<ApplySubmit />} />
      <Route path='/fullteam' element={<FullTeam />} />
      <Route path='/fulljobapply' element={<FullJob_Apply />} />
     

    </Routes>
  </Router>
  );
}

export default App;
