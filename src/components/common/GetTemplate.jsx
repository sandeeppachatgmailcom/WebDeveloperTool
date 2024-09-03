import IntroTemplate1 from "../Templates/intro/IntroTemplate1"
import IntroTemplate2 from "../Templates/intro/IntroTemplate2"
import IntroTemplate3 from "../Templates/intro/IntroTemplate3"
import ProductTemplate1 from "../Templates/Product/ProductTemplate1"
import ProductTemplate2 from "../Templates/Product/ProductTemplate2"
import ProductTemplate3 from "../Templates/Product/ProductTemplate3"
import ServiceTemplate1 from "../Templates/Service/ServiceTemplate1"
import ServiceTemplate2 from "../Templates/Service/ServiceTemplate2"
import ServiceTemplate3 from "../Templates/Service/ServiceTemplate3" 
import AppoinmentTemplate1 from "../Templates/Appoinment/appoinmentTemplate1"
import AppoinmentTemplate2 from "../Templates/Appoinment/appoinmentTemplate2"
import AppoinmentTemplate3 from "../Templates/Appoinment/appoinmentTemplate3"
import DigitalTemplate1 from "../Templates/Digital/DigitalTemplate1"
import DigitalTemplate2 from "../Templates/Digital/DigitalTemplate2"
import DigitalTemplate3 from "../Templates/Digital/DigitalTemplate3"
import AboutTemplate1 from "../Templates/About/AboutTemplate1"
import AboutTemplate2 from "../Templates/About/AboutTemplate2"
import AboutTemplate3 from "../Templates/About/AboutTemplate3"
import SocialTemplate1 from "../Templates/Social/SocialTemplate1"
import SocialTemplate2 from "../Templates/Social/SocialTemplate2"
import SocialTemplate3 from "../Templates/Social/SocialTemplate3"
import FormTemplate1 from "../Templates/Forms/FormTemplate1"
import FormTemplate2 from "../Templates/Forms/FormTemplate2"
import FormTemplate3 from "../Templates/Forms/FormTemplate3"
import FooterTemplate1 from "../Templates/Footer/FooterTemplate1"
import FooterTemplate2 from "../Templates/Footer/FooterTemplate2"
import FooterTemplate3 from "../Templates/Footer/FooterTemplate3"

const GetTemplates = (item)=>{

    return(
        <div className="flex w-full h-full">
            {
                item == 'intro1'? <IntroTemplate1 textSize = {'text-xl'}/>:
                item == 'intro2'? <IntroTemplate2/>:
                item == 'intro3'? <IntroTemplate3/>:
                item == 'products1'? <ProductTemplate1/>:
                item == 'products2'? <ProductTemplate2/>:
                item == 'products3'? <ProductTemplate3/>:
                item == 'services1'? <ServiceTemplate1/>:
                item == 'services2'? <ServiceTemplate2/>:
                item == 'services3'? <ServiceTemplate3/>:
                item == 'appoinment1'? <AppoinmentTemplate1/>:
                item == 'appoinment2'? <AppoinmentTemplate2/>:
                item == 'appoinment3'? <AppoinmentTemplate3/>:
                item == 'digital1'? <DigitalTemplate1/>:
                item == 'digital2'? <DigitalTemplate2/>:
                item == 'digital3'? <DigitalTemplate3/>:
                item == 'about1'? <AboutTemplate1/>:
                item == 'about2'? <AboutTemplate2/>:
                item == 'about3'? <AboutTemplate3/>:
                item == 'social1'? <SocialTemplate1/>:
                item == 'social2'? <SocialTemplate2/>:
                item == 'social3'? <SocialTemplate3/>:
                item == 'forms1'? <FormTemplate1/>:
                item == 'forms2'? <FormTemplate2/>:
                item == 'forms3'? <FormTemplate3/>:
                item == 'footer1'? <FooterTemplate1/>:
                item == 'footer2'? <FooterTemplate2/>:
                item == 'footer3'? <FooterTemplate3/>:""
                
            }
        </div>
    )

     
}

export default GetTemplates