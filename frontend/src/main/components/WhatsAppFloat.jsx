import React from "react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 text-3xl right-5 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
