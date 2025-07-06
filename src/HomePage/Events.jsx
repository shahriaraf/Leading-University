import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Play, Pause } from 'lucide-react';

const events = [
  {
    title: 'Tech Fest 2025',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-HsMORSu0l3xMnXyk73uzsJqAdlbZyt9hA&s',
    date: 'March 15, 2025',
    location: 'Main Auditorium',
    description: 'The biggest tech event of the year featuring cutting-edge innovations.',
    category: 'Technology',
    time: '9:00 AM'
  },
  {
    title: 'CSE Carnival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yUOg3VFWCsBwDGv7vJW3yYEGjjjDPg0zow&s',
    date: 'March 20, 2025',
    location: 'Campus Ground',
    description: 'A fun-filled carnival celebrating computer science and engineering.',
    category: 'Festival',
    time: '2:00 PM'
  },
  {
    title: 'Project Showdown',
    image: 'https://media.licdn.com/dms/image/v2/C560BAQHgrN0SvSwb8g/company-logo_200_200/company-logo_200_200/0/1630630928240?e=2147483647&v=beta&t=MNYLsyFTnWe7QO_AAlhihdKdJ252WEAOZKTuAJoAj-k',
    date: 'March 25, 2025',
    location: 'Innovation Lab',
    description: 'Students showcase their most innovative projects and compete for prizes.',
    category: 'Competition',
    time: '10:00 AM'
  },
  {
    title: 'Robotics Workshop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDK6l0vR0aPcV47T3iVBXj0dC-rmllPj3EQ&s',
    date: 'April 2, 2025',
    location: 'Engineering Block',
    description: 'Hands-on workshop on building and programming robots.',
    category: 'Workshop',
    time: '1:00 PM'
  },
  {
    title: 'Career Fair',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdGmVpF_xgg7fU1L7rP4MMxnEQFv58_YYQ&s',
    date: 'April 8, 2025',
    location: 'Conference Hall',
    description: 'Connect with top companies and explore career opportunities.',
    category: 'Career',
    time: '11:00 AM'
  },
  {
    title: 'Hackathon 2025',
    image: 'https://i.ytimg.com/vi/VGJOvwgMXTw/maxresdefault.jpg',
    date: 'April 15, 2025',
    location: 'Tech Hub',
    description: '48-hour coding marathon to solve real-world problems.',
    category: 'Competition',
    time: '6:00 PM'
  },
];

const categoryColors = {
  Technology: 'bg-blue-100 text-blue-800',
  Festival: 'bg-pink-100 text-pink-800',
  Competition: 'bg-red-100 text-red-800',
  Workshop: 'bg-green-100 text-green-800',
  Career: 'bg-purple-100 text-purple-800'
};

const getItemsPerSlide = () => {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  const totalSlides = Math.ceil(events.length / itemsPerSlide);

  const updateItemsPerSlide = () => {
    setItemsPerSlide(getItemsPerSlide());
    setCurrentSlide(0);
  };

  useEffect(() => {
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleAutoSlide = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Discover exciting events, workshops, and opportunities to grow your skills and connect with the community
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <button onClick={prevSlide} className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-800" />
          </button>

          <div className="flex items-center space-x-4">
            <button onClick={toggleAutoSlide} className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50">
              {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 ml-0.5" />}
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#0d5e41] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}>
                  {index === currentSlide && isPlaying && (
                    <div className="absolute inset-0 rounded-full bg-[#0d5e41] animate-ping opacity-75"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-800" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 flex flex-row gap-4 sm:gap-6 lg:gap-8 px-2 justify-center">
                {events.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((event, cardIndex) => (
                  <div key={cardIndex} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                    <div className="relative overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category]}`}>
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">{event.title}</h3>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-green-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-red-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{event.description}</p>
                      <button className="w-full bg-gradient-to-r from-[#023020] to-[#034830] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#034830] hover:to-[#023020] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group">
            View All Events
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
