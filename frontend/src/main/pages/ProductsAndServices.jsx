import React from "react";
import img1 from "../../assets/prefabricated-structure.jpeg";
import img2 from "../../assets/prefabricated-shed.jpeg";
import img3 from "../../assets/fabricated-tanks.jpeg";
import img4 from "../../assets/HDPE-pipe.jpeg";
import img5 from "../../assets/Industrial-pipe.jpeg";
import Banner from "../components/Banner";

const productsAndServices = [
  {
    img: img1,
    title: "Construction Service",
    subtitle: "Prefabricated Structures",
    description:
      "Providing you the best range of Prefabricated Structures with effective & timely delivery.",
  },
  {
    img: img2,
    title: "Construction Service",
    subtitle: "Prefabricated Factory Shed",
    description: "We are a leading Prefabricated Factory from Bhopal, India.",
  },
  {
    img: img4,
    title: "Other Services",
    subtitle: "HDPE Pipe",
    description: "We are a leading supplier of HDPE Pipes from Bhopal, India.",
  },
  {
    img: img5,
    title: "Other Services",
    subtitle: "Industrial Pipe",
    description: "We are a leading Industrial Pipe supplier from Bhopal, India.",
  },
  {
    img: img3,
    title: "Other Services",
    subtitle: "Fabricated Tanks",
    description: "We are a leading Fabricated Tanks provider from Bhopal, India.",
  },
];

const ProductAndServices = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <Banner
        title="Products & Services"
        subtitle="Steel Structure Sheds • Fabrication & Erection & many more "
      />


      <div className="max-w-7xl ">
        <div className=" inline-block ">
          <h1 className="text-2xl md:text-3xl ml-5 mt-5 md:mt-10 font-bold text-primary">
            Products And Services
          </h1>
          <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
        </div>

        <div className="mx-auto  md:mt-10 p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-up">

          {productsAndServices.map((item, index) => (
            <div-w
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 ">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.subtitle}
                </h3>
                <h1 className="text-sm uppercase tracking-wide text-blue-600 mt-1">
                  {item.title}
                </h1>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div-w>
          ))}
        </div>
      </div>
    </div >
  );
};

export default ProductAndServices;
