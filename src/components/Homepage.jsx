import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: false, amount: 0.3 },
  });

  return (
    <div>

      <section className="pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="relative inline-block mx-auto lg:mx-0 lg:-ml-20" >
            <motion.img
              src="/Hero.webp"
              className="block w-[72vw] max-w-[520px] md:max-w-[600px] lg:max-w-[640px] h-auto"
              style={{ transformOrigin: "50% 50%" }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            <img
              src="/Logo.png"
              className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32vw] max-w-[220px] md:max-w-[260px] lg:max-w-[300px] h-auto"
              alt=""
            />
          </div>


          <div className="mt-8 lg:mt-0">
            <motion.div {...fadeUp(0.05)} className="mb-3 sm:mb-4">
              <p className="font-island text-[#2A474A] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Varnan is where stories find
              </p>
              <p className="font-island text-[#2A474A] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-center lg:text-left">
                their voice and form
              </p>
            </motion.div>

            <motion.p
              {...fadeUp(0.12)}
              className="font-halant text-orange-500 text-sm sm:text-base md:text-2xl lg:text-[37px] tracking-wide text-center lg:text-left mt-4"
            >
              Films
              <span className="text-sm sm:text-base px-2 sm:px-3 align-baseline">•</span>
              Brands
              <span className="text-sm sm:text-base px-2 sm:px-3 align-baseline">•</span>
              Art
            </motion.p>

            <motion.p
              {...fadeUp(0.18)}
              className="font-instrument font-thin text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] mt-6 md:mt-8 mb-6 md:mb-10 text-center lg:text-left text-charcoal/40 leading-7 sm:px-2 lg:px-0"
            >
              Since 2009, we’ve been telling stories - stories of people, their journeys, and the places that
              shape them. Some begin in polished boardrooms, others in humble village squares. But every story
              starts the same way - by listening with intention. We believe it takes trust, patience, and an eye
              for the unseen to capture what truly matters. V don’t just tell stories - V honor them.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.img
            {...fadeUp(0.05)}
            src="/Sticky Note (2).webp"
            alt="Sticky Note"
            className="absolute -left-1 sm:-left-18 -top-10 sm:-top-16 w-44 sm:w-64 md:w-80 rotate-[-8deg] drop-shadow-xl"
          />


          <motion.img
            {...fadeUp(0.08)}
            src="/Branding Experts.jpg"
            alt="Arrow Left"
            className="absolute right-6 md:right-20 top-52 md:top-80 w-24 md:w-40 mix-blend-multiply"
          />
          <motion.img
            {...fadeUp(0.1)}
            src="/Film maker.jpg"
            alt="Arrow Down"
            className="absolute right-8 md:right-40 -top-16 md:-top-32 w-16 md:w-28 mix-blend-multiply"
          />
          <motion.img
            {...fadeUp(0.12)}
            src="/Art curator.jpg"
            alt="Arrow Right"
            className="absolute right-28 md:right-[43rem] -top-10 md:-top-28 w-14 md:w-24 mix-blend-multiply"
          />

          <motion.div
            {...fadeUp(0.14)}
            className="flex justify-center mt-24 sm:mt-32 md:mt-40"
          >
            <img src="/Group2.jpg" className="w-[78vw] max-w-[760px] mix-blend-multiply" alt="" />
          </motion.div>

          <motion.p
            {...fadeUp(0.16)}
            className="text-center font-halant text-[22px] md:text-[28px] lg:text-[32px] text-[#0B2040] font-light mt-8 md:mt-10"
          >
            Take a closer look at the stories V bring to life.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="flex justify-center mt-4">
            <button className="px-4 py-3 cursor-pointer bg-[#E76F34] text-white rounded-full text-sm shadow active:scale-95 transition">
              View Portfolio
            </button>
          </motion.div>

          <motion.img
            {...fadeUp(0.22)}
            src="/indiagate.jpg"
            className="absolute -left-10 md:-left-24 -bottom-2 w-40 sm:w-56 md:w-72 mix-blend-multiply"
            alt="India Gate"
          />
        </div>
      </section>

      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div {...fadeUp(0.05)}>
            <p className="font-halant text-[#252628] font-thin text-2xl md:text-[36px] mb-4 md:mb-6 md:-ml-3">
              A montage of familiar faces and names.
            </p>
            <p className="font-instrument text-[#252628] font-light text-base sm:text-[18px] md:text-[20px] leading-relaxed max-w-md text-center md:text-left">
              Some stories come from the biggest names. Others begin with bold, rising voices. We’ve been
              fortunate to walk alongside both – listening, creating, and building stories that matter.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="flex items-center">
            <p className="font-island text-[#2A474A] text-2xl sm:text-[34px] md:text-[43px] leading-snug max-w-lg text-center md:text-left">
              Every project is more than just a brief it&apos;s a new chapter waiting to be written. Together,
              we&apos;ve crafted tales that inspire, connect, and endure.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-14 grid md:grid-cols-2 gap-10 items-center">


          <div className="flex justify-center md:justify-start gap-2 md:gap-3">
            <motion.img {...fadeUp(0.1)} src="/stat1.webp" className="w-32 sm:w-40 md:w-48 lg:w-56 rotate-[6deg]" />
            <motion.img {...fadeUp(0.2)} src="/stat2.webp" className="w-32 sm:w-40 md:w-48 lg:w-56 rotate-[3deg]" />
            <motion.img {...fadeUp(0.3)} src="/stat3.png" className="w-32 sm:w-40 md:w-48 lg:w-56 -rotate-2" />
          </div>


          <div className="relative flex justify-center md:justify-end mt-12 md:mt-0">


            <motion.img
              src="/ClientBrands.webp"
              className="w-[60vw] sm:w-[42vw] md:w-[420px] lg:w-[480px]"
              style={{ transformOrigin: "50% 50%" }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            />

            <img
              src="/sunset.webp"
              className="absolute top-1/2 left-1/2 
             -translate-x-[30%] -translate-y-1/2
             w-auto max-w-[320px]"
            />

          </div>

        </div>


      </section>


      <section className="relative py-10 md:py-12 overflow-hidden pb-20">
        <div className="relative z-10">
          <motion.h2
            {...fadeUp(0.05)}
            className="text-center font-halant text-[22px] md:text-[34px] text-charcoal mb-2 font-extralight"
          >
            The storyboard reveals the breadth of our craft.
          </motion.h2>

          <motion.div {...fadeUp(0.08)} className="flex justify-center mb-10">
            <img src="/Underline.jpg" alt="underline" className="w-60 sm:w-80 md:w-[40rem] h-6 mix-blend-multiply" />
          </motion.div>

          <div className="flex justify-center gap-8 md:gap-16 mt-10 md:mt-16 mb-8">

            <motion.div {...fadeUp(0.1)} className="relative w-48 sm:w-56 md:w-64">
              <img
                src="/image 8.png"
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 sm:w-40 rotate-[2deg] z-20 -ml-8"
                alt=""
              />
              <div className="bg-white shadow-xl rounded-sm rotate-[7deg] pb-4 pt-4 flex flex-col items-center">
                <img src="/Mobleft.webp" className="w-[90%] h-[85%] object-cover rounded-sm" alt="" />
                <p className="text-center font-halant text-charcoal mt-3 text-base md:text-lg">Film Production</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="relative w-48 sm:w-56 md:w-64">
              <img
                src="/image 8.png"
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 rotate-[-2deg]"
                alt=""
              />
              <div className="bg-white shadow-xl rounded-sm pb-4 pt-4 flex flex-col items-center">
                <img src="/Mobmid.webp" className="w-[90%] h-[85%] object-cover rounded-sm" alt="" />
                <p className="text-center font-halant text-charcoal mt-3 text-base md:text-lg">Branding</p>
              </div>
            </motion.div>


            <motion.div {...fadeUp(0.2)} className="relative w-48 sm:w-56 md:w-64">
              <img
                src="/image 7.png"
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 sm:w-40 z-20 ml-10"
                alt=""
              />
              <div className="bg-white shadow-xl rounded-sm -rotate-6 pb-4 pt-4 flex flex-col items-center">
                <img src="/Mobright.webp" className="w-[90%] h-[85%] object-cover rounded-sm" alt="" />
                <p className="text-center font-halant text-charcoal mt-3 text-base md:text-lg">Art Curation</p>
              </div>
            </motion.div>
          </div>
        </div>


        <div
          className="absolute bottom-[-8px] sm:bottom-[-10px] left-0 w-full h-[50px] sm:h-[60px] bg-repeat-x bg-bottom bg-contain z-0 pointer-events-none"
          style={{ backgroundImage: "url('/Bottom.png')" }}
        />
      </section>

      <section className="relative py-14 md:py-16 overflow-hidden">
        <img
          src="/Cam.webp"
          className="absolute left-6 sm:left-10 top-1/3 w-20 sm:w-28 md:w-40 pointer-events-none"
          alt=""
        />
{/* 
        <div className="absolute right-0 bottom-0 flex pointer-events-none">

          <img src="/MandalaBG1.webp" className="w-24 sm:w-36 md:w-48 object-contain -rotate-90 -mt-32 -mr-14" alt="" />
          <img src="/MandalaBG1.webp" className="w-24 sm:w-36 md:w-48 object-contain rotate-90" alt="" />
        </div> */}

        <motion.h2
          {...fadeUp(0.05)}
          className="text-center font-halant text-[24px] md:text-[36px] text-charcoal mb-2 font-light"
        >
          The Highlight Reel
        </motion.h2>

        <motion.p
          {...fadeUp(0.08)}
          className="text-center font-instrument text-base sm:text-lg md:text-[22px] text-charcoal font-light mb-10 md:mb-16"
        >
          Watch the magic we’ve captured.
        </motion.p>

        <div className="relative mx-auto w-[86vw] max-w-[620px]">
          <img src="/VideoFrame.svg" className="w-full h-auto pointer-events-none" alt="" />


          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 sm:w-16 md:w-[70px] h-40 sm:h-48 md:h-[240px] bg-white shadow-lg rounded-md flex items-center justify-center">
            <img src="/Arrow.svg" className="w-5 sm:w-6 md:w-8" alt="" />
          </div>

          <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 sm:w-16 md:w-[70px] h-40 sm:h-48 md:h-[240px] bg-white shadow-lg rounded-md flex items-center justify-center">
            <img src="/Arrow.svg" className="w-5 sm:w-6 md:w-8 rotate-180" alt="" />
          </div>


          <div className="absolute top-[17%] left-[16%] w-[68%] h-[64%]">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/j20koh6IzEk"
              title="Varnan Films Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
