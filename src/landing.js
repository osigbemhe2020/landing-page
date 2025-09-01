///import { Button } from "@/components/ui/Button"
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Clock } from 'lucide-react';
import client from './assets/avatar.jpeg';
import graphic from './assets/graphic.png'
//import NavBar from '../../components/NavBar/NavBar';
//import Footer from '../../components/Footer/Footer';

/*type OfferProps = {
  offer: string;
};

type PProps = {
  placeholder: string;
};

type BoxProps = {
  content: string;
  heading: string;
}

type ButtonProps = {
    text: string;
}

import { StarRating } from './StarRating';

interface ReviewCardProps {
  clientImage: string;
  clientName: string;
  rating: number;
  review: string;
}*/

export const ReviewCard = ({ clientImage, clientName, review }) => {
  return (
    <div className="bg-review-card border border-review-card-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={clientImage}
          alt={`${clientName}'s profile`}
          className="w-12 h-12 rounded-full object-cover border-2 border-review-card-border"
        />
        <div>
          <h3 className="font-semibold text-client-name text-sm">{clientName}</h3>
          {/*<StarRating rating={rating} size={14} />*/}
        </div>
      </div>
      <p className="text-review-text text-sm leading-relaxed line-clamp-4">
        "{review}"
      </p>
    </div>
  );
};

const Button = ({text}) => {
  return (
    <button 
   className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 mt-5 text-lg font-semibold" >
        {text}  
    </button>
  )
}



const Box = ({content,heading,icon}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
       <span className="text-5xl mb-3">{icon}</span>
      <h3 className="font-bold">{heading}</h3>
      <p> 
        {content}
      </p>
    </div>
  )
}

const Input = ({placeholder}) => {
  return (
    <div>
       <input 
       className="border border-gray-300 rounded-md p-2  min-w-[400px] w-[80%] mb-4"
       placeholder={placeholder}
       />
    </div>
  )
}

const Offer = ({offer}) => {
  return (
    <div className="flex items-start gap-2">
      <FaCheck 
      className=" sm:text-2xl text-[1.1em] mr-3"
      />
      <p  className="sm:text-[1.3em] text-[1.1em] ">
        {offer}
      </p>
    </div>
  )
}
  
export default function LandingPage() {
  return (
    
    <div className="min-h-screen bg-background">
    {/*<NavBar />*/}
      {/* Hero Section */}
      <section className="max-h-[100vh] min-h-[95vh] relative overflow-hidden">
        <div
        className="absolute inset-0 bg-sample3 bg-cover bg-center bg-no-repeat"
        style={{
          filter: 'brightness(0.7) saturate(1.1)',
        }}
      ></div>
       <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center min-h-[95vh] justify-center py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-8 "
          >
            Get a Free, Fully Customized Website for Your Business
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl mb-[100px] opacity-90 max-w-3xl mx-auto "
          >
            A professional, fully functional 5-page website built from scratch. No templates. No hidden costs.
          </p>

          {/* CTA Button */}
          
          <a href="#form"><Button
              text="Apply Now - Limited Slots"
           /></a>
        </div>
      </div>
      </section>
      

      {/* What's Included Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
             Why your Business Needs a website
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <Box
            icon= {<Clock 
      className="text-black"  />}
             heading=" Build Instant Credibility"
             content="First impressions matter. A professional, well-designed website instantly
communicates trust and authority, giving your brand the edge over competitors"
            />
            <Box
            icon= {<Clock 
      className="text-black"  />}
            heading="24/7 Online Presence"
            content="Your website never closes. It works around the clock, making your business accessible
to customers anytime and from anywhere in the world."
 
            />
            <Box
            icon= {<FaCheckCircle 
      className="text-green-400"  />}
            heading="Turn Visitors into Customers"
           content="Your website is more than just an online brochure. It guides visitors through your
products and services, builds trust, and helps convert them into loyal paying
customers"
            />
          </div>
        </div>
      </section>

      {/* Why Your Brand Needs This Audit Section */}
      <section className="py-5 px-[1.5rem] sm:px-20 bg-white">
        <div className="mx-auto">
            <h2 className="text-2xl sm:3xl font-bold text-gray-900">
              Here is what is included
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-7">
             <div className="max-w-[450px] bg-gray-100 rounded-lg text-left px-8 py-4 flex flex-col gap-3">
               <Offer
               offer='5-page Business website'
              />
              <Offer
               offer='Fully functional & responsive'
              />
              <Offer
               offer='Well-written copy, images, and videos that tell the brand story.'
              />
              
               <Offer
               offer='Simple menus and clear structure so visitors can quickly find what they need.'
               />
             
             </div>
             <div className=" bg-gray-100 max-w-[450px] rounded-lg text-left px-8 py-4 flex flex-col gap-3">
             <Offer
               offer='Integration with Social Media'
              />
              <Offer
               offer='Designed from scratch (no templates)'
              />
              <Offer
               offer='Built to rank on Google so clients can be discovered easily'
              />
             
              <Offer
               offer='Strong Security (SSL/HTTPS)'
              />
             </div>
              
              
            </div>
        </div>
      </section>

      {/*section 4*/}
      <section className="  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">This Offer Won’t Last”</h1>
          <p className="text-xl text-muted-foreground">Slots are limited. Once they’re gone, they’re gone. Secure yours
today and let us help you launch with confidence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard
              clientImage= {client}
              clientName='Phine Glow Hair'
              //rating={review.rating}
              review='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
            />
            <ReviewCard
              clientImage= {client}
              clientName='Phine Glow Hair'
              //rating={review.rating}
              review='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
            />
            <ReviewCard
              clientImage= {client}
              clientName='Phine Glow Hair'
              //rating={review.rating}
              review='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
            />
        </div>
      </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-14 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
        
            <div id='form' className="w-[80%] mx-auto bg-white p-6 rounded-lg shadow-md text-center">
               <h3 className="font-semibold text-3xl my-3">Apply and Get a Website</h3>
              <br/>
                <Input 
                placeholder="Name"
                />
                <Input 
                placeholder="Email"
                />
                <Input 
                placeholder="Phone"
                />
                <Input 
                placeholder="Business Name"
                />
                
                <Button
              text="Claim My Free Website"
           /><br/>
                <i className="text-[0.7em]">* No payment required. just public credit when you launch. *</i>
               
            </div>
           </div>
      </section>
      {/*<Footer />*/}
    </div>
  )
}
