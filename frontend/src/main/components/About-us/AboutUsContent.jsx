import img6 from "../../../assets/Tomar-images/s11.jpeg";
const AboutUsContent = () => {
    return (
        <section className="w-full my-4 md:my-16 bg-white fade-up">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-start gap-12">

                    {/* TEXT */}
                    <div className="fade-up">
                        {/* <AboutUsIntro /> */}
                        <div className="max-w-7xl mx-auto">
                            <div className="inline-block mb-3">
                                <h1 className="text-2xl md:text-3xl font-bold text-primary">
                                    About Us
                                </h1>

                                <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
                            </div>
                            {/* <h1 className="text-2xl md:text-3xl font-bold text-primary">
                                About Us
                            </h1> */}

                            <p className="text-gray-700 text-base  leading-relaxed mb-4">
                                <span className="font-semibold">Tomar Engineering</span> is a trusted
                                steel infrastructure and engineering company based in Mandideep,
                                Bhopal (Madhya Pradesh), with 7 years of proven industry experience.
                                We specialize in delivering strong, reliable, and efficient solutions
                                for industrial sheds, warehouses, and structural steel projects.
                            </p>

                            <p className="text-gray-700 text-base leading-relaxed mb-4">
                                Our experienced team manages every stage of the project — from
                                fabrication and erection to final completion — ensuring the highest
                                standards of quality, safety, and structural precision. We focus on
                                durable workmanship, practical engineering, and on-time delivery.
                            </p>

                            <p className="text-gray-700 text-base  leading-relaxed">
                                Driven by our core values of strength, sustainability, and excellence,
                                Tomar Engineering continues to build long-term client partnerships and
                                a strong reputation in the steel infrastructure and industrial
                                construction sector.
                            </p>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="md:w-1/2">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                            <img
                                src={img6}
                                alt="Steel Infrastructure Project by Tomar Engineering"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsContent;
