import { Link } from "react-router-dom";

const navLinks = [
  { name: "Tambah Barang", url: "/create" },
  { name: "Cari Barang", url: "/search" },
  { name: "Jenis Barang", url: "/type" },
];

export default function Sidebar() {
  return (
    <div className="bg-green-600 w-64 box-border h-screen">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-green-200">Menu</h1>
        <ul className="p-2">
          {navLinks.map((nav) => (
            <li className="py-2 pl-2 rounded-lg transform transition-transform duration-200 hover:translate-x-2 hover:bg-green-500">
              <a className="text-white font-medium" href={nav.url}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
