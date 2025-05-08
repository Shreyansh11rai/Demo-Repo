import { phoneNumberUrl } from "@/constants/urls";
import { enquiryLink, whatsappLink } from "../urls";

export const ctaData  = {
    subheading : "Have a project in mind or need assistance? Reach out to us and let's build something amazing together",
    heading : "Let's connect",
    button : [
        {text : "Whatsapp us", href : whatsappLink},
        {text : "Call us", href : phoneNumberUrl},
        {text : "Send enquiry", href : enquiryLink}
    ]
}