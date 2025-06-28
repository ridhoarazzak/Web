import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to Luxury Hotel
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-lg mb-6"
          >
            Experience unparalleled luxury and comfort.
          </motion.p>
          <Link
            href="/booking"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
        }
