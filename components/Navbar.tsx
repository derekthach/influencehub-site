import Button from './Button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          {/* Logo */}
          <a href="/" className="text-xl sm:text-2xl font-bold text-dark flex-shrink-0">
            InfluenceHub
          </a>
          
          {/* Right side: Navigation Links + Auth Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#roster" className="text-gray-600 hover:text-dark transition-colors text-sm sm:text-base">
                Roster
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-dark transition-colors text-sm sm:text-base">
                How it works
              </a>
              <a href="#why-us" className="text-gray-600 hover:text-dark transition-colors text-sm sm:text-base">
                Why us
              </a>
              <Button href="/contact" variant="primary" size="sm">
                Contact
              </Button>
            </div>
            
            {/* Auth Actions - Desktop */}
            <div className="hidden md:flex items-center gap-3 ml-4">
              <a
                href="https://app.influencehub.net"
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm font-medium min-h-[40px] flex items-center"
              >
                Login
              </a>
              <a
                href="https://app.influencehub.net"
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition text-sm font-medium min-h-[40px] flex items-center"
              >
                Sign Up
              </a>
            </div>
            
            {/* Mobile menu button and auth actions */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="https://app.influencehub.net"
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-xs sm:text-sm font-medium min-h-[40px] flex items-center whitespace-nowrap"
              >
                Login
              </a>
              <a
                href="https://app.influencehub.net"
                className="px-3 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition text-xs sm:text-sm font-medium min-h-[40px] flex items-center whitespace-nowrap"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 