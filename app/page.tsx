import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HotAmbulance</h1>
          <nav className="flex gap-6">
            <button className="text-gray-700 hover:text-blue-600">Sign In</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Rides, Reliable Service</h2>
            <p className="text-gray-600 mb-8">Get where you need to go safely and quickly with HotAmbulance</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 mr-4">
              Book Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Learn More
            </button>
          </div>
          <div className="bg-gray-300 h-64 rounded-lg"></div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold mb-2">Real-time Tracking</h4>
              <p className="text-gray-600 text-sm">Track your ride in real-time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold mb-2">Quick Pickup</h4>
              <p className="text-gray-600 text-sm">Average pickup in 5 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Always available when you need us</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="font-semibold mb-2">Rated Drivers</h4>
              <p className="text-gray-600 text-sm">Professional and verified drivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 HotAmbulance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}