"use client";

import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          We welcome inquiries from healthcare professionals, researchers, and potential collaborators regarding our clinical database or specific gameful artefacts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Augment, imec research group at KU Leuven</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="text-slate-500 mt-1 leading-relaxed">
                    Celestijnenlaan 200A<br />
                    B-3001 Leuven, Belgium
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-500 mt-1">punemajisi@gmail.com</p>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-white outline-none" 
                placeholder="Dr. Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-white outline-none" 
                placeholder="jane.doe@hospital.org"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-white outline-none resize-none" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-2 shadow-sm"
              onClick={(e) => e.preventDefault()}
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
