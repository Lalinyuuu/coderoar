import heroImage from "../assets/images/hero image.jpg";
import React from 'react'; 

function HeroSection() {
  return (
    <section className="bg-white min-h-screen max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
      {/* Left: Title */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          <span className="block">Stay</span>
          <span className="block">Informed,</span>
          <span className="block">Stay Inspired</span>
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Discover a World of Knowledge at Your Fingertips.<br />
          Your Daily Dose of Inspiration and Information.
        </p>
      </div>

      {/* Center: Image */}
      <div className="flex justify-center">
        <img
          src={heroImage}
          alt="Author"
          className="rounded-2xl w-full max-w-[300px] md:max-w-sm object-cover"
        />
      </div>

      {/* Right: Author Bio */}
      <div className="text-sm text-gray-700 space-y-2">
        <p className="text-xs text-gray-500">– Author</p>
        <p className="font-semibold text-lg text-gray-900">Thompson P.</p>
        <p>
          I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
        </p>
        <p>
          When I’m not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;