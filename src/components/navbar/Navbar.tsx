import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h mr-2 mix-blend-multiply "
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-gray-400">Home</a>

          <a className="hover:text-gray-400">About Us</a>
        </div>

        {/* Sign Up Button */}
        <div className="flex items-center space-x-6">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
