import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import Login from "./components/pages/auth/login/Login";
import "./app.css";
import AgentLogin from "./components/pages/auth/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
        {/* <Route path="/admin" element={<MainLayout />}>
          {routes}
        </Route> */}
        <Route path="/admin/login" element={<Login/>} />
        {/* <Route path="/upoad-layout" element={<UploadLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
