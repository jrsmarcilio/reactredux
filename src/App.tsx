import { ToastContainer } from 'react-toastify';

import Home from "./components/Home";
import Sobre from "./components/Sobre";

function App() {
  return (
    <>
      <Home />
      <Sobre />
      <ToastContainer />
    </>
  );
}

export default App;
