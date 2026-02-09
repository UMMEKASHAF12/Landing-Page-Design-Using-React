import { motion } from "framer-motion";
import hero from "../assets/hero-img.png";
import trust from "../assets/trust.png";




const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#F3FBFA] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white -z-10" />

      <div className="max-w-5xl mx-auto px-4 pt-28 pb-20 text-center">

        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          A powerful online engagement tool <br className="hidden md:block" />
          that’s intuitive and simple to use.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-sm text-gray-500 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          With stellar one-click reports and unmatched support, see how
          Circle will make a difference in your business.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="bg-teal-500 hover:bg-teal-600 hover:scale-105 transition-transform text-white text-sm font-medium px-6 py-3 rounded shadow-lg">
            Get started free →
          </button>
        </motion.div>

              {/* Hero Image */}
    
        <img
          src={hero}
          alt="Team working"
          className="relative z-10 rounded-xl mt-12 mx-auto"
        />
     


        {/* Trust text */}
        <motion.p
          className="mt-14 text-sm text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
         <img
          src={trust}
          alt="Trusted by customers"
          className="relative z-10 rounded-xl mx-auto"
        />
        </motion.p>


        {/* Footer bullets */}
        <motion.div
          className="mt-6 flex flex-col md:flex-row justify-center gap-6 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
  
  <span className="flex items-center gap-1">
    <span className="text-teal-500">✔</span>
    18,231 signed up last month
  </span>

  <span className="flex items-center gap-1">
    <span className="text-teal-500">✔</span>
    GDPR & CCPA-ready
  </span>

  <span className="flex items-center gap-1">
    <span className="text-teal-500">✔</span>
    Leader@G2 Summer
  </span>

</div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
