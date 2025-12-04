export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl sm:text-2xl font-bold mb-2">InfluenceHub</div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} InfluenceHub. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 text-center">
            <a href="#roster" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">
              Roster
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center">
              Contact
            </a>
            {/* Privacy page link removed - page still accessible at /privacy for Meta Business Verification */}
            <a href="mailto:hello@influencehub.net" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base min-h-[44px] flex items-center break-all">
              hello@influencehub.net
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <div className="flex justify-center space-x-4 sm:space-x-6 opacity-60">
            {/* Social icon placeholders */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded"></div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded"></div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
} 