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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-HsMORSu0l3xMnXyk73uzsJqAdlbZyt9hA&s',
  },
  {
    title: 'CSE Carnival',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yUOg3VFWCsBwDGv7vJW3yYEGjjjDPg0zow&s',
  },
  {
    title: 'Project Showdown',
    image: 'https://media.licdn.com/dms/image/v2/C560BAQHgrN0SvSwb8g/company-logo_200_200/company-logo_200_200/0/1630630928240?e=2147483647&v=beta&t=MNYLsyFTnWe7QO_AAlhihdKdJ252WEAOZKTuAJoAj-k',
  },
  {
    title: 'Robotics Workshop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDK6l0vR0aPcV47T3iVBXj0dC-rmllPj3EQ&s',
  },
  {
    title: 'Career Fair',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQdGmVpF_xgg7fU1L7rP4MMxnEQFv58_YYQ&s',
  },
  {
    title: 'Hackathon 2025',
    image: 'https://i.ytimg.com/vi/VGJOvwgMXTw/maxresdefault.jpg',
  },

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
                className="h-64 w-full object-cover"
              />
              <div className="p-4 text-center font-semibold">{event.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
