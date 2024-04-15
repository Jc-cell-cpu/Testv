import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';


const Hero = () => {

  const [mobile, setMobile] =  useState('');
  const [isValidMobile, setIsValidMobile] = useState(true); // State to track mobile number validity
  const [isDataEntered, setIsDataEntered] = useState(false);

  

  const handleMobileChange = (e) => {
    const newValue = e.target.value;
    setMobile(newValue);

  const mobileRegex = /^[6-9]\d{9}$/;
  setIsValidMobile(mobileRegex.test(newValue));
  setIsDataEntered(newValue.trim().length > 0);
  }

  const handleStartFiling = async () => {
    // Check if mobile number is not valid or no data entered
    if (!isValidMobile || !isDataEntered || mobile.trim() === '') {
      alert("Mobile number invalid")
      return;
    }
  
    try {
      const templateParams = {
        from_name: mobile,
        to_name: 'Taxplus', // Replace with your company name
        message_html: `User Email: ${mobile}`, // Include the user's email in the message
      };
  
      await emailjs.send(
        'service_6mdotae', // Replace with your EmailJS service ID
        'template_92kg2kf', // Replace with your EmailJS template ID
        templateParams,
        'TnhcAPGdqQfljTFJq' // Replace with your EmailJS public key
      );
  
      setMobile('');
      alert('We will reach you soon');
    } catch (error) {
      alert("Oops! We ran into a problem. Please try again later.");
    }
  };
  



  
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Save Taxes; 
            <br/>
            <span className="bg-gradient-to-r from-purple-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            <Typewriter
      options={{
        strings : [
          "Boost Prosperity",
          "Thrive Financially",
          "Reap Riches"
        ],
        autoStart: true,
        loop:true,
        delay:145,
      }}
        />
        </span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Tax season shouldn&apos;t be a source of stress.  
            Tax Plus offers a user-friendly solution for 
            individuals and businesses in India
            seeking a smoother tax filing experience.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">

      <input
        type="text"
        value={mobile}
        onChange={handleMobileChange}
        placeholder="Enter your Contact"
        className={`px-4 py-3 rounded-md border ${isValidMobile ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 w-full sm:w-auto`}
      />
              <button
          onClick={handleStartFiling}
          disabled={!isValidMobile || !isDataEntered}
          className="px-5 py-3 text-lg font-medium text-center text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 rounded-md"
        >
          Start Filing
        </button>
            </div>
            {!isValidMobile && <p className="bg-gradient-to-r from-red-500 to-yellow-600 text-transparent bg-clip-text mt-3">Please enter a valid mobile number.</p>}
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}



export default Hero;