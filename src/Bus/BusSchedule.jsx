import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bus, Clock, Calendar, MapPin } from 'lucide-react';

const days = ['Sunday to Thursday', 'Friday', 'Saturday'];
const toUniversityRoutes = [
  {
    id: 1,
    name: 'Tilagor',
    departures: {
      'Sunday to Thursday': [
        { time: '8:00', buses: 3 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
      Friday: [
        { time: '8:00', buses: 2 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
      Saturday: [
        { time: '8:00', buses: 2 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
    },
  },
  {
    id: 2,
    name: 'Surma Tower',
    departures: {
      'Sunday to Thursday': [
        { time: '8:00', buses: 5 },
        { time: '9:00', buses: 4 },
        { time: '10:00', buses: 3 },
        { time: '12:00', buses: 2 },
      ],
      Friday: [
        { time: '8:00', buses: 2 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
      Saturday: [
        { time: '8:00', buses: 2 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
    },
  },
  {
    id: 3,
    name: 'Lakkatura',
    departures: {
      'Sunday to Thursday': [
        { time: '8:00', buses: 3 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 1 },
      ],
      Friday: [
        { time: '8:00', buses: 1 },
        { time: '9:00', buses: 1 },
        { time: '10:00', buses: 1 },
        { time: '12:00', buses: 1 },
      ],
      Saturday: [
        { time: '8:00', buses: 1 },
        { time: '9:00', buses: 1 },
        { time: '10:00', buses: 1 },
        { time: '12:00', buses: 1 },
      ],
    },
  },
  {
    id: 4,
    name: 'Tilagor (Alt)',
    departures: {
      'Sunday to Thursday': [
        { time: '8:00', buses: 5 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
      Friday: [
        { time: '8:00', buses: 2 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
      Saturday: [
        { time: '8:00', buses: 2 },
        { time: '9:00', buses: 2 },
        { time: '10:00', buses: 2 },
        { time: '12:00', buses: 2 },
      ],
    },
  }
];

const fromUniversityRoutes = [
  {
    id: 1,
    name: 'Tilagor',
    departures: {
      'Sunday to Thursday': [
        { time: '11:45', buses: 2 },
        { time: '12:50', buses: 2 },
        { time: '2:35', buses: 2 },
        { time: '3:50', buses: 2 },
        { time: '5:05', buses: 2 },
      ],
      Friday: [
        { time: '11:45', buses: 2 },
        { time: '2:35', buses: 2 },
        { time: '3:45', buses: 2 },
        { time: '5:05', buses: 2 },
      ],
      Saturday: [
        { time: '11:45', buses: 2 },
        { time: '2:35', buses: 2 },
        { time: '3:45', buses: 2 },
        { time: '5:05', buses: 2 },
      ],
    },
  },
];

export default function BusSchedule() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [tab, setTab] = useState('to');
  const containerRef = useRef(null);

  const activeRoutes = tab === 'to' ? toUniversityRoutes : fromUniversityRoutes;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 md:py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Bus className="w-12 h-12 text-emerald-300" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-200 to-emerald-100 bg-clip-text text-transparent">
              Bus Schedule 2025
            </h1>
            <Bus className="w-12 h-12 text-emerald-300" />
          </div>
          <p className="text-emerald-200 text-lg opacity-90">
            Your gateway to seamless campus transportation
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          className="flex justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setTab('to')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              tab === 'to'
                ? 'bg-white text-emerald-800 shadow-lg shadow-emerald-500/25 scale-105'
                : 'bg-emerald-700/50 hover:bg-emerald-600/60 text-emerald-100 backdrop-blur-sm border border-emerald-500/30'
            }`}
          >
            <MapPin className="w-5 h-5" />
            To University
          </button>
          <button
            onClick={() => setTab('from')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              tab === 'from'
                ? 'bg-white text-emerald-800 shadow-lg shadow-emerald-500/25 scale-105'
                : 'bg-emerald-700/50 hover:bg-emerald-600/60 text-emerald-100 backdrop-blur-sm border border-emerald-500/30'
            }`}
          >
            <MapPin className="w-5 h-5" />
            From University
          </button>
        </motion.div>

        {/* Day switcher */}
        <motion.div
          className="flex justify-center mb-12 gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {days.map((day, index) => (
            <motion.button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedDay === day
                  ? 'bg-white text-emerald-800 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-emerald-700/50 hover:bg-emerald-600/60 text-emerald-100 backdrop-blur-sm border border-emerald-500/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Calendar className="w-4 h-4" />
              {day}
            </motion.button>
          ))}
        </motion.div>

        {/* Routes */}
        <motion.div
          className="max-w-6xl mx-auto space-y-8"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeRoutes.map((route, routeIndex) => (
            <motion.div
              key={`${route.id}-${tab}`}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)" 
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-emerald-100">
                    {tab === 'to' ? 'Route:' : 'Return to:'} {route.name}
                  </h2>
                  <p className="text-emerald-300 text-sm">
                    {tab === 'to' ? 'Departing to University' : 'Returning from University'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {route.departures[selectedDay]?.map((entry, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-emerald-600/30 to-emerald-700/30 backdrop-blur-sm p-5 rounded-xl text-center border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(16, 185, 129, 0.15)"
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-emerald-300" />
                      <p className="text-xl font-bold text-emerald-100">{entry.time}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Bus className="w-4 h-4 text-emerald-300" />
                      <p className="text-emerald-200">
                        {entry.buses} {entry.buses === 1 ? 'Bus' : 'Buses'}
                      </p>
                    </div>
                    <div className="mt-2 flex justify-center">
                      {Array.from({ length: entry.buses }, (_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-emerald-400 rounded-full mx-0.5"
                        />
                      ))}
                    </div>
                  </motion.div>
                )) || (
                  <div className="col-span-full text-center py-8">
                    <Bus className="w-12 h-12 text-emerald-400 mx-auto mb-4 opacity-50" />
                    <p className="text-emerald-300 text-lg">No schedules available for this day</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 text-emerald-300 opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-sm">
            🚌 Schedule may vary based on traffic and weather conditions
          </p>
        </motion.div>
      </div>
    </div>
  );
}