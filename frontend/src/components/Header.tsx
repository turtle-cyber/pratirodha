import { logo } from "@/lib/assetExport";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2">
      <nav className="px-32 mx-auto">
        <div className="flex items-center justify-between border border-[#fffffa3e] rounded-full p-3 backdrop-blur-md">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider">
            <img src={logo} width={120} />
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/home"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/home")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">Home</span>
            </Link>

            <Link
              to="/system-overview"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/system-overview")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">System Overview</span>
            </Link>

            <Link
              to="/behaviour-drift"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/behaviour-drift")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">Behaviour Drift</span>
            </Link>

            <Link
              to="/process-chain-attribution"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/process-chain-attribution")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">Process Chain Attribution</span>
            </Link>

            <Link
              to="/isolation-events"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/isolation-events")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">Isolation Events</span>
            </Link>

            <Link
              to="/forensic-timeline"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/forensic-timeline")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">Forensic Timeline</span>
            </Link>

            <Link
              to="/deception-assets"
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive("/deception-assets")
                  ? "text-white"
                  : "text-[#686868] hover:text-white"
              }`}
            >
              <span className="text-sm">Deception Assets</span>
            </Link>
          </div>

          <div className="bg-[#C10007] px-2 py-1 rounded-md">
            <span className="text-xs">Open System Overview</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
