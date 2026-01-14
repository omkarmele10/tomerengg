import { useNavigate } from "react-router-dom";
import img6 from "../../../assets/Tomar-images/s11.jpeg";
import img7 from "../../../assets/Tomar-images/s16.jpeg";
import img8 from "../../../assets/Tomar-images/s18.jpeg";
import img11 from "../../../assets/Tomar-images/s14.jpeg";

const images = [img6, img7, img8, img11];

const FeaturedProjects = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full bg-white text-white py-10 ">

            {/* HEADER */}
            <div className="text-center mb-10 px-4 fade-up">
                <div className="inline-block text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary">
                        Featured Projects
                    </h1>
                    {/* Red horizontal line */}
                    <span className="block mx-auto mt-1 h-1 w-[70%] bg-red-600 rounded-full"></span>
                </div>
                <p className="mt-3 text-black max-w-2xl mx-auto">
                    Browse our portfolio to see how we’ve brought industrial visions to life
                    with engineering excellence.
                </p>
            </div>

            {/* IMAGE GRID */}
            <div className="mx-4 sm:mx-[10%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 fade-up">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="aspect-[4/3] overflow-hidden rounded-md"
                    >
                        <img
                            src={img}
                            alt={`Project ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center fade-up">
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        navigate("/projects")
                    }
                    }
                    className="mt-6 px-8 py-3 bg-secondary font-semibold rounded-full hover:bg-black text-white transition cursor-pointer text-center"
                >
                    See All Projects
                </button>
            </div>
        </section>
    );
};

export default FeaturedProjects;
