'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { useRecaptcha } from '../../utils/useRecaptcha'
import { safeParseJsonResponse } from '../../utils/safeJsonResponse'
import { useLanguage } from '../../context/LanguageContext'

export default function ContactForm({ showHeading = true, theme = 'default' }) {
  const isPaint = theme === 'paint'
  const { t } = useLanguage()
  const { execute: executeRecaptcha, isAvailable: recaptchaAvailable } = useRecaptcha()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const recaptchaToken = recaptchaAvailable ? await executeRecaptcha() : null
    if (recaptchaAvailable && !recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Security verification failed. Please refresh and try again.' })
      return
    }
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const payload = { ...formData }
      if (recaptchaToken) payload.recaptchaToken = recaptchaToken
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await safeParseJsonResponse(response)

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will get back to you soon.' })
        setFormData({ name: '', email: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={isPaint ? 'py-0' : 'py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white'}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${isPaint ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-base sm:text-lg px-1 ${isPaint ? 'text-slate-400' : 'text-gray-600'}`}>
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          animate={isSubmitting ? { scale: 0.995 } : { scale: 1 }}
          className={`relative rounded-2xl p-4 sm:p-6 md:p-8 w-full min-w-0 transition-shadow duration-300 ${
            isPaint
              ? 'bg-slate-800/80 border border-slate-600/60 shadow-xl shadow-black/20 backdrop-blur-sm'
              : 'bg-white border border-gray-200 shadow-lg'
          }`}
        >
          {isSubmitting && (
            <div
              className={`absolute inset-0 rounded-2xl z-10 pointer-events-auto ${isPaint ? 'bg-slate-800/60 backdrop-blur-[2px]' : 'bg-white/60 backdrop-blur-[1px]'}`}
              aria-hidden
            />
          )}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative">
            {/* Name Field */}
            <div className="min-w-0">
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isPaint ? 'text-slate-300' : 'text-gray-700'}`}>
                {isPaint ? t('contact.name') : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full min-w-0 max-w-full box-border px-3 py-2.5 sm:px-4 sm:py-3 border rounded-xl outline-none transition-all duration-200 text-base ${
                  isPaint
                    ? 'border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500'
                    : 'border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                placeholder={isPaint ? t('contact.namePlaceholder') : 'Your name'}
              />
            </div>

            {/* Email Field */}
            <div className="min-w-0">
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isPaint ? 'text-slate-300' : 'text-gray-700'}`}>
                {isPaint ? t('contact.email') : 'Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full min-w-0 max-w-full box-border px-3 py-2.5 sm:px-4 sm:py-3 border rounded-xl outline-none transition-all duration-200 text-base ${
                  isPaint
                    ? 'border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500'
                    : 'border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                placeholder={isPaint ? t('contact.emailPlaceholder') : 'your.email@example.com'}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full min-w-0 px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed no-underline ${
                isPaint
                  ? 'bg-teal-500 hover:bg-teal-400 text-slate-900 shadow-lg shadow-teal-500/25 hover:shadow-teal-400/30'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" aria-hidden />
                  <span>{isPaint ? t('contact.sending') : 'Sending…'}</span>
                </>
              ) : (
                <>
                  <span>{isPaint ? t('contact.sendMessage') : 'Send Message'}</span>
                  <Send className="w-5 h-5 flex-shrink-0" aria-hidden />
                </>
              )}
            </motion.button>

            {/* Status Message */}
            <AnimatePresence mode="wait">
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`overflow-hidden p-4 rounded-xl border ${
                    submitStatus.type === 'success'
                      ? isPaint
                        ? 'bg-teal-500/20 text-teal-200 border-teal-500/40'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : isPaint
                        ? 'bg-red-500/20 text-red-200 border-red-500/40'
                        : 'bg-red-50 text-red-800 border-red-200'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
