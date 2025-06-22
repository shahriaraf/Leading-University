import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// Sample event data
const events = [
  {
    title: 'Tech Fest 2025',
    image: 'https://source.unsplash.com/400x300/?technology,festival',
  },
  {
    title: 'CSE Carnival',
    image: 'https://source.unsplash.com/400x300/?computer,students',
  },
  {
    title: 'Project Showdown',
    image: 'https://source.unsplash.com/400x300/?presentation,project',
  },
  {
    title: 'Robotics Workshop',
    image: 'https://source.unsplash.com/400x300/?robotics,university',
  },
  {
    title: 'Career Fair',
    image: 'https://source.unsplash.com/400x300/?career,fair',
  },
  {
    title: 'Hackathon 2025',
    image: 'https://source.unsplash.com/400x300/?hackathon,coding',
  },
  {
    title: 'AI Seminar',
    image: 'https://source.unsplash.com/400x300/?ai,seminar',
  },
  {
    title: 'Startup Meetup',
    image: 'https://source.unsplash.com/400x300/?startup,meetup',
  },
  {
    title: 'Cultural Night',
    image: 'https://source.unsplash.com/400x300/?cultural,event',
  }
];

export default function Events() {
  return (
    <div className="h-screen w-full bg-black text-white px-4 py-8">
      <Swiper
        slidesPerView={3}
        grid={{ rows: 2 }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className="w-full h-full"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center font-semibold">{event.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
