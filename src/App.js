import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './AuthProvider/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';


function App() {

  const { user } = useContext(AuthContext);


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
