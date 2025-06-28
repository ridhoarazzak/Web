import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";

export default function Booking() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Book Your Stay</h1>
      <BookingForm />
    </motion.div>
  );
}
