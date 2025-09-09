import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src="https://framerusercontent.com/images/ErwlJddrv4vTGZdMPVOuyNc.png" 
              alt="Sama Logo" 
              className="h-5 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Resolving disputes with care and fairness. 
              Suljhao, Magar Pyaar Se.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">ODR Platform</a></li>
              <li><a href="#" className="hover:text-white">Mediation Services</a></li>
              <li><a href="#" className="hover:text-white">Legal Tech</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Let's Chat!</h3>
            <p className="text-gray-400">
              Ready to resolve disputes the Sama way?
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Sama. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}