
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const LatestNews = () => {
  const newsData = [
    {
      title: "Student wins global AI contest",
      date: "June 20, 2025",
      image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/Orientation_Summer-2025.jpg?resize=250%2C208&ssl=1",
    },
    {
      title: "New Research Lab Opens",
      date: "June 18, 2025",
      image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/CSE-Programing-Contest.jpg?resize=250%2C250&ssl=1",
    },
    {
      title: "Scholarship Program Announced",
      date: "June 15, 2025",
      image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-17-at-4.14.00-PM.jpeg?resize=250%2C250&ssl=1",
    },
    {
      title: "Scholarship Program Announced",
      date: "June 15, 2025",
      image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/IMG-20250509-WA0004.jpg?resize=250%2C179&ssl=1",
    },
    {
      title: "Scholarship Program Announced",
      date: "June 15, 2025",
      image: "https://i.ytimg.com/vi/KWlLSFmolJg/maxresdefault.jpg",
    },

    // Add more if needed
  ];

  return (
    <section className="py-16 bg-[#e3e3e3] text-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[ Autoplay]}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsData.map((news, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white hover:bg-[#455A64] hover:text-gray-200 rounded shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover hover:scale-110 duration-400" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{news.title}</h3>
                  <p className="text-sm">{news.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestNews;
