import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import { Contact } from "@/components/component/contact-us";

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

  
  const ContactUs = () => {
    return (
      <>
       <Head>
        <title>CapitalTaxPlus Financial Services</title>
        <meta name="google-site-verification" content="Pt0CCXRMJJ_C_kxbDFvVtdcABaYRRBrdGJ8bqCEiJR0" />
        <meta
          name="description"
          content="Streamline your tax filing with Tax Plus! File income tax and manage GST in one place, saving time and hassle."
        />
        <meta name="keywords" content="tax, GST, income tax, tax filing" />
        <meta name="author" content="capitaltaxplus" />


        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://capitaltaxplus.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Capital TaxPlus"/>
        <meta property="og:description" content="Streamline your tax filing process this year with Tax Plus! This user-friendly platform allows you to not only file your income tax return but also manage your Goods and Services Tax (GST) conveniently in one place, saving you time and minimizing the hassle of navigating separate systems."/>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/1298b67b-2c0f-4d76-9017-05ad308c1634.jpg?token=cu_fM5rDzgZXD0JmdiqiyCbYWwO4fx8LPby9jNpIb54&height=1600&width=1200&expires=33247963234"/>
       
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="capitaltaxplus.com"/>
        <meta property="twitter:url" content="https://capitaltaxplus.com/"/>
        <meta name="twitter:title" content="Capital TaxPlus"/>
        <meta name="twitter:description" content="Streamline your tax filing process this year with Tax Plus! This user-friendly platform allows you to not only file your income tax return but also manage your Goods and Services Tax (GST) conveniently in one place, saving you time and minimizing the hassle of navigating separate systems."/>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/1298b67b-2c0f-4d76-9017-05ad308c1634.jpg?token=cu_fM5rDzgZXD0JmdiqiyCbYWwO4fx8LPby9jNpIb54&height=1600&width=1200&expires=33247963234"/>
       
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="px-9 py-2 flex justify-between items-center">
          <Navbar />
      </div>

      <AnimatedSectionAOS>
        <Contact />
      </AnimatedSectionAOS>

      <div className="px-9">
<Footer />
</div>
      <PopupWidget />
      </>
    )
  }




  export default ContactUs;