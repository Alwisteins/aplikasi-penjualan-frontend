import { Routes, Route } from "react-router-dom";
import Create from "./pages/create/Create";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Aplikasi Data Penjualan</h1>} />
      <Route path="/tambah-barang" element={<Create />} />
    </Routes>
  );
}
