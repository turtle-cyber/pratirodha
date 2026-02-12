import "./index.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Toaster } from "sonner";
import LandingPage from "./features/landing/LandingPage";
import HomePage from "./features/home/HomePage";
import Header from "./components/Header";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="relative z-10 pt-16 flex-1 overflow-y-auto custom-scrollbar">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        expand={false}
        richColors
        closeButton
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(17, 17, 17, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          },
        }}
      />
      <AppContent />
    </Router>
  );
}

export default App;
