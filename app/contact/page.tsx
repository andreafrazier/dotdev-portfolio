import { Mail, Link as LinkIcon, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          Let's Work Together
        </h1>
        <p className="text-xl text-gray-600">
          I'm currently open to Technical PM and Full-Stack Developer roles in Detroit
          and remote opportunities, as well as consulting projects.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Email */}
        <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-secondary mb-2">Email</h3>
          
          <a  href="mailto:andrea@andreafrazier.dev"
            className="text-primary hover:underline"
          >
            andrea@andreafrazier.dev
          </a>
        </div>

        {/* LinkedIn */}
        <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <LinkIcon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-secondary mb-2">LinkedIn</h3>
          
          <a  href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Location */}
        <div className="text-center p-6 border border-gray-200 rounded-lg">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-secondary mb-2">Location</h3>
          <p className="text-gray-600">Detroit, MI</p>
          <p className="text-sm text-gray-500 mt-1">Open to remote work</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
          Send Me a Message
        </h2>
        
        <form
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center text-gray-600">
        <p className="mb-2">
          <strong>Response Time:</strong> I typically respond within 24-48 hours
        </p>
        <p>
          <strong>Availability:</strong> Immediate for consulting projects | Flexible for full-time roles
        </p>
      </div>
    </div>
  );
}