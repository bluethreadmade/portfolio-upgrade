import Header1 from './components/Header1'
import MainPopupButton from './components/MainPopupButton';
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <div className="p-4 flex flex-col" >
        <Header1 />
        <Outlet />
        <MainPopupButton />
      </div>
  );
}

export default App;
