import Banner from "../components/Banner"
import ContactFormAndLocation from "../components/ContactFormAndLocation"
import MapSection from "../components/MapSection"

const ContactUs = () => {
    return (
        <div>
            <Banner
                title="Contact Us"
                subtitle="Let’s Build Strong Steel Solutions Together"
            />
            <ContactFormAndLocation />
            <MapSection />

        </div>
    )
}
export default ContactUs