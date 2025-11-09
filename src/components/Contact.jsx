import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: false, err: "" });
  const [showPopup, setShowPopup] = useState(false);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  const isPhone = (v) => /^(?=.{7,15}$)[+]?[-0-9()\s]+$/.test(v.trim());
  const isNonEmpty = (v) => v.trim().length > 0;

  const validate = () => {
    const e = {};
    if (!isNonEmpty(form.name)) e.name = "Name is required";
    if (!isEmail(form.email)) e.email = "Enter a valid email";
    if (!isPhone(form.phone)) e.phone = "Enter a valid phone number";
    if (!isNonEmpty(form.message)) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, ok: false, err: "" });

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      await res.json();
      setStatus({ loading: false, ok: true, err: "" });
      setShowPopup(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowPopup(false), 2500);
    } catch (err) {
      setStatus({ loading: false, ok: false, err: err.message });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 lg:px-20  overflow-hidden"
    >
      {/* ✅ Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-emerald-100"
            >
              <h3 className="text-xl font-semibold text-emerald-700">
                ✅ Form Submitted
              </h3>
              <p className="text-gray-600 mt-2">
                We’ll get back to you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Decorative Mandala */}
      <img
        src="/MandalaBottom.webp"
        className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-80 opacity-80 pointer-events-none"
      />

      {/* ✅ Main Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 relative z-10">

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-instrument text-gray-800 text-[18px] md:text-[22px] leading-relaxed mt-10 md:mt-28 px-2"
        >
          <p className="mb-4">
            Whether you have an idea, a question, or simply want to explore
            how we can work together, we’re just a message away.
          </p>
          <p className="mt-2 text-[#E76F34] font-medium">
            Let’s catch up over coffee.
          </p>
          <p className="mt-1 italic text-gray-700">
            Great stories always begin with a good conversation.
          </p>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100"
        >
          <h2 className="text-center font-halant text-[30px] md:text-[40px] font-light text-gray-800">
            Join the Story
          </h2>

          <p className="text-center mt-2 mb-8 font-instrument text-gray-600 text-[15px] md:text-[17px]">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={submit} className="space-y-4">
            <input
              placeholder="Your name*"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 bg-white/90 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

            <input
              placeholder="Your email*"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 bg-white/90 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 bg-white/90 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

            <textarea
              placeholder="Your message*"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 bg-white/90 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

            <button
              disabled={status.loading}
              className="w-full cursor-pointer bg-[#E76F34] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#d95f25] transition-all duration-200 disabled:opacity-60"
            >
              {status.loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          <p className="text-center text-[#E76F34] mt-6 font-instrument text-sm md:text-base">
            vemita@varnanfilms.co.in &nbsp; | &nbsp; +91 98736 84567
          </p>
        </motion.div>
      </div>
    </section>
  );
}