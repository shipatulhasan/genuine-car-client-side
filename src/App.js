import "./App.css";
import {RouterProvider} from 'react-router-dom'
import router from './Routes/Routes'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
