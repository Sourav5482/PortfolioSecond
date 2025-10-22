import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Magnetic from './Magnetic';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errors = validate();
    if (Object.keys(errors).length) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTouched({});
      setTimeout(() => setStatus('idle'), 2500);
    }, 1200);
  }

  const errors = validate();

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    enter: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 18 } },
  };

  const inputFloat = {
    rest: { y: 0 },
    focused: { y: -18, scale: 0.86, originX: 0 },
  };

  // 3D tilt interaction on the card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -10; // rotateX
      const ry = (px - 0.5) * 12;  // rotateY
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const reset = () => {
      card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg)`;
    };
    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', reset);
    return () => {
      card.removeEventListener('pointermove', onMove);
      card.removeEventListener('pointerleave', reset);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@sourav.dev');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] p-6 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute -top-16 -left-10 h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(82,39,255,0.35), transparent 60%)' }}
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full"
          style={{ background: 'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.12), transparent 60%)' }}
          animate={{ x: [0, -15, 10, 0], y: [0, 10, -12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04),_transparent_70%)]" />
      </motion.div>
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-16 w-full">
        {/* Section heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400">Let’s Connect</span>
          </motion.h2>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            className="mt-3 text-gray-400 max-w-2xl mx-auto"
          >
            I’d love to hear about your project or collaboration — drop a message and I’ll respond soon.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info column */}
          <div className="space-y-6">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/40 to-pink-500/40"
            >
              <div className="rounded-2xl bg-[#121212] p-6 border border-gray-800/70">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-400">Availability</div>
                    <div className="text-lg font-semibold text-gray-200">Open for freelance</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                className="p-[1px] rounded-2xl bg-gradient-to-r from-gray-100/10 to-white/5"
              >
                <div className="rounded-2xl bg-[#121212] p-6 border border-gray-800/70">
                  <div className="flex items-center gap-3 text-gray-300"><FiPhone /> <span className='cursor-not-allowed'>+91   Unhide</span></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
                className="p-[1px] rounded-2xl bg-gradient-to-r from-gray-100/10 to-white/5"
              >
                <div className="rounded-2xl bg-[#121212] p-7 border border-gray-800/70">
                  <button type="button" onClick={copyEmail} className="flex items-center gap-3   text-gray-300 hover:text-gray-200">
                    <FiMail /> <span className='text-sm'>bcasourav5482@gmail.com</span>
                    {copied && <span className="ml-2 text-emerald-400 text-xs">Copied</span>}
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="rounded-2xl bg-[#121212] p-6 border border-gray-800/70"
            >
              <div className="text-sm uppercase tracking-widest text-gray-400 mb-3">Social</div>
              <div className="flex items-center gap-3">
                {[{icon: <FiGithub />, href: 'https://github.com/Sourav5482'}, {icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/sourav-das-12000a313/'}, {icon: <FiTwitter />, href: 'https://x.com/SouravDas54822'}].map((s, i) => (
                  <a key={i} href={s.href} className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#1a1a1a] border border-gray-800/70 hover:border-gray-700 text-gray-300 hover:text-white transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form column */}
          <motion.div
            initial="hidden"
            whileInView="enter"
            viewport={{ once: false, amount: 0.5 }}
            variants={{ hidden: {}, enter: { transition: { staggerChildren: 0.08 } } }}
            className="p-[1px] rounded-3xl bg-gradient-to-r from-indigo-500/40 to-pink-500/40"
          >
            <motion.div variants={cardVariants} ref={cardRef} className="bg-[#111] rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-800 will-change-transform">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-100">Send a message</h3>
                  <p className="mt-1 text-sm text-gray-400">Tell me a bit about your idea and timeline.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <motion.label
                  initial="rest"
                  animate={form.name || touched.name ? 'focused' : 'rest'}
                  variants={inputFloat}
                  className="relative block"
                >
                  <span className="absolute left-3 top-3 text-gray-500"><FiMail size={16} /></span>
                  <span className="absolute left-9 top-3 pointer-events-none text-gray-400">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#1b1b1b] pl-9 pr-3 pt-6 pb-3 rounded-xl border ${touched.name && errors.name ? 'border-rose-400' : 'border-gray-700'} outline-none text-gray-100 placeholder-transparent focus:border-gray-500 transition-colors`}
                    placeholder="Your name"
                  />
                  {touched.name && errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </motion.label>

                <motion.label
                  initial="rest"
                  animate={form.email || touched.email ? 'focused' : 'rest'}
                  variants={inputFloat}
                  className="relative block"
                >
                  <span className="absolute left-3 top-3 text-gray-500"><FiMail size={16} /></span>
                  <span className="absolute left-9 top-3 pointer-events-none text-gray-400">Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#1b1b1b] pl-9 pr-3 pt-6 pb-3 rounded-xl border ${touched.email && errors.email ? 'border-rose-400' : 'border-gray-700'} outline-none text-gray-100 placeholder-transparent focus:border-gray-500 transition-colors`}
                    placeholder="you@company.com"
                  />
                  {touched.email && errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </motion.label>

                <motion.label
                  initial="rest"
                  animate={form.message || touched.message ? 'focused' : 'rest'}
                  variants={inputFloat}
                  className="relative block"
                >
                  <span className="absolute left-3 top-3 text-gray-500"><FiSend size={16} /></span>
                  <span className="absolute left-9 top-3 pointer-events-none text-gray-400">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={400}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#1b1b1b] pl-9 pr-3 pt-6 pb-3 rounded-xl border ${touched.message && errors.message ? 'border-rose-400' : 'border-gray-700'} outline-none text-gray-100 placeholder-transparent resize-none focus:border-gray-500 transition-colors`}
                    placeholder="Tell me about your project"
                  />
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    {touched.message && errors.message ? (
                      <span className="text-rose-400">{errors.message}</span>
                    ) : <span />}
                    <span>{form.message.length}/400</span>
                  </div>
                </motion.label>

                <div className="flex items-center justify-between gap-4">
                  <Magnetic strength={28}>
                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-lg disabled:opacity-60"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                      ) : status === 'success' ? (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                          <FiCheck />
                          Sent
                        </motion.span>
                      ) : (
                        <>
                          <FiSend />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </Magnetic>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
