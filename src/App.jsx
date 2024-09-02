import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
// import Landing from './pages/Landing';
import Header from './components/common/header';
import MenuBar from './components/common/MenuBar/MenuBar';

function App() {
  const location = useLocation();

   
  const isHomePage = location.pathname === '/';

  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='h-[10%] flex '>
        <Header />
      </div>
      <div className={`${isHomePage?' h-[100%]':'h-[75%]'}  flex `}>
        <Outlet />
      </div>
      {!isHomePage && (
        <div className='h-[15%] flex '>
          <MenuBar />
        </div>
      )}
    </div>
  );
}

export default App;
