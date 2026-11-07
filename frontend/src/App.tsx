import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/authcallback/AuthCallbackPage";
import SSOCallback from "./pages/authcallback/SSOCallbackPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/sso-callback" element={<SSOCallback />} />
      </Routes>
    </>
  );
}

export default App;
