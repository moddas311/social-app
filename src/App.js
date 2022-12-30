import { Toaster } from 'react-hot-toast';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';


function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider
        router={router}
      />
      <Toaster />
    </div>

  );
}

export default App;
