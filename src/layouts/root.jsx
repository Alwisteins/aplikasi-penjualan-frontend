import Sidebar from "../components/sidebar/Sidebar";

export default function RootLyaout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
