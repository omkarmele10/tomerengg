
import AboutUsContent from "../components/About-us/AboutUsContent";
import AboutUsIntro from "../components/About-us/AboutUsContent";
import TestimonialSlider from "../components/About-us/TestimonialSlider";
import Banner from "../components/Banner";
import MapSection from "../components/MapSection";
import OurClients from "../components/OurClients";
const AboutUs = () => {
  return (
    <div  >
      <Banner
        title="About Tomar Engineering"
        subtitle="Engineering Excellence in Steel Structures & Industrial Sheds"
      />


      <AboutUsContent />
      {/* <section className=" my-4 bg-white fade-up"> */}

      {/* Address */}
      {/* <div className="mt-14 bg-primary/5 rounded-2xl p-8 text-center mx-2 my-3 md:mx-25 md:my-20">
          <h3 className="text-xl font-bold text-primary mb-2">
            Our Location
          </h3>
          <p className="text-gray-700">
            1467/ka, Ward No. 02, Mandideep, Raisen,
            Bhopal – 462046, Madhya Pradesh, India
          </p>
        </div>
      </section > */}
      <OurClients />
      <TestimonialSlider />
    </div >

  );
};

export default AboutUs;
