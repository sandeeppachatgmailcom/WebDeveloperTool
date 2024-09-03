const { createSlice } = require("@reduxjs/toolkit");

const contentSlice  = createSlice(({
    name:'contentSlice',
    initialState:{
        Intro:{
            status:true,
            Main:'Discover The Art of photoGrapghy',
            Details:'caputure the essence of every moment with our state-of-the-art photography tools desined for both professionals and enthusiasts. Elevate your craft through unparelled precision and innovation',
            buttonText:'Learn More'
        },
        Products:{
            status:true,
            Heading:'Featured Products',
            products:[
                {
                    imageUrl:'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                    productName:'Master Capture Print',
                    Price:'$25'
                },
                {
                    imageUrl:'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                    productName:'Art Lens Studio',
                    Price:'$25'
                },
                {
                    imageUrl:'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                    productName:'Precision Frame Kit',
                    Price:'$25'
                }
            ] 
        },
        Services:{
            status:true,
            Heading:'Our Services ',
            products:[
                {
                    imageUrl:'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                    productName:'Master Capture Print',
                    Price:'$25',
                    Discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                },
                {
                    imageUrl:'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                    productName:'Art Lens Studio',
                    Price:'$25',
                    Discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                },
                {
                    imageUrl:'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                    productName:'Precision Frame Kit',
                    Price:'$25',
                    Discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
            ] 
        },
        Appoinment:{
            status:true,
            Heading:'Choose Appointment ',
            products:[
                {
                    BookingMode:'Free Consultation',
                    timeSlot:'30 minutes',
                    cost:0
                },
                {
                    BookingMode:'Basic Service',
                    timeSlot:'1 Hour',
                    cost:599
                },
                {
                    BookingMode:'Advanced Services ',
                    timeSlot:'1 Hour',
                    cost:599
                },
            ] 
        },
        ChooseThePlan:{
            status:true,
            Heading:'Choose Your Plan ',
            products:[
                {
                    PlanName:'BronzePlan',
                    planType:'One Time',
                    cost:99,
                    Discription:"able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                },
                {
                    PlanName:'Silver Plan ',
                    planType:'One Time',
                    cost:149,
                    Discription:"able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                },
                {
                    PlanName:'Gold Plan ',
                    planType:'One Time',
                    cost:199,
                    Discription:"able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                },
,
            ] 
        }

    }
}))