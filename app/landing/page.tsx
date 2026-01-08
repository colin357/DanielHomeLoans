'use client';

import Image from "next/image";
import LandingForm from "../components/LandingForm";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Form */}
      <section className="relative bg-gradient-to-br from-primary-green/5 via-emerald-50 to-blue-50 py-16 md:py-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-primary-green/20">
              <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-gray-800">Trusted by 167+ Happy Homeowners</span>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Copy */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                  Rates Are <span className="bg-gradient-to-r from-primary-green to-emerald-600 bg-clip-text text-transparent">Dropping</span>
                </h1>
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl text-gray-800 font-semibold">
                    See if you can qualify in under <span className="text-primary-green">60 seconds</span>
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700">
                    Unlock your reality <span className="font-bold text-primary-green">in a few minutes.</span>
                  </p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary-green/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-emerald-600 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Save Thousands?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Whether it's a purchase or refinance, we can be your key to a better financial future. Stop paying high interest rates!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Simplify Your Path to Real Estate</h3>
                    <p className="text-gray-700">
                      Tired of paying rent every month? Let's discuss the best plan to help you own your dream home!
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero Image - Desktop */}
              <div className="hidden lg:block">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-green to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Image 1.jpg"
                      alt="Happy homeowners"
                      width={600}
                      height={450}
                      className="object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                {/* Form glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-green via-emerald-500 to-blue-500 rounded-3xl blur opacity-20"></div>
                <div className="relative">
                  <LandingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-green font-semibold mb-2">CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Does This Sound Like <span className="text-primary-green">You?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              It's time to take control of your mortgage options. Find more flexibility and options—faster, easier, lower payments and costs, with us.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You're not your home, but have credit card debt or other high-interest loans.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You're a homeowner & you actually qualify for a loan or new credit you can afford.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                You're worried about high interest rates and missing your chance to lock in before rates rise again.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700">
                The past process feels overwhelming, with too much paperwork and confusing jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-green font-semibold mb-2">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What My Clients Have To Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Daniel and the Fairway team helped us navigate every step with clear communication. No surprises, just excellent service from start to finish!"
              </p>
              <p className="font-bold text-gray-900">Drew C</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "Working with Daniel was amazing! He made the entire process smooth and was always available to answer my questions. Highly recommend!"
              </p>
              <p className="font-bold text-gray-900">Justin J</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "As a first-time home buyer, I had a lot of questions. Daniel was patient and helped me understand every step. We got the perfect home!"
              </p>
              <p className="font-bold text-gray-900">Sarah M</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-green font-semibold mb-2">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Three Steps To Buy Your Next Home
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Schedule Your Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Get started by booking a quick call where we'll review your goals, answer your questions, and see how much home you really qualify for.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Personalized Loan Strategy
                  </h3>
                  <p className="text-gray-600">
                    Based on your situation, we'll build a custom financing plan, whether you're buying your first home, upgrading, or refinancing, we show what works best for you.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Fast Execution & Support
                  </h3>
                  <p className="text-gray-600">
                    We guide you through the application, save those closing schedules, and support you all the way to closing. Clear, fast, no-BS guidance when you need it most.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                GET INSTANT ACCESS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Daniel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <Image
                  src="/images/daniel-fowler-2401594.png"
                  alt="Daniel Fowler"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hi, I'm Daniel Fowler
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a former financial advisor and Iraq War combat vet, I've been dedicated to helping individuals and families achieve their real estate dreams. My goal is simple: make the mortgage process clear, straightforward, and stress-free—so you can focus on finding your perfect home. I genuinely care about my clients' needs and well-being, and I always prioritize transparency over sales tactics. Let me help you navigate your home financing with the highest levels of integrity and care.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">Recognized Expert in Mortgage Lending</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">Trusted by Clients Throughout Iowa</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 font-medium">Offering Same-Day Pre-Approvals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/Fairway Home Mortgage.webp"
                alt="Fairway Independent Mortgage"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-sm text-gray-400">
                4164 South Harvard Ave Suite E-1<br />
                Tulsa, OK 74135
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-green">Customer Service</h4>
              <p className="text-sm text-gray-400 mb-2">Toll Free: 800-320-7544</p>
              <a href="#" className="text-sm text-primary-green hover:text-emerald-400">Contact Customer Service</a>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-green">Report Fraud</h4>
              <p className="text-sm text-gray-400 mb-2">Hotline: 858-605-0067</p>
              <a href="#" className="text-sm text-primary-green hover:text-emerald-400">Report An Incident</a>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-green">Complaints</h4>
              <p className="text-sm text-gray-400 mb-2">Toll Free: 877-529-3276</p>
              <a href="#" className="text-sm text-primary-green hover:text-emerald-400">Submit Complaint</a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <a href="#" className="hover:text-primary-green">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-green">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-primary-green">Legal Disclosures</a>
            </div>
            <p className="text-xs text-gray-500">
              © Copyright 2025 Fairway Independent Mortgage Corporation | NMLS # 2289 | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
