import './App.css';
import Sidebar from './components/Sidebar';
import ReviewsTable from './components/ReviewsTables';
import Evaluations from './components/Evaluations';
// import Dashboard from './components/Dashboard';
import Insights from './components/Insights';
import Forum from './components/Forum';
import Help from './components/Help';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
          <div style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<ReviewsTable />} />
              <Route path="/reviews" element={<ReviewsTable />} />
              <Route path="/evaluations" element={<Evaluations />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
