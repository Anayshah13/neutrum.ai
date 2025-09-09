import { Button } from './ui/button'

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://framerusercontent.com/images/ErwlJddrv4vTGZdMPVOuyNc.png" 
            alt="Sama Logo" 
            className="h-5"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Solutions</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Company</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}