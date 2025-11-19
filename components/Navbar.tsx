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
          
          {/* Right side: Navigation Links + Auth Actions */}
          <div className="flex items-center">
            {/* Navigation Links - Desktop */}
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
            
            {/* Auth Actions - Desktop */}
            <div className="hidden md:flex items-center gap-3 ml-6">
              <a
                href="https://app.influencehub.net"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm font-medium"
              >
                Login
              </a>
              <a
                href="https://app.influencehub.net/select-role"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium"
              >
                Sign Up
              </a>
            </div>
            
            {/* Mobile menu button and auth actions */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="https://app.influencehub.net"
                className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm font-medium"
              >
                Login
              </a>
              <a
                href="https://app.influencehub.net/select-role"
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium"
              >
                Sign Up
              </a>
              <button className="p-2 text-gray-600 hover:text-dark">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 