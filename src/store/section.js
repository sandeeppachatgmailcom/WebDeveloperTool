import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice(
    {
        name: 'sections',
        initialState: {
            activeSections: {
                intro: {
                    templateId:'intro2',
                    status: true,
                    Main: 'Discover The Art of photoGrapghy',
                    Details: 'caputure the essence of every moment with our state-of-the-art photography tools desined for both professionals and enthusiasts. Elevate your craft through unparelled precision and innovation',
                    buttonText: 'Learn More',
                },
                products: {
                    templateId:'products1',
                    status: false,
                    Heading: 'Featured Products',
                    products: [
                        {
                            imageUrl: 'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                            productName: 'Master Capture Print',
                            Price: '$25'
                        },
                        {
                            imageUrl: 'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                            productName: 'Art Lens Studio',
                            Price: '$25'
                        },
                        {
                            imageUrl: 'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                            productName: 'Precision Frame Kit',
                            Price: '$25'
                        }
                    ]

                },
                services: {
                    templateId:'services1',
                    status: false,
                    Heading: 'Our Services ',
                    products: [
                        {
                            imageUrl: 'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                            productName: 'Master Capture Print',
                            Price: '$25',
                            Discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            imageUrl: 'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                            productName: 'Art Lens Studio',
                            Price: '$25',
                            Discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        },
                        {
                            imageUrl: 'https://www.shutterstock.com/image-photo/product-photography-relax-natural-beauty-260nw-1993589426.jpg',
                            productName: 'Precision Frame Kit',
                            Price: '$25',
                            Discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                        }
                    ]
                },
                appoinment: {
                    templateId:'appoinment1',
                    status: false,
                    Heading: 'Choose Appointment ',
                    products: [
                        {
                            BookingMode: 'Free Consultation',
                            timeSlot: '30 minutes',
                            cost: 0
                        },
                        {
                            BookingMode: 'Basic Service',
                            timeSlot: '1 Hour',
                            cost: 599
                        },
                        {
                            BookingMode: 'Advanced Services ',
                            timeSlot: '1 Hour',
                            cost: 599
                        },
                    ]
                },
                digital: {
                    templateId:'digital1',
                    status: false,
                    Heading: 'Choose Your Plan ',
                    products: [
                        {
                            PlanName: 'BronzePlan',
                            planType: 'One Time',
                            cost: 99,
                            Discription: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                        },
                        {
                            PlanName: 'Silver Plan ',
                            planType: 'One Time',
                            cost: 149,
                            Discription: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                        },
                        {
                            PlanName: 'Gold Plan ',
                            planType: 'One Time',
                            cost: 199,
                            Discription: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                        },
                        ,
                    ]
                },
                about: {
                    templateId:'about1',
                    status: false,
                    Heading: 'About Our Company ',
                    discription: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                },
                social: {
                    templateId:'social1',
                    status: false,
                    Heading: 'Follow us on Social ',
                    platForms: [
                        {
                            imageLink: '',
                            url: 'facebook.com'
                        },
                        {
                            imageLink: '',
                            url: 'orkut.com'
                        },
                        {
                            imageLink: '',
                            url: 'google.com'
                        },
                        {
                            imageLink: '',
                            url: 'instagram.com'
                        }
                    ]
                },
                forms:  {
                    templateId:'forms1',
                    status: false,
                    Heading: 'Contact US',
                    inputField:{
                        firstName:'',
                        lastName:'',
                        Phone:'',
                        Email:''
                    },
                    discription: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                },
                footer: {
                    templateId:'footer1',
                    status: false,
                    Heading: 'Your Site Title',
                    location:{
                        Building_Num:'',
                        streetName:'',
                        city:'',
                        state:''
                    },
                    contact:{
                        email:'sandeepppachat@gmail.com',
                        landLine:'0495 2762620',
                        mob:'7907441232'
                    },
                    discription: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable"
                },

            },
            templateSlice:{
                intro:['intro1','intro2','intro3','intro4','intro5'],
                products:['products1','products2','products3','products4','products5'],
                services:['services1','services2','services3','services4','services5'],
                appoinment:['appoinment1','appoinment2','appoinment3','appoinment4','appoinment5'],
                digital:['digital1','digital2','digital3','digital4','digital5'],
                about:['about1','about2','about3','about4','about5'],
                social:['social1','social2','social3','social4','social5'],
                forms:['forms1','forms2','forms3','forms4','forms5'],
                footer:['footer1','footer2','footer3','footer4','footer5'],
            }

        },
        reducers: {
            editSections: (state, actions) => {
                state.activeSections = actions.payload
            }
        }
    }
)

export default sectionSlice.reducer
export const { editSections } = sectionSlice.actions 