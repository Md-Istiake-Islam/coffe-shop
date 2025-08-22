"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
   {
      id: 1,
      title: "Premium Ethiopian Coffee",
      description:
         "Experience the rich, complex flavors of our single-origin Ethiopian beans with notes of chocolate and citrus.",
      image: "https://i.ibb.co.com/s9S6vNZL/pexels-ifreestock-585753.jpg",
      buttonText: "Shop Ethiopian",
   },
   {
      id: 2,
      title: "Artisan Roasted Blends",
      description:
         "Our master roasters craft perfect blends that deliver exceptional taste and aroma in every cup.",
      image: "https://i.ibb.co.com/nqPc8Zdr/pexels-igor-haritanovich-814387-1695052.jpg",
      buttonText: "Explore Blends",
   },
   {
      id: 3,
      title: "Professional Equipment",
      description:
         "Elevate your brewing game with our selection of professional-grade coffee equipment and accessories.",
      image: "https://i.ibb.co.com/jkB8CM3D/pexels-juanpphotoandvideo-894695.jpg",
      buttonText: "Shop Equipment",
   },
];

export default function Hero() {
   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
   }, []);

   const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
   };

   const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
   };

   return (
      <div className="relative min-h-[calc(100vh-250px)] overflow-hidden">
         {slides.map((slide, index) => (
            <div
               key={slide.id}
               className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
               }`}
            >
               <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
               >
                  <div className="absolute inset-0 bg-black opacity-50" />
               </div>

               <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="max-w-lg">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                           {slide.title}
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                           {slide.description}
                        </p>
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                           <span>{slide.buttonText}</span>
                           <ArrowRight className="h-5 w-5" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         ))}

         {/* Navigation Arrows */}
         <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
         >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
         </button>
         <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
         >
            <ChevronRight className="h-6 w-6 text-gray-800" />
         </button>

         {/* Slide Indicators */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                     index === currentSlide
                        ? "bg-amber-600"
                        : "bg-white bg-opacity-50"
                  }`}
               />
            ))}
         </div>
      </div>
   );
}
