import { config } from "../../config.ts";
import Form from "./form";
import SocialMedia from "./socialMedia";


function Footer() {
    return <footer id="footer" className="flex flex-col items-center justify-center mt-24 gap-8 py-16 px-4 bg-primary bg-green-700 text-white rounded-t-3xl">
        <Form/>
        <SocialMedia data={config.socialMedia}/>
    </footer>
}

export default Footer