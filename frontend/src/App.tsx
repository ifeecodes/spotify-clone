import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/authcallback/AuthCallbackPage";
import SSOCallback from "./pages/authcallback/SSOCallbackPage";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/sso-callback" element={<SSOCallback />} />

        <Route element={<MainLayout/>}>
         <Route path="/" element={<HomePage />} />
         <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
