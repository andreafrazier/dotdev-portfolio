import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Message Sent | Andrea Frazier',
  description: 'Your message has been sent successfully.',
};

export default function Success() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div className="bg-green-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-12 w-12 text-green-500" />
      </div>
      
      <h1 className="text-4xl font-bold text-secondary mb-4">
        Message Sent Successfully!
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
      </p>
      
      <Link
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}