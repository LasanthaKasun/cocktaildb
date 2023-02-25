import { BrowserRouter, Routes, Route } from "react-router-dom";
import CockTailDBLand from "./App/Screens/CockTailDBLand";
import FavoriteList from "./App/Screens/FavoriteList";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CockTailDBLand/>} />
      </Routes>
      <Routes>
        <Route path="/favorite" element={<FavoriteList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
