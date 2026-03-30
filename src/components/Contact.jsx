import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700 mb-4">Get in touch via email for detailed discussions.</p>
            <a href="mailto:azfaralam.ops@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              azfaralam.ops@gmail.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Chat</h3>
            <p className="text-gray-700 mb-4">Available for calls and real-time discussions.</p>
            <a href="tel:+919876543210" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              +91 (987) 654-3210
            </a>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border border-pink-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-lg mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700 mb-4">Based in India, open to remote opportunities worldwide.</p>
            <p className="text-gray-900 font-semibold">India</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-white"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors bg-white resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                    <p className="text-gray-600">I typically respond within 24 hours during business days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mt-1">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Collaboration</h4>
                    <p className="text-gray-600">Open to freelance projects, full-time roles, and consulting engagements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-lg mt-1">
                    <span className="text-pink-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Focused</h4>
                    <p className="text-gray-600">Every project is approached with attention to detail and best practices.</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-4">Find me elsewhere</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/mdazfar2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-300 hover:border-gray-900 hover:shadow-lg transition-all duration-300 group"
                    >
                      <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                    </a>
                    <a
                      href="https://linkedin.com/in/md-azfar-alam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-300 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
                    >
                      <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
                    >
                      <Twitter className="w-6 h-6 text-gray-700 group-hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tl from-purple-200 to-pink-200 rounded-full filter blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}