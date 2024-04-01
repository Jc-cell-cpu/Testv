// pages/Pricing.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import { Pricingcompone } from "@/components/component/pricingcompone";
import { Pricingcomptwo } from "@/components/component/Pricingcomptwo";
import { PricingcompBasic } from "@/components/component/PricingcompBasic";
import { PricingcompGst } from "@/components/component/PricingcompGst";
import { useState,useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const AnimatedSectionAOS = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration
      once: false, // Animation only once
      easing: 'ease', // Easing function
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div data-aos="fade">
        {children}
      </div>
    </div>
  );
};




const Pricing = () => {
    return (
      <>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Capital TaxPlus"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>
      <div className="px-9 py-2 flex justify-between items-center">
          <Navbar />
      </div>
      <AnimatedSectionAOS> 
      <SectionTitle pretitle="ITR Filling" class="text-red-500">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <Pricingcompone />
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <Pricingcomptwo />
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <SectionTitle pretitle="Tax Planning">
    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <PricingcompBasic />
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <SectionTitle pretitle="GST Planning">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <PricingcompGst />
      </AnimatedSectionAOS> 
     
      <div className="px-9">
<Footer />
</div>
      <PopupWidget />

      </>
      
      );
      
};

export default Pricing;