// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ReviewsTable from './components/ReviewsTables';

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}

      <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <Header />
        <div style={{ padding: '20px' }}>
          <ReviewsTable />
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
