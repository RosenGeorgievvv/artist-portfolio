import { MdArrowOutward } from "react-icons/md";
import { SONGS } from "../constants/index";
import { motion } from "framer-motion";

const Songs = () => {
  return (
    <section className="pt-20" id="songs">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Songs
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SONGS.map((song) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={song.id}
            className="group relative overflow-hidden rounded-3xl"
          >
            <motion.img
            whileHover={{scale: 1.1}}
              src={song.image}
              alt={song.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <div className="flex space-x-4">
                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-full bg-white px-4 py-2 text-black hover:bg-green-300"
                >
                  <span>Listen</span>
                  <MdArrowOutward />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Songs;
