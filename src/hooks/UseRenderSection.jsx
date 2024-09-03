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
  

     const handleSection = (item,menu)=>{
     
        if(item == 'intro')   return <Intro item = {item} menu={menu} />
        else if (item == 'products') return <Product item = {item} menu={menu}/>
        else if (item == 'services') return <Service item = {item} menu={menu}/>
        else if (item == 'appoinment') return <Appoinment item = {item} menu={menu}/>
        else if (item == 'digital') return <DigitalProduct item = {item} menu={menu}/>
        else if (item == 'about') return <About item = {item} menu={menu}/>
        else if (item == 'social') return <Social item = {item} menu={menu}/>
        else if (item == 'forms') return <Forms item = {item} menu={menu}/>
        else if (item == 'footer') return <Footer item = {item} menu={menu}/>
    } 
  return handleSection  
}

export default UseRenderSection
