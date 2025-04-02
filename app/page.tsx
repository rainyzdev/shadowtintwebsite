"use client";

import { MapPin, Clock, Phone, Mail, Car, Shield, Sun } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation with Logo */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-red-600" />
              <span className="text-white text-2xl font-bold">SHADOW TINT</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/80 to-[#1a1a1a]/95"></div>
          {/* Accent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-blue-900/20"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <Shield className="w-24 h-24 text-red-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6 text-white">Welcome to<br />Shadow Tint</h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Where luxury meets protection. Transform your vehicle with premium window tinting services.
            </p>
          </div>
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="#services"
              className="bg-red-600 text-white px-10 py-4 rounded-md hover:bg-red-700 transition duration-300 text-lg"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-md hover:bg-white/20 transition duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
          <div className="animate-bounce">
            <a href="#services" className="text-white/70 hover:text-white transition duration-300">
              <span className="block text-sm mb-2">Scroll to discover</span>
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Experience the perfect blend of style, comfort, and protection with our premium window tinting solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automotive Tinting",
                description: "Premium ceramic window tinting for all vehicle types, offering superior clarity and performance.",
                icon: Car,
              },
              {
                title: "UV Protection",
                description: "99% UV ray blocking technology that protects your skin and interior from harmful radiation.",
                icon: Shield,
              },
              {
                title: "Heat Reduction",
                description: "Advanced heat rejection technology keeping your vehicle cool and comfortable year-round.",
                icon: Sun,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition duration-300 bg-white group hover:border-red-200"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition duration-300" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Map Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-600 mr-4" />
                  <p>500 E Penn Ave, Wernersville, PA 19565</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-600 mr-4" />
                  <p>(267)-504-6098</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-600 mr-4" />
                  <p>info@shadowtint.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-bold mb-2">Hours of Operation</p>
                    <p>Tuesday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday - Monday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.6656194355437!2d-76.07225998766256!3d40.3275780609404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6712bd1b670cf%3A0x876ceff26dc1e836!2sShadow%20Tint%20LLC.%20Pa!5e0!3m2!1sen!2sus!4v1738328610590!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Shadow Tint. All rights reserved. | Website By <a href="https://rainystudios.co">RainyStudios</a></p>
        </div>
      </footer>
    </main>
  );
}