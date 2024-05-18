import Sidebar from "../components/Sidebar";

export default function RootLyaout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
