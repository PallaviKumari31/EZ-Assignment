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
    <section id="contact" className="py-20  relative">

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
              className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center"
            >
              <h3 className="text-xl font-semibold text-deepgreen">✅ Form Submitted</h3>
              <p className="text-charcoal/70 mt-2">
                We’ll get back to you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Contact Section */}
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">

        {/* Left Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Join the Story</h2>
          <p className="mt-3 text-charcoal/80">
            Let's bring your ideas to life through powerful visual storytelling.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl border shadow-sm"
        >
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-3 rounded-xl"
          />
          {errors.name && <p className="text-brick text-sm mt-1">{errors.name}</p>}

          <input
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border p-3 rounded-xl mt-4"
          />
          {errors.email && <p className="text-brick text-sm mt-1">{errors.email}</p>}

          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border p-3 rounded-xl mt-4"
          />
          {errors.phone && <p className="text-brick text-sm mt-1">{errors.phone}</p>}

          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border p-3 rounded-xl mt-4"
          />
          {errors.message && <p className="text-brick text-sm mt-1">{errors.message}</p>}

          <button
            disabled={status.loading}
            className="mt-5 bg-orange text-white py-3 rounded-2xl w-full disabled:opacity-60"
          >
            {status.loading ? "Submitting..." : "Submit"}
          </button>

          {status.err && (
            <p className="text-brick text-sm mt-3">{status.err}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
