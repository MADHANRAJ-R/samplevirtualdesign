import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeRoute from "./Router/homeroute";
import AboutRoute from "./Router/aboutroute";
import GalleryRoute from "./Router/galleryroute";
import ContactRoute from "./Router/contactroute";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/AboutUs" element={<AboutRoute />} />

        <Route path="/Gallery" element={<GalleryRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </main>
  );
}

export default App;
