import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tambah-barang" element={<Create />} />
      <Route path="/cari-barang" element={<Search />} />
    </Routes>
  );
}
