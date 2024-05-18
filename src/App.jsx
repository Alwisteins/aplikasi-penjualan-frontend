import { BrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <div className="bg-green-50">
        <BrowserRouter>
          <RootLayout>
            <AppRoutes />
          </RootLayout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
