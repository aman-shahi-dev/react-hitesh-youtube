import React from 'react'

function Contact() {
  return (
    <div className='flex flex-1'>
      <div className="w-full max-w-3xl mx-auto p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // replace with real submit logic as needed
            alert('Thank you! Your message has been submitted.')
            e.currentTarget.reset()
          }}
          className="bg-white/80 dark:bg-slate-900/80 border rounded-lg p-6 shadow-sm space-y-6"
          aria-label="Contact form"
        >
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Contact Us</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Have a question or feedback? Fill out the form and we'll get back to you shortly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Name</span>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Email</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-md border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Message</span>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Write your message..."
              className="rounded-md border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
            />
          </label>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
            <p className="text-sm text-slate-500 dark:text-slate-400">We typically reply within 1-2 business days.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact