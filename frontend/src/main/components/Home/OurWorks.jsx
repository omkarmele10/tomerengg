import heroVideo from "../../../assets/welding video.mp4";

const OurWorks = () => {
    return (
        <section className="relative w-full h-[60vh] overflow-hidden fade-up flex items-center justify-center">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
                <div className="inline-block text-center mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        Our Works
                    </h1>
                    {/* Red horizontal line */}
                    <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
                </div>
                <p className=" font-medium leading-relaxed mb-3">
                    From precision-engineered steel structures to industrial infrastructure,
                    we deliver turnkey solutions built to stand the test of time,
                    Our integrated approach ensures quality, safety, and durability — every time.
                </p>


            </div>

        </section>
    );
};

export default OurWorks;


// import heroVideo from "../../../assets/welding video.mp4";

// const OurWorks = () => {
//     return (
//         /* 1. Main Container: Yaha relative aur overflow-hidden hona zaroori hai */
//         <div className="relative w-full h-[60vh] py-10 fade-up">

//             {/* 2. Background Video */}
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="fixed top-0 left-0 w-full h-full object-cover -z-100"
//             >
//                 <source src={heroVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             {/* 3. Dark Overlay: Isse video "dull" ho jayegi aur text saaf dikhega */}
//             <div className=" absolute inset-0 bg-black/70 z-10"></div>
//             <div className=" max-w-7xl mx-auto px-6 relative z-20 flex items-center justify-center">
//                 {/* 4. Content Area: Isse z-20 dena hoga taaki ye overlay ke upar rahe */}
//                 <div className="text-center space-y-5 text-white">
//                     {/* Text ko white kar diya hai contrast ke liye */}
//                     <h1 className="text-yellow-400 text-2xl md:text-3xl  font-bold uppercase tracking-wide ">
//                         Our Works
//                     </h1>
//                     <div className="space-y-4">
//                         <p className="md:text-lg  font-medium leading-relaxed">
//                             From Precision-engineered buildings to complex civil infrastructure,
//                             we specialize in turnkey solutions built to stand the test of time.
//                         </p>
//                         <p className="md:text-lg  text-gray-300">
//                             Our integrated approach enables us to deliver value, safety,
//                             and durability — every time.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default OurWorks;
