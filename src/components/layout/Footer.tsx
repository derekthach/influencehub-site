export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">Influix</div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Influix. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#roster" className="text-gray-300 hover:text-white transition-colors">
              Roster
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="mailto:hello@influix.com" className="text-gray-300 hover:text-white transition-colors">
              hello@influix.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex justify-center space-x-6 opacity-60">
            {/* Social icon placeholders */}
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
} 