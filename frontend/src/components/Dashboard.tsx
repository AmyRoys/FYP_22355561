import { useEffect, useState } from 'react';
import { fetchData } from '../apiService';
import '../styles/Dashboard.css';
import logo from '../assets/Nightguard.png';

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  const [extensionMessage, setExtensionMessage] = useState<string | null>(null);

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

    // Listen for messages from the browser extension
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== window || event.data.type !== "FROM_EXTENSION") {
        return;
      }
      console.log("Message received from extension:", event.data.message);
      setExtensionMessage(event.data.message);
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessageToExtension = () => {
    console.log("Sending message to extension...");
    window.postMessage({ type: "FROM_REACT", message: "Hello from React!" }, "*");
  };

  const sendMessageToContentScript = () => {
    console.log("Sending message to content script...");
    window.postMessage({ type: "FROM_REACT", message: "Hello from React to Content Script!" }, "*");
  };

  const sendMessageToPopup = () => {
    console.log("Sending message to popup...");
    window.postMessage({ type: "FROM_REACT_TO_POPUP", message: "Hello from React to Popup!" }, "*");
  };

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
      <div className="extension-section">
        <h2>Browser Extension</h2>
        <button onClick={sendMessageToExtension}>Send Message to Extension</button>
        <button onClick={sendMessageToContentScript}>Send Message to Content Script</button>
        <button onClick={sendMessageToPopup}>Send Message to Popup</button>
        {extensionMessage && <p>Message from Extension: {extensionMessage}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
