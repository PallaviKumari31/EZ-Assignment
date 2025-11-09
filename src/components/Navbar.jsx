import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

 
        <div className="flex items-center cursor-pointer">
          <img
            src="Logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-700 items-center">
          <li className="cursor-pointer relative group">
            <span className="transition-colors group-hover:text-emerald-700">Services</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            <span className="transition-colors group-hover:text-emerald-700">Their Stories</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            <span className="transition-colors group-hover:text-emerald-700">Our Story</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group">
            <span className="transition-colors group-hover:text-emerald-700">Varnan</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </li>


          <li>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-orange-500 text-white px-6 py-4 rounded-full font-medium hover:bg-orange-600 transition-all duration-200 shadow-md cursor-pointer"
            >
              Let’s Talk
              <Mail className="w-4 h-4" />
            </button>
          </li>
        </ul>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>


      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">
            <li className="hover:text-emerald-700 cursor-pointer">Services</li>
            <li className="hover:text-emerald-700 cursor-pointer">Their Stories</li>
            <li className="hover:text-emerald-700 cursor-pointer">Our Story</li>
            <li>
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img
                  src="/path/to/your-image.png"
                  alt="Varnan Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </li>
            <li>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition-all duration-200 shadow-md"
              >
                Let’s Talk
                <Mail className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}