
import { useNavigate } from "react-router-dom";

// import logo from "../../../assets/steel structure.jpg";
import logo from "../../../assets/steel.png";
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-cover  w-full h-[70vh] bg-center flex items-center justify-center  "
            // style={{ backgroundImage: `url(${logo})` }}
            style={{
                // Using a linear gradient + image ensures the "dull" effect stays within the container
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${logo})`
            }}
        >
            <div className="z-10 text-white mx-4 sm:mx-[10%] text-center flex flex-col items-center space-y-3 fade-up">
                <h1 className="text-2xl md:text-3xl font-bold ">From Concept To Creation :</h1>
                <h1 className="text-2xl md:text-3xl font-bold">Your <span className="text-secondary">Vision</span>, Our <span className="text-secondary">Expertise</span></h1>
                <p className=" ">Specializing in large-scale commercial and public infrastructure projects.</p>
                <button onClick={() => navigate('/projects')} className="text-sm font-bold p-2 hover:bg-black text-white  bg-secondary rounded-xl  cursor-pointer">View Projects</button>
            </div>
        </div >
    )
}
export default Hero