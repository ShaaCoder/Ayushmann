'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const NewsAndCallback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone))
      newErrors.phone = 'Please enter a valid phone number';

    if (!formData.service) newErrors.service = 'Please select a service';

    if (formData.message && formData.message.length > 500)
      newErrors.message = 'Message cannot exceed 500 characters';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setStatus('sending');
        const response = await fetch('/api/send-whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const { url } = await response.json();
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
          window.open(url, '_blank');
          formRef.current?.focus();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('error');
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16" aria-labelledby="news-callback-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Media and News Section */}
        <div>
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
            Latest Updates
          </p>
          <h2 id="news-callback-heading" className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Media Coverage and News
          </h2>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 space-y-6">
            <div className="flex flex-col sm:flex-row gap-5">
              <Image
                src="/burner1.jpg"
                alt="Biomass Pellet"
                width={112}
                height={96}
                className="rounded-md border object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Biomass Burner</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Explore our advanced Biomass Industrial Wood Pellets, providing sustainable energy solutions for various industries.
                </p>
              </div>
            </div>
            <div className="border-t pt-4">
              <Link
                href="/contact"
                className="inline-block text-sm font-semibold text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Inquiry about Biomass Burner"
              >
                Inquiry Now
              </Link>
            </div>
          </div>
        </div>

        {/* Request Callback Form */}
        <div className="bg-blue-800 text-white p-6 sm:p-8 rounded-3xl shadow-xl">
          <p className="text-sm uppercase font-semibold text-blue-200 mb-1">Get in Touch</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Callback</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-300 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-300 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Your Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-300 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="sr-only">Select Your Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? 'service-error' : undefined}
              >
                <option value="" disabled>Select Your Service</option>
                <option value="storage-tank">Storage Tank</option>
                <option value="boiler">Boiler</option>
                <option value="dryer">Dryer</option>
              </select>
              {errors.service && (
                <p id="service-error" className="text-red-300 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-300 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {status === 'success' && (
              <p className="text-green-300 text-sm" role="alert">
                Request sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-300 text-sm" role="alert">
                Failed to send request. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-white text-blue-800 py-3 rounded-md font-semibold uppercase tracking-wide hover:bg-gray-100 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Sending...
                </span>
              ) : (
                'Request Callback'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsAndCallback;