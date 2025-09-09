export function Testimonials() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Don't take our word for it.
            <br />
            Hear from the Resolutionaries!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                "Using Sama, ICICI Bank has been able to provide its customers with a much 
                quicker way to resolve disputes. ODR is a big boost to reduce the number of 
                cases reaching court while making dispute resolution more accessible."
              </p>
              <div className="pt-4 border-t border-blue-100">
                <div className="font-semibold text-gray-900">Nilanjan Sinha</div>
                <div className="text-sm text-gray-600">ICICI Bank</div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                "It was 2019. The tagline Suljhao, Magar Pyaar Se, immediately tugged at my 
                heart strings. I joined Sama and it has been such a satisfying journey helping 
                people resolve their disputes amicably."
              </p>
              <div className="pt-4 border-t border-purple-100">
                <div className="font-semibold text-gray-900">Priya Sharma</div>
                <div className="text-sm text-gray-600">Senior Mediator</div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                "The platform is incredibly user-friendly and the resolution process is 
                transparent. We've seen a significant reduction in resolution time and 
                improved customer satisfaction."
              </p>
              <div className="pt-4 border-t border-green-100">
                <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                <div className="text-sm text-gray-600">Operations Head</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}