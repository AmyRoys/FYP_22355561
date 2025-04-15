import { useEffect, useState } from 'react';
import { fetchData } from '../apiService';
import '../styles/Dashboard.css';
import logo from '../assets/Nightguard.png'; 

const Dashboard = () => {
  const [data, setData] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);
  return (
    <div className="dashboard">
      <div className="welcome-banner">
        <h1>Welcome to NightGuard</h1>
      </div>
      <div className="logo-container">
        <img src={logo} alt="NightGuard Logo" className="dashboard-logo" />
      </div>
      <div className="data-section">
                {data ? (
                    <div>
                        <p>{data.message}</p>
                        <ul>
                            {data.data.map((item: number, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
    </div>
  );
};

export default Dashboard;
