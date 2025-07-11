"use client"

import Head from "next/head"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"

import { benefitOne, benefitTwo } from "../components/data"
import Benefits from "../components/benefits"
import Footer from "../components/footer"
import Testimonials from "../components/testimonials"
import Gstregistration from "../components/gstregistration"
import Cta from "../components/cta"
import Faq from "../components/faq"
import PopupWidget from "../components/popupWidget"
import Gstindiannational from "../components/gstindiannational"
import Gstcompany from "../components/gstcompany"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useRouter } from "next/router"
import Banner from "@/components/Banner"
import { MapPin, Phone, Mail, Globe, MessageCircle, Star, Users, Award, TrendingUp, Sparkles } from "lucide-react"

const AnimatedSectionAOS = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
            easing: "ease",
        })
    }, [])

    return (
        <div data-aos="fade-up">
            <div data-aos="fade">{children}</div>
        </div>
    )
}

const Home = () => {
    const router = useRouter()
    const canonicalUrl = `https://capitaltaxplus.com${router.asPath}`

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

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://capitaltaxplus.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Capital TaxPlus" />
                <meta
                    property="og:description"
                    content="Streamline your tax filing process this year with Tax Plus! This user-friendly platform allows you to not only file your income tax return but also manage your Goods and Services Tax (GST) conveniently in one place, saving you time and minimizing the hassle of navigating separate systems."
                />
                <meta
                    property="og:image"
                    content="https://opengraph.b-cdn.net/production/documents/1298b67b-2c0f-4d76-9017-05ad308c1634.jpg?token=cu_fM5rDzgZXD0JmdiqiyCbYWwO4fx8LPby9jNpIb54&height=1600&width=1200&expires=33247963234"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="capitaltaxplus.com" />
                <meta property="twitter:url" content="https://capitaltaxplus.com/" />
                <meta name="twitter:title" content="Capital TaxPlus" />
                <meta
                    name="twitter:description"
                    content="Streamline your tax filing process this year with Tax Plus! This user-friendly platform allows you to not only file your income tax return but also manage your Goods and Services Tax (GST) conveniently in one place, saving you time and minimizing the hassle of navigating separate systems."
                />
                <meta
                    name="twitter:image"
                    content="https://opengraph.b-cdn.net/production/documents/1298b67b-2c0f-4d76-9017-05ad308c1634.jpg?token=cu_fM5rDzgZXD0JmdiqiyCbYWwO4fx8LPby9jNpIb54&height=1600&width=1200&expires=33247963234"
                />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="icon" href="favicon.ico" />
            </Head>

            <div>
                <Banner />
            </div>

            <div className="px-9 py-2 flex justify-between items-center">
                <Navbar />
            </div>

            <div className="px-9 py-6 flex justify-between items-center">
                <Hero />
            </div>

            {/* Enhanced Stats Section */}
            <AnimatedSectionAOS>
                <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-700 mb-6">
                                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted by Thousands</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Why Choose Capital TaxPlus?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1000+</div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">Happy Clients</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Trusted nationwide</div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Expert guidance</div>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">99%</div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Proven results</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <SectionTitle pretitle="Taxplus Benefits" title="Why should you use TaxPlus">
                    Streamline your tax filing process this year with Tax Plus! This user-friendly platform allows you to not only
                    file your income tax return but also manage your Goods and Services Tax (GST) conveniently in one place,
                    saving you time and minimizing the hassle of navigating separate systems.
                </SectionTitle>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <Benefits data={benefitOne} />
            </AnimatedSectionAOS>

            <div className="ml-8">
                <AnimatedSectionAOS>
                    <Benefits imgPos="right" data={benefitTwo} />
                </AnimatedSectionAOS>
            </div>

            {/* GST Section */}
            <AnimatedSectionAOS>
                <SectionTitle pretitle="Documents Required for GST Registration" title="Partnership Firm">
                    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
                    requests.
                </SectionTitle>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <Gstregistration />
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <SectionTitle title="Individuals">
                    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
                    requests.
                </SectionTitle>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <Gstindiannational />
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <SectionTitle title="Company">
                    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
                    requests.
                </SectionTitle>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <Gstcompany />
            </AnimatedSectionAOS>

            {/* Enhanced Locations Section */}
            <AnimatedSectionAOS>
                <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-blue-200 dark:border-blue-700 mb-6">
                                <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Visit Our Offices</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Locations</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Visit us at any of our convenient locations across Odisha for personalized tax consultation and services
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get In Touch</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                                            <Phone className="w-5 h-5 text-green-600" />
                                        </div>
                                        <a
                                            href="tel:+918926130200"
                                            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                                        >
                                            +91 8926-130-200
                                        </a>
                                    </div>

                                    <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                                            <Mail className="w-5 h-5 text-red-600" />
                                        </div>
                                        <a
                                            href="mailto:capitaltaxplus@gmail.com"
                                            className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors"
                                        >
                                            capitaltaxplus@gmail.com
                                        </a>
                                    </div>

                                    <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                                            <Globe className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <a
                                            href="https://capitaltaxplus.com"
                                            target="_blank"
                                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                                            rel="noreferrer"
                                        >
                                            capitaltaxplus.com
                                        </a>
                                    </div>

                                    <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                                            <MessageCircle className="w-5 h-5 text-green-600" />
                                        </div>
                                        <a
                                            href="https://wa.me/918926130200"
                                            target="_blank"
                                            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                                            rel="noreferrer"
                                        >
                                            WhatsApp Chat
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Expert tax professionals with 5+ years experience
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-600 dark:text-gray-300">Comprehensive GST and Income Tax services</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-600 dark:text-gray-300">Multiple convenient locations across Odisha</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-600 dark:text-gray-300">99% success rate with satisfied clients</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-gray-600 dark:text-gray-300">Digital-first approach for faster processing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Locations with Maps */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="group">
                                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="relative overflow-hidden">
                                        <iframe
                                            title="Capital Taxplus H.O. - Konark"
                                            src="https://maps.google.com/maps?q=Capital%20Taxplus%20H.O.,%20Ward%20No%2002,%20Plot%20No%20658,%20Junei,%20near%20Mallikai%20Temple,%20Konark,%20Odisha%20752111&z=17&output=embed"
                                            width="100%"
                                            height="250"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="transition-transform duration-300 group-hover:scale-105"
                                        ></iframe>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                                                <MapPin className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                        HEAD OFFICE
                      </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Capital Taxplus – Konark</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            Ward No 02, Plot No 658, Junei, near Mallikai Temple, Konark, Odisha 752111
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="relative overflow-hidden">
                                        <iframe
                                            title="Capital Taxplus Bhubaneswar"
                                            src="https://maps.google.com/maps?q=Capital%20Taxplus%20Bhubaneswar&z=17&output=embed"
                                            width="100%"
                                            height="250"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="transition-transform duration-300 group-hover:scale-105"
                                        ></iframe>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                                                <MapPin className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                        BRANCH
                      </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            Capital Taxplus – Bhubaneswar
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            Delta Square, Plot No 2456, Axis Bank Building, High School Rd, near Govt, Satabdi Nagar, Delta
                                            Colony, Bhubaneswar, Odisha 751003
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="relative overflow-hidden">
                                        <iframe
                                            title="Capital Taxplus Puri"
                                            src="https://maps.google.com/maps?q=Capital%20Taxplus%20Puri,%20Plot%20No%2027,%20in%20front%20of%20Kadalibari%20U.P%20School,%20Gopal%20Nagar,%20Charinala,%20Puri,%20Odisha%20752002&z=17&output=embed"
                                            width="100%"
                                            height="250"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="transition-transform duration-300 group-hover:scale-105"
                                        ></iframe>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                                                <MapPin className="w-4 h-4 text-purple-600" />
                                            </div>
                                            <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        BRANCH
                      </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Capital Taxplus – Puri</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            Plot No 27, in front of Kadalibari U.P School, Gopal Nagar, Charinala, Puri, Odisha 752002
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
                    Testimonials is a great way to increase the brand trust and awareness. In this section we highlight our
                    popular customers.
                </SectionTitle>
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <Testimonials />
            </AnimatedSectionAOS>

            <AnimatedSectionAOS>
                <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat
                    requests.
                </SectionTitle>
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
    )
}

export default Home
