import { useRef } from "react";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

// Sample News Data
const newsData = [
  {
    id: 1,
    title: "University Announces New Research Center for Artificial Intelligence",
    excerpt:
      "The university is proud to announce the establishment of a cutting-edge AI research center, featuring state-of-the-art facilities and partnerships with leading tech companies...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "3 min read",
    category: "Research",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/Law_news.jpg?resize=250%2C250&ssl=1",
  },
  {
    id: 2,
    title: "Spring Semester Registration Opens Next Week",
    excerpt:
      "Students can begin registering for spring semester courses starting Monday, January 22nd. Priority registration will be given to seniors and graduate students...",
    author: "Academic Affairs",
    date: "2024-01-12",
    readTime: "2 min read",
    category: "Academic",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/1000083439.jpg?resize=250%2C245&ssl=1",
  },
  {
    id: 3,
    title: "Campus Sustainability Initiative Wins National Award",
    excerpt:
      "Our university's comprehensive sustainability program has been recognized with the Green Campus Excellence Award for outstanding environmental stewardship...",
    author: "Environmental Committee",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Campus Life",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/LU-Library-Orientation.jpg?resize=250%2C250&ssl=1",
  },
  {
    id: 4,
    title: "New Student Housing Complex Opens Fall 2024",
    excerpt:
      "Construction is nearing completion on the new 500-bed residential complex, featuring modern amenities, study spaces, and sustainable design elements...",
    author: "Housing Department",
    date: "2024-01-08",
    readTime: "3 min read",
    category: "Campus Life",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/Orientation_Summer-2025.jpg?resize=250%2C208&ssl=1",
  },
  {
    id: 5,
    title: "Faculty Research Team Receives $2M Federal Grant",
    excerpt:
      "The Department of Engineering has been awarded a significant federal grant to advance renewable energy research, focusing on next-generation solar panel technology...",
    author: "Dr. Michael Chen",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Research",
    image: "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/CSE-Programing-Contest.jpg?resize=250%2C250&ssl=1",
  },
];

const getCategoryColor = (category) => {
  switch (category) {
    case "Research":
      return "bg-blue-200 text-blue-900";
    case "Academic":
      return "bg-green-200 text-green-900";
    case "Campus Life":
      return "bg-purple-200 text-purple-900";
    default:
      return "bg-gray-300 text-gray-800";
  }
};

const CARD_HEIGHT = 220;

export default function UniversityNews() {
  const containerRef = useRef(null);

  const scrollUp = () => {
    containerRef.current.scrollBy({ top: -CARD_HEIGHT, behavior: "smooth" });
  };

  const scrollDown = () => {
    containerRef.current.scrollBy({ top: CARD_HEIGHT, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest University News</h1>
          <p className="text-gray-700">Stay updated with the latest happenings around campus</p>
        </div>

        {/* Vertical Scroll Container */}
        <div className="relative">
          <div className="h-[660px] overflow-hidden rounded-md">
            <div
              ref={containerRef}
              className="flex flex-col gap-4 overflow-y-scroll scroll-smooth h-full px-1"
            >
              {newsData.map((news, index) => (
                <div
                  key={news.id}
                  className="flex flex-col lg:flex-row bg-[#e3e3e3] border border-gray-300 rounded-md overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
                  style={{ minHeight: `${CARD_HEIGHT}px` }}
                >
                  {/* Image */}
                  <div className="w-[350px] h-[100px] lg:h-full p-2 flex-shrink-0 flex justify-center">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-contain lg:object-cover rounded-md lg:border lg:border-gray-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 text-gray-800 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-[9px] lg:text-xs font-medium text-gray-800 px-1 lg:px-2 lg:py-1 rounded ${getCategoryColor(
                            news.category
                          )}`}
                        >
                          {news.category}
                        </span>
                        <span className="text-sm text-gray-600 hidden lg:inline">#{index + 1}</span>
                      </div>
                      <h2 className=" text-sm lg:text-2xl font-semibold leading-tight transition-colors cursor-pointer">
                        {news.title}
                      </h2>
                      <p className="text-[8px] lg:text-sm mt-2 text-gray-800">{news.excerpt}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3 text-sm text-gray-700">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(news.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                      <motion.button
                        whileTap={{ scale: 1.8 }}
                        className="bg-[#455A64] hover:bg-[#2a3f4b] text-white px-4 py-2 font-semibold rounded transition inline-flex items-center gap-2"
                      >
                        Read More <span>➝</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Controls */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <motion.button
              onClick={scrollUp}
              className="bg-[#455A64] hover:bg-[#2a3f4b] text-white px-4 py-3 font-semibold rounded transition inline-flex items-center gap-2 justify-center"
            >
              <span className="rotate-270">➝</span> Previous
            </motion.button>
            <motion.button
              onClick={scrollDown}
              className="bg-[#455A64] hover:bg-[#2a3f4b] text-white px-4 py-3 font-semibold rounded transition inline-flex items-center gap-2 justify-center"
            >
              Next <span className="rotate-90">➝</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
