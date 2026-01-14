import React from "react";
import bannerImg from "../../assets/Tomar-images/banner.jpg"

const Banner = ({ title, subtitle, height = "180px" }) => {
    return (
        <section
            style={{
                backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ), url(${bannerImg})`,
                height: height,
            }}
            className="w-full bg-cover bg-center flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-white text-2xl md:text-3xl font-bold">
                    {title}
                </h1>
                <p className="text-gray-200 mt-3 text-lg">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default Banner;
