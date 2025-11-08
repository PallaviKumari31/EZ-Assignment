import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {

    // Prevent scroll jump on refresh
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div >

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                    <div className="relative w-fit -ml-20">


                        <motion.img
                            src="/Hero.webp"
                            className="block w-full h-auto"
                            style={{ transformOrigin: "50% 50%" }}
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        />
                        <img
                            src="/Logo.png"
                            className="absolute top-1/2 left-1/2 
                                       -translate-x-1/2 -translate-y-1/2
                                       w-40 h-auto"
                        />
                    </div>
                    {/* HERO TEXT */}
                    <div>
                        <div className="mb-4">
                            <p className="font-island text-[#2A474A]
 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
               leading-tight ">
                                Varnan is where stories find
                            </p>
                            <p className="font-island text-[#2A474A]
 text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-center  
               leading-tight ">
                                their voice and form
                            </p>
                        </div>
                        <p className="font-halant text-orange-500 text-[14px] md:text-[24px] lg:text-[37px]  tracking-wide text-center mt-15">
                            Films
                            <span className="text-[15px] px-3 align-baseline">•</span>
                            Brands
                            <span className="text-[15px] px-3 align-baseline">•</span>
                            Art
                        </p>

                        <p className="font-instrument font-thin text-[17px] md:text-[19px] lg:text-[22px] mb-10 mt-19  text-center text-charcoal/40 leading-7 pl-9 pr-14">
                            Since 2009, we’ve been telling stories - stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. We believe it takes trust, patience, and an eye for the unseen to capture what truly matters.
                            V don’t just tell stories - V honor them.
                        </p>

                    </div>
                </div>
            </section>

         
            <section className="py-24 relative ">

  <div className="max-w-7xl mx-auto px-4 relative">

    
    <img
      src="/Sticky Note (2).webp"
      alt="Sticky Note"
      className="absolute -left-5 -top-46 w-89 rotate-[-8deg] drop-shadow-xl"
    />
   
    {/* Branding arrow */}
    <img
      src="/Branding Experts.jpg"
      alt="Arrow Left"
      className="absolute right-68 top-80 w-60 mix-blend-multiply"
    />


    {/* Film arrow */}
    <img
      src="/Film maker.jpg"
      alt="Arrow Down"
      className="absolute right-40 -top-32 w-30 mix-blend-multiply"
    />


    {/* Art arrow */}
    <img
      src="/Art curator.jpg"
      alt="Arrow Right"
      className="absolute right-173 -top-45 w-25 mix-blend-multiply"
    />

    {/* Silhouettes group */}
    <div className="flex justify-center mt-40 gap-4">
      <img src="/Group2.jpg" className="w-130 ml-70 mix-blend-multiply" />
    </div>

    {/* Bottom Text */}
    <p className="text-center font-halant text-[26px] md:text-[32px] text-[#0B2040] font-light ml-68 mt-17">
      Take a closer look at the stories V bring to life.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center mt-6 ml-60">
      <button className="px-4 py-3 bg-[#E76F34] text-white rounded-full text-sm shadow">
        View Portfolio
      </button>
    </div>

    {/* India Gate Bottom Left */}
    <img
      src="/indiagate.jpg"
      className="absolute -left-25 -bottom-4 w-87 mix-blend-multiply"
      alt="India Gate"
    />

  </div>

</section>
<section className="relative py-24 overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">

    {/* LEFT TEXT BLOCK    */}
    <div>
      <p className="font-halant text-[#252628] font-thin text-[28px] md:text-[36px] mb-6 -ml-13">
        A montage of familiar faces and names.
      </p>

      <p className="font-instrument text-[#252628] font-light text-[18px] md:text-[20px] leading-relaxed max-w-md text-center -ml-7 ">
        Some stories come from the biggest names. Others begin with bold, rising voices.
        We’ve been fortunate to walk alongside both – listening, creating, and building
        stories that matter.
      </p>
    </div>

    {/* RIGHT HANDWRITTEN PARAGRAPH */}
    <div className="flex items-center">
      <p className="font-island text-charcoal text-[34px] md:text-[43px] -mt-11 ml-13 leading-snug max-w-lg text-center text-[#2A474A]">
        Every project is more than just a brief 
        it's a new chapter waiting to be written.
        Together, we've crafted tales that inspire,
        connect, and endure.
      </p>
    </div>

  </div>

  <div className="flex justify-center mt-19 -ml-180 gap-1 md:gap-1">
  
    {/* Card 1 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true }}
    className="relative"
  >
    <img src="stat1.webp" className="w-50 md:w-55 rotate-[6deg]" />
  </motion.div>

  {/* Card 2 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
    className="relative"
  >
    <img src="/stat2.webp" className="w-50 md:w-55 rotate-[3deg]" />
  </motion.div>

  {/* Card 3 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    viewport={{ once: true }}
    className="relative"
  >
    <img src="/stat3.png" className="w-50 md:w-55 rotate    -[2deg]" />  
  </motion.div>

</div>

 <div className="relative flex justify-center -mt-62 left-115">

  {/* Rotating Circle */}
  <motion.img
    src="/ClientBrands.webp"
    className="w-[260px] md:w-[380px] lg:w-[450px]"
    style={{ transformOrigin: "50% 50%" }}
    animate={{ rotate: -360 }}
    transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
  />

  {/* Mountain Artwork in Center */}
  <img
    src="/sunset.webp"
    className="absolute top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2
               w-[160px] md:w-[240px] lg:w-[300px]"
  />

</div>

</section>


       

        </div>
    );
}
