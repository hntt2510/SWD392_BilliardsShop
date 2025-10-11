import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Smith',
      text: 'My first order arrived today in perfect condition. From the time I sent a question about the item to tracking the shipment, the experience was a pleasure. Thank you for making my first online purchase a great experience. I would highly recommend to shopping on your site in the future and would highly recommend it.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      text: 'Great quality products and excellent customer service! The delivery was fast and the packaging was perfect. I will definitely order again from this shop.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mike Davis',
      text: 'Very satisfied with my purchase. The product arrived exactly as described and the price was competitive. Highly recommended!',
      rating: 4,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Customer Reviews
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Quote Mark */}
          <div className="text-6xl text-blue-600 mb-4 opacity-30">"</div>

          {/* Text */}
          <p className="text-gray-700 text-lg mb-6 italic">
            {current.text}
          </p>

          {/* Author */}
          <p className="text-gray-500 text-sm mb-4">
            - {current.name}
          </p>

          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-5 h-5 rounded-full ${
                  i < current.rating ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={next}
              className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}