import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Suljhao, Magar
                <br />
                <span className="text-blue-600">Pyaar Se</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sama helps you resolve your disputes quickly, fairly, and cost effectively. 
                We've resolved over 35 Lakh disputes in India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Now
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://framerusercontent.com/images/5LvDOcqn6WXZMyWtwtZGsSaI8u0.png?scale-down-to=512" 
              alt="Woman with headset" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}