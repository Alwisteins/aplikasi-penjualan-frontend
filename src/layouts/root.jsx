import Sidebar from "../components/sidebar/Sidebar";

export default function RootLyaout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
