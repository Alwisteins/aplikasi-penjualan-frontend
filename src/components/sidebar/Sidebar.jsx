import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tambah Barang", path: "/tambah-barang" },
  { name: "Cari Barang", path: "/cari-barang" },
  { name: "Jenis Barang", path: "/jenis-barang" },
];

export default function Sidebar() {
  return (
    <div className="bg-green-600 w-64 box-border h-screen">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-green-200">Menu</h1>
        <ul className="p-2">
          {navLinks.map((nav) => (
            <li
              key={nav.name}
              className="py-2 pl-2 rounded-lg transform transition-transform duration-200 hover:translate-x-2 hover:bg-green-500"
            >
              <Link className="text-white font-medium" to={nav.path}>
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
