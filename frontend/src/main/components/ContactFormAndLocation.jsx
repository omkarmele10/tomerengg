import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactFormAndLocation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        emailjs
            .send(
                "service_ibtaz8m",
                "template_0as9mll",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                "XSgISvDkBsE3gzZ5W"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                    });
                },
                () => {
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div id="contact">
            <section className="py-4 md:py-10 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center mb-6">
                    <div className="inline-block text-2xl md:text-3xl font-bold  text-black">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">
                            Contact Us
                        </h1>
                        {/* Red horizontal line */}
                        <span className="block mx-auto mt- h-1 w-[70%] bg-red-600 rounded-full"></span>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-semibold text-black mb-6">
                            Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone *"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                                />
                            </div>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message *"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-red-400 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full h-12 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                    {/* Info */}

                    <div className="space-y-8">
                        {/* First card */}
                        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-10 text-center text-black">
                            <MapPin className="w-14 h-14 mx-auto mb-4 text-red-400" />
                            <p className="text-lg font-semibold">Tomar Construction</p>
                            <p className="text-sm text-gray-700">Mandideep, Raisen</p>
                            <p className="text-sm text-gray-700">Bhopal, Madhya Pradesh</p>
                        </div>

                        {/* Second card → SAME bg & text styling */}
                        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-10 text-black space-y-4">
                            <h3 className="text-2xl font-bold text-center">Visit Our Office</h3>

                            <div className="flex gap-3">
                                <Clock className="w-5 h-5 mt-1 text-red-400" />
                                <div>
                                    <p className="font-medium">Working Hours</p>
                                    <p className="text-sm text-gray-700">
                                        Mon–Sat: 8:00 AM – 8:00 PM
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        Sunday: 9:00 AM – 2:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 mt-1 text-red-400" />
                                <div>
                                    <p className="font-medium">Call Us</p>
                                    <p className="text-sm text-gray-700">+91 XXXXXXXXXX</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="w-5 h-5 mt-1 text-red-400" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm text-gray-700">
                                        info@tomarconstruction.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactFormAndLocation;
