import { BrowserRouter, Routes, Route } from "react-router-dom";
import CockTailDBLand from "./App/Screens/CockTailDBLand";
import FavouriteList from "./App/Screens/FavouriteList";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CockTailDBLand/>} />
      </Routes>
      <Routes>
        <Route path="/favourite" element={<FavouriteList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
