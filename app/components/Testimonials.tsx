'use client';

import { useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah & Michael Chen",
    location: "Broken Arrow, OK",
    text: "Daniel made our first home buying experience incredibly smooth. He was always available to answer our questions and guided us through every step. We closed in 30 days and couldn't be happier!",
    rating: 5
  },
  {
    name: "Robert Martinez",
    location: "Tulsa, OK",
    text: "As a self-employed business owner, I thought getting a mortgage would be difficult. Daniel knew exactly what documentation I needed and made the whole process painless. Highly recommend!",
    rating: 5
  },
  {
    name: "Jennifer Thompson",
    location: "Jenks, OK",
    text: "Daniel helped me refinance my home and saved me over $400 per month! His expertise and dedication to finding the best rates is unmatched. Thank you, Daniel!",
    rating: 5
  },
  {
    name: "David & Lisa Patel",
    location: "Bixby, OK",
    text: "We had worked with other lenders before and were frustrated with the process. Daniel was different - responsive, knowledgeable, and truly cared about getting us the best deal. We're now in our dream home!",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    location: "Owasso, OK",
    text: "Daniel went above and beyond to help me secure financing for my new home. His communication was excellent, and he made sure I understood every step. I'll definitely work with him again!",
    rating: 5
  },
  {
    name: "James Wilson",
    location: "Sand Springs, OK",
    text: "Professional, knowledgeable, and genuinely cares about his clients. Daniel found me a better rate than I thought possible and made the entire process stress-free. Five stars!",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <div className="relative">
      {/* Desktop View - 3 columns */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="border-t border-gray-200 pt-4">
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - 1 column */}
      <div className="md:hidden space-y-6 mb-8">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 leading-relaxed mb-4 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="border-t border-gray-200 pt-4">
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4">
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-full bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary-green w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-full bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
