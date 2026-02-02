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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          
          <a  href="https://linkedin.com/in/andreafrazier"
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

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Please reach out via email or connect with me on LinkedIn. I will respond within 24-48 hours.
          </p>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-12 text-center text-gray-600">
        <p>
          <strong>Availability:</strong> Immediate for consulting projects | Flexible for full-time and contract roles
        </p>
      </div>
    </div>
  );
}