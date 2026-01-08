import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg className="h-10 w-auto" viewBox="0 0 120 40" fill="none">
                <path d="M20 8L12 16L20 24V8Z" fill="#2D5234"/>
                <path d="M12 16L20 24L28 16L20 8L12 16Z" fill="#3A8B4D"/>
                <text x="35" y="28" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#2D5234">Fairway</text>
              </svg>
            </div>
            <div className="flex items-center gap-6">
              <a href="#blog" className="text-gray-700 hover:text-primary-green transition hidden md:inline">Blog/Resources</a>
              <a
                href="#contact"
                className="bg-primary-green hover:bg-primary-green-dark text-white font-semibold px-6 py-2 rounded transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Helping You
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Buy Your Dream Home
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Buying a home is a big decision. We are here to answer questions, explain your options, and help you make the right move.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-dark text-white font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl"
            >
              GET IN TOUCH
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Tilted Photos */}
          <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap mt-16">
            <div className="transform -rotate-6 transition-transform hover:rotate-0 shadow-xl">
              <Image
                src="/images/team-1.jpg"
                alt="Happy homeowners"
                width={300}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="transform rotate-3 transition-transform hover:rotate-0 shadow-xl">
              <Image
                src="/images/team-2.jpg"
                alt="Successful home closing"
                width={300}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="transform -rotate-3 transition-transform hover:rotate-0 shadow-xl">
              <Image
                src="/images/team-3.jpg"
                alt="Happy clients"
                width={300}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Real Results</h3>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4.91</div>
              <div className="text-gray-400">Average Review</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">167</div>
              <div className="text-gray-400">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">63</div>
              <div className="text-gray-400">Loans This Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              My Story
            </h2>
            <p className="text-lg text-gray-600 italic">
              Hi, I'm Daniel Fowler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <Image
                  src="/images/team-4.jpg"
                  alt="Daniel Fowler and team"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a father of two born and raised in Oklahoma, and I help families navigate the home buying process with clarity and confidence.
              </p>

              <p>
                I grew up in a household with nine siblings and limited financial resources, which showed me early on how powerful financial education can be. After studying finance at OSU, I began my career as a financial advisor, helping clients grow and manage their wealth.
              </p>

              <p>
                When I moved back to Tulsa, I transitioned into mortgage lending and realized I could make the biggest impact earlier in the journey. Today, I help people build credit, create a plan and prepare for homeownership.
              </p>

              <p>
                Buying my first home was one of the most empowering moments of my life. My goal is to help others use homeownership as a foundation to build long-term wealth and security.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-dark text-white font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl mt-6"
              >
                LEARN MORE
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src="/images/team-5.jpg"
              alt="Daniel Fowler with client"
              width={400}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-primary-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact me today for a free pre-approval.
              </h2>
              <p className="text-lg text-white/90">
                Let's get started—understand your options, and see what you qualify for before you start shopping.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-primary-green hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-xl"
              >
                GET IN TOUCH
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <svg className="h-12 w-auto" viewBox="0 0 120 50" fill="none">
                  <path d="M20 10L12 20L20 30V10Z" fill="#3A8B4D"/>
                  <path d="M12 20L20 30L28 20L20 10L12 20Z" fill="#4CAF50"/>
                  <text x="35" y="32" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">HOME</text>
                </svg>
              </div>
              <div className="text-sm text-gray-400 space-y-2">
                <p className="font-semibold text-white">NMLS ADDRESS</p>
                <p>4164 South Harvard Ave Suite E-1</p>
                <p>Tulsa, OK 74135</p>
                <p className="mt-4 font-semibold text-white">Madison Headquarters Location</p>
                <p>2750 E Beltline Lane, Madison, WI 53718</p>
                <p className="mt-4">Toll Free: 866-912-4800</p>
                <p>Monday–Friday, 8:30 a.m.–5:00 p.m. Central</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Toll Free: 800-320-7544</p>
                <p className="mt-4 text-primary-green hover:underline cursor-pointer">Contact Customer Service</p>
                <p className="mt-4 font-semibold text-white">Loan Serviced in New York?</p>
                <p className="text-primary-green hover:underline cursor-pointer">Click Here</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Report Fraud / Suspicious Activity</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Hotline: 858-605-0067</p>
                <p className="mt-4 text-primary-green hover:underline cursor-pointer">Report An Incident Online, click here</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Complaints</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Toll Free: 877-529-3276</p>
                <p className="text-primary-green hover:underline cursor-pointer">Submit Complaint</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 mt-6">
            <div className="text-sm text-gray-400 space-y-2 mb-4">
              <p className="font-semibold text-white">Legal Information & Links</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="text-primary-green hover:underline">Privacy Policy</a>
                <a href="#" className="text-primary-green hover:underline">Terms of Use</a>
                <a href="#" className="text-primary-green hover:underline">Legal Disclosures</a>
                <a href="#" className="text-primary-green hover:underline">Cease Consumer Complaints</a>
                <a href="#" className="text-primary-green hover:underline">IL Community Reinvestment Notice</a>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-6">
              <p>© Copyright 2025 Fairway Independent Mortgage Corporation | NMLS # 2289 | All rights reserved. <a href="https://nmlsconsumeraccess.org/" className="text-primary-green hover:underline">nmlsconsumeraccess.org</a></p>
            </div>

            <div className="flex flex-wrap items-center gap-8 justify-center md:justify-start">
              <div className="text-center">
                <svg className="h-16 w-16 mx-auto" viewBox="0 0 64 64" fill="white">
                  <path d="M32 8L8 24v28h48V24L32 8zm0 4l20 14v24H12V26l20-14z"/>
                  <text x="32" y="38" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">EQUAL</text>
                  <text x="32" y="50" fontSize="8" textAnchor="middle" fill="white">HOUSING</text>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-2xl">NAHREP</p>
                <p className="text-gray-400 text-xs">National Association of Hispanic<br/>Real Estate Professionals</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">NMLS</p>
                <p className="text-gray-400 text-xs">Consumer Access</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
