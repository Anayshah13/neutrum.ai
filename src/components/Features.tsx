export function Features() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Legally enforceable.
          </h2>
          <p className="text-xl text-gray-600">
            Our dispute resolution process is backed by law and recognized by courts.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Fast & Fair Resolution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered platform ensures quick and unbiased dispute resolution, 
                reducing the time and cost compared to traditional court proceedings.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Expert Mediators
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified mediators bring years of experience in resolving 
                complex disputes across various industries and sectors.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://framerusercontent.com/images/mNvPoiBehLirMo0QxtidMUArA.png?width=646&height=646" 
              alt="Dashboard interface" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}