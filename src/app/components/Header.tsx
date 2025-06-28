import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Luxury Hotel
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/rooms" className="text-gray-600 hover:text-gray-900">
            Rooms
          </Link>
          <Link href="/gallery" className="text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link
            href="/booking"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book Now
          </Link>
        </nav>
        <Menu className="md:hidden w-6 h-6" />
      </div>
    </motion.header>
  );
}
