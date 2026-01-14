import { useEffect, useRef } from "react";
import logo from "../../assets/logo/logo0.png";

const clients = Array.from({ length: 8 });

const OurClients = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const interval = setInterval(() => {
            if (!slider) return;

            scrollAmount += 1;
            slider.scrollLeft += 1;

            if (scrollAmount >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-16 bg-gray-50 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12 fade-up">
                <div className="inline-block text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary">
                        Our Clients
                    </h1>
                    {/* Red horizontal line */}
                    <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
                </div>
                <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                    Trusted by industrial and infrastructure partners.
                </p>
            </div>

            {/* Slider */}
            <div className="max-w-7xl mx-auto overflow-hidden fade-up">
                <div
                    ref={sliderRef}
                    className="flex gap-12 overflow-hidden whitespace-nowrap px-4"
                >
                    {[...clients, ...clients].map((_, index) => (
                        <div
                            key={index}
                            className="min-w-[160px] h-20 flex items-center justify-center
                         bg-white rounded-xl shadow-sm
                         hover:shadow-md transition"
                        >
                            {/* Company Logo */}
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurClients;


// import { useEffect, useRef } from "react";

// const clients = [
//     "ABC Industries",
//     "Prime Builders",
//     "Global Infrastructure",
//     "Metro Developments",
//     "Urban Projects Ltd.",
//     "SteelWorks India",
//     "EcoBuild Solutions",
//     "Future Constructions",
// ];

// const OurClients = () => {
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const slider = sliderRef.current;
//         let scrollAmount = 0;

//         const interval = setInterval(() => {
//             if (!slider) return;

//             scrollAmount += 1;
//             slider.scrollLeft += 1;

//             if (scrollAmount >= slider.scrollWidth / 2) {
//                 slider.scrollLeft = 0;
//                 scrollAmount = 0;
//             }
//         }, 20);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="w-full py-16 bg-gray-50 overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-12 fade-up">
//                 <h1 className="text-3xl md:text-4xl font-bold text-primary">
//                     Our Clients
//                 </h1>
//                 <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
//                     Trusted by organizations across industrial and commercial sectors.
//                 </p>
//             </div>

//             {/* Slider Wrapper (LIMITED WIDTH) */}
//             <div className="max-w-7xl mx-auto overflow-hidden fade-up">
//                 <div
//                     ref={sliderRef}
//                     className="flex gap-6 overflow-hidden whitespace-nowrap px-4"
//                 >
//                     {[...clients, ...clients].map((client, index) => (
//                         <div
//                             key={index}
//                             className="min-w-[180px] h-20 flex items-center justify-center
//                          bg-white border border-gray-200 rounded-lg
//                          font-semibold text-gray-700 shadow-sm
//                          hover:shadow-md transition"
//                         >
//                             {client}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurClients;
