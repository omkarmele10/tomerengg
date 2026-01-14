import React from "react";

import img1 from "../../../assets/Tomar-images/s11.jpeg";
import img2 from "../../../assets/Tomar-images/s12.jpeg";
import img3 from "../../../assets/Tomar-images/s13.jpeg";
import img4 from "../../../assets/Tomar-images/s14.jpeg";
import img5 from "../../../assets/Tomar-images/s15.jpeg";
import img6 from "../../../assets/Tomar-images/s16.jpeg";
import img7 from "../../../assets/Tomar-images/s17.jpeg";
import img8 from "../../../assets/Tomar-images/s18.jpeg";
import img9 from "../../../assets/Tomar-images/s19.jpeg";
import img10 from "../../../assets/Tomar-images/s21.jpeg";
import img11 from "../../../assets/Tomar-images/s22.jpeg";
import img12 from "../../../assets/Tomar-images/s23.jpeg";

const projects = [
    { img: img1, place: "Mandideep, MP", year: "2023" },
    { img: img2, place: "Bhopal, MP", year: "2022" },
    { img: img3, place: "Indore, MP", year: "2024" },
    { img: img4, place: "Raisen, MP", year: "2023" },
    { img: img5, place: "Sehore, MP", year: "2021" },
    { img: img6, place: "Dewas, MP", year: "2022" },
    { img: img7, place: "Pithampur, MP", year: "2024" },
    { img: img8, place: "Hoshangabad, MP", year: "2023" },
    { img: img9, place: "Vidisha, MP", year: "2021" },
    { img: img10, place: "Itarsi, MP", year: "2022" },
    { img: img11, place: "Satna, MP", year: "2023" },
    { img: img12, place: "Rewa, MP", year: "2024" },
];

const ProjectImages = () => {
    return (
        <section className="py-14">
            <div className="mx-4 sm:mx-[10%] fade-up">
                {/* Heading */}
                <div className="text-center mb-10">
                    <div className="inline-block">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary">
                            Project Images
                        </h1>
                        <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
                    </div>

                    <p className="text-black mt-2 text-sm md:text-base">
                        Showcasing our diverse construction projects and engineering excellence.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] overflow-hidden rounded-md group"
                        >
                            <img
                                src={project.img}
                                alt={`Project at ${project.place}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
                                <div className="p-3 text-white">
                                    <p className="text-sm font-semibold">{project.place}</p>
                                    <p className="text-xs">{project.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectImages;

// import img1 from "../../../assets/Tomar-images/s11.jpeg";
// import img2 from "../../../assets/Tomar-images/s12.jpeg";
// import img3 from "../../../assets/Tomar-images/s13.jpeg";
// import img4 from "../../../assets/Tomar-images/s14.jpeg";
// import img5 from "../../../assets/Tomar-images/s15.jpeg";
// import img6 from "../../../assets/Tomar-images/s16.jpeg";
// import img7 from "../../../assets/Tomar-images/s17.jpeg";
// import img8 from "../../../assets/Tomar-images/s18.jpeg";
// import img9 from "../../../assets/Tomar-images/s19.jpeg";
// import img10 from "../../../assets/Tomar-images/s21.jpeg";
// import img11 from "../../../assets/Tomar-images/s22.jpeg";
// import img12 from "../../../assets/Tomar-images/s23.jpeg";

// const images = [
//     img1, img2, img3, img4, img5, img6, img7,
//     img8, img9, img10, img11, img12,
// ];

// const ProjectImages = () => {
//     return (
//         <section className="py-14">
//             <div className="mx-4 sm:mx-[10%] fade-up">
//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <div className="inline-block">
//                         <h1 className="text-2xl md:text-3xl font-bold text-primary">
//                             Project Images
//                         </h1>

//                         <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
//                     </div>

//                     <p className="text-black mt-2 text-sm md:text-base">
//                         Showcasing our diverse construction projects and engineering excellence.
//                     </p>
//                 </div>

//                 {/* Image Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                     {images.map((img, index) => (
//                         <div
//                             key={index}
//                             className="aspect-[4/3] overflow-hidden rounded-md"
//                         >
//                             <img
//                                 src={img}
//                                 alt={`Project ${index + 1}`}
//                                 className="w-full h-full object-cover hover:scale-110 transition duration-300"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProjectImages;
