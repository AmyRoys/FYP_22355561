import '../styles/Dashboard.css';
import logo from '../assets/Nightguard.png'; // Ensure the image is placed in the assets folder

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="welcome-banner">
        <h1>Welcome to NightGuard</h1>
      </div>
      <div className="logo-container">
        <img src={logo} alt="NightGuard Logo" className="dashboard-logo" />
      </div>
    </div>
  );
};

export default Dashboard;
