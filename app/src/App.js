import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Booking from "./Pages/Booking/Booking";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-bookings" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
