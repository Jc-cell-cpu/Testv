import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Gstregistration from "../components/gstregistration";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Gstindiannational from "../components/gstindiannational";
import Gstcompany from "../components/gstcompany";
import { useState,useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';


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



const Home = () => {
  const router = useRouter();
  const canonicalUrl = `https://capitaltaxplus.com${router.asPath}`;
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
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="px-9 py-2 flex justify-between items-center">
          <Navbar />
      </div>
      <div className="px-9 py-6 flex justify-between items-center">
      <Hero />
    </div>
      
      <AnimatedSectionAOS> 
      <SectionTitle
        pretitle="Taxplus Benefits"
        title=" Why should you use TaxPlus">
        Streamline your tax filing process this year with Tax Plus!  
        This user-friendly platform allows you to not only file your income tax 
        return but also manage your Goods and Services Tax (GST) 
        conveniently in one place, saving you time and minimizing the 
        hassle of navigating separate systems.
      </SectionTitle>
      </AnimatedSectionAOS>

      <AnimatedSectionAOS>      
      <Benefits data={benefitOne} />
      </AnimatedSectionAOS>
      
      <div className="px-10 py-6 flex justify-between items-center">
      <AnimatedSectionAOS>
      <Benefits imgPos="right" data={benefitTwo} />
      </AnimatedSectionAOS>
      </div>
     
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}

            {/* GST Section */}
            <AnimatedSectionAOS> 
      <SectionTitle pretitle="Documents Required for GST Registration" title="Partnership Firm">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <Gstregistration />
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <SectionTitle title="Indian Nationals">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <Gstindiannational />
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <SectionTitle title="Company">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <Gstcompany />
      </AnimatedSectionAOS>
      

      {/* GST End */}
      <AnimatedSectionAOS> 
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
     
      

     <AnimatedSectionAOS> 
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        In this section we highlight our popular customers.
      </SectionTitle>
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <Testimonials />
      </AnimatedSectionAOS>
      

      
      <AnimatedSectionAOS> 
      <Faq />
      </AnimatedSectionAOS>
      <AnimatedSectionAOS> 
      <Cta />
      </AnimatedSectionAOS>
      

<div className="px-9">
<Footer />
</div>

      
      <PopupWidget />
    </>
  );
}

export default Home;