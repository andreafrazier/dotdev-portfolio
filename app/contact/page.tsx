'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

// ... rest of your imports and metadata ...

export default function Contact() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      router.push('/success');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header - keep your existing header code */}
      
      {/* Contact Options - keep your existing contact options code */}
      
      {/* Contact Form */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
          Send Me a Message
        </h2>
        
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </p>

          {/* Keep all your existing form fields */}
          {/* Name, Email, Subject, Message fields stay exactly the same */}
          
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
      
      {/* Additional Info - keep your existing additional info code */}
    </div>
  );
}