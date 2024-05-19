import { Routes, Route } from "react-router-dom";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tambah-barang" element={<Create />} />
    </Routes>
  );
}
