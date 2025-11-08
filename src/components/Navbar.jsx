export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur  border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">

        <div className="text-xl font-bold text-deepgreen">
          
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-charcoal/90">
          <li className="cursor-default">Services</li>
          <li className="cursor-default">Their Stories</li>
          <li className="cursor-default">Our Story</li>
          <li className="cursor-default">Varnan</li>
          <li className="cursor-default">Let's Talk</li>
        </ul>

      </nav>
    </header>
  );
}
