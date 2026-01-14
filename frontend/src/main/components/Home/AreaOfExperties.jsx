const AreaOfExperties = () => {
    return (
        <section className="w-full py-16 bg-gray-50">
            {/* Heading */}
            <div className="text-center mb-14 fade-up">
                <div className="inline-block text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary">
                        Our Experties
                    </h1>
                    {/* Red horizontal line */}
                    <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
                </div>

                <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                    Comprehensive steel construction solutions delivered with precision,
                    quality, and proven industry experience.
                </p>
            </div>

            {/* Combined Card */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="relative bg-white rounded-2xl shadow-md p-8 md:p-12 hover:shadow-xl transition fade-up">


                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Pre-Engineered Steel Buildings (PEB)
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Industrial & Commercial Steel Sheds
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Warehousing & Logistics Structures
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Heavy Structural Steel Installations
                            </li>
                        </ul>

                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Heavy Structural Steel Fabrication & Erection
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Manufacturing & Assembly Facilities
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Foundation & Sub-Structural Works
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                                Industrial Utility & Support Structures
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreaOfExperties;

// const AreaOfExperties = () => {
//     return (
//         <section className="w-full py-16 bg-gray-50">
//             {/* Heading */}
//             <div className="text-center mb-14 fade-up">
//                 <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide">
//                     Our Expertise Domains
//                 </h1>
//                 <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
//                     Specialized solutions delivered with precision, quality, and industry
//                     experience.
//                 </p>
//             </div>

//             {/* Cards */}
//             <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2">
//                 {/* Industrial */}
//                 <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition fade-up">
//                     <h2 className="text-2xl font-bold text-primary mb-6">
//                         Industrial Infrastructure
//                     </h2>
//                     <ul className="space-y-4 text-gray-700">
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Pre-Engineered Steel Buildings (PEB)
//                         </li>
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Manufacturing & Assembly Facilities
//                         </li>
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Warehousing & Logistics Infrastructure
//                         </li>
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Heavy Structural Steel Installations
//                         </li>
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Industrial Utility & Support Systems
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Commercial */}
//                 <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition fade-up">
//                     <h2 className="text-2xl font-bold text-primary mb-6">
//                         Commercial Developments
//                     </h2>
//                     <ul className="space-y-4 text-gray-700">
//                         {/* <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Corporate & Office Facilities
//                         </li> */}
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Commercial & Utility Sheds
//                         </li>
//                         {/* <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Retail & Business Infrastructure
//                         </li> */}
//                         <li className="flex gap-3">
//                             <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
//                             Foundation & Sub-Structural Works
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default AreaOfExperties;



