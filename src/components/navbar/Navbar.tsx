import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a className="flex items-center">
            <span
              style={{ fontFamily: "Poppins" }}
              className="text-3xl cursor-pointer"
            >
              JustVibin
            </span>
          </a>
        </div>

        <div className="flex flex-row justify-center items-center border-b-2 py-2 border-black ">
          <div
            className="hidden md:flex space-x-6 mr-[10rem] text-lg"
            style={{ fontFamily: "Poppins" }}
          >
            <a className="cursor-pointer">Home</a>

            <a className="cursor-pointer">About Us</a>
          </div>

          {/* Sign Up Button */}
          <div className="flex items-center space-x-6 ">
            <a className="bg-transparent hover:bg-white text-black border-[1.5px] border-black cursor-pointer  font-bold py-2 px-4 rounded transition-all duration-300">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
