// pages/IncomeTax.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import ComingSoonPage from "../components/comingSoon";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

const IncomeTax = () => {
    return (
        <>
        <Head>
        <title>Capital TaxPlus</title>
        <meta
          name="description"
          content="Streamline your tax filing with Tax Plus! File income tax and manage GST in one place, saving time and hassle."
        />
        <meta name="keywords" content="tax, GST, income tax, tax filing" />
        <meta name="author" content="capitaltaxplus" />
        <link rel="icon" href="favicon.ico" />
      </Head>
  
        <Navbar />
       
        <ComingSoonPage />
        <Footer />
        <PopupWidget />
  
        </>
  
      );
};

export default IncomeTax; // Correct default expor