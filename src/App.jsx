import Header1 from './components/Header1'
import MainPopupButton from './components/MainPopupButton';
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <div className="p-2 lg:p-4 flex flex-col" >
        <Header1 />
        < main className="flex-grow">
          <Outlet />
        </main>
        <MainPopupButton />
      </div>
  );
}

export default App;
