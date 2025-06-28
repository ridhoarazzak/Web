import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoomCard
            title="Deluxe Suite"
            description="Spacious suite with ocean view and private balcony."
            price="$250/night"
            image="/images/deluxe-suite.jpg"
          />
          <RoomCard
            title="Executive Room"
            description="Elegant room with modern amenities."
            price="$180/night"
            image="/images/executive-room.jpg"
          />
          <RoomCard
            title="Standard Room"
            description="Cozy room for a comfortable stay."
            price="$120/night"
            image="/images/standard-room.jpg"
          />
        </div>
      </motion.section>
    </div>
  );
}
