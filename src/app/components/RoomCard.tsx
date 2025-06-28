import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface RoomCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function RoomCard({ title, description, price, image }: RoomCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-blue-600 font-semibold mb-4">{price}</p>
        <Link href="/booking" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book Now
        </Link>
      </div>
    </motion.div>
  );
}
