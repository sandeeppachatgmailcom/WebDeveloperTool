import About from "../components/home/sections/About"
import Appoinment from "../components/home/sections/Appoinment"
import DigitalProduct from "../components/home/sections/DigitalProduct"
import Footer from "../components/home/sections/Footer"
import Forms from "../components/home/sections/Forms"
import Intro from "../components/home/sections/Intro"
import Product from "../components/home/sections/Product"
import Service from "../components/home/sections/Service"
import Social from "../components/home/sections/Social"


const UseRenderSection= ()=>{
  

     const handleSection = (item)=>{
      console.log(item,'item<<<<<<<<<<<<')
      if(item == 'intro') return <Intro/>
        else if (item == 'products') return <Product/>
        else if (item == 'services') return <Service/>
        else if (item == 'appoinment') return <Appoinment/>
        else if (item == 'digital') return <DigitalProduct/>
        else if (item == 'about') return <About/>
        else if (item == 'social') return <Social/>
        else if (item == 'forms') return <Forms/>
        else if (item == 'footer') return <Footer/>
    } 
  return handleSection  
}

export default UseRenderSection
