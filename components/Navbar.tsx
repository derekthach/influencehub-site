import Button from './Button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-dark">
            Influix
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#roster" className="text-gray-600 hover:text-dark transition-colors">
              Roster
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-dark transition-colors">
              How it works
            </a>
            <a href="#why-us" className="text-gray-600 hover:text-dark transition-colors">
              Why us
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Contact
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 