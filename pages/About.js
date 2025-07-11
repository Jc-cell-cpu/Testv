import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Container from "../components/container"
import {
    Mail,
    Phone,
    Globe,
    MapPin,
    MessageCircle,
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
    Send,
    Star,
    Hash,
    Sparkles,
    Users,
    Award,
    TrendingUp,
} from "lucide-react"

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - TaxPlus</title>
                <meta name="description" content="Learn more about TaxPlus - your trusted partner for tax filing in India" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            {/* Background wrapper with gradient */}
            <div className="min-h-screen">
                {/*bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900*/}
                <Container>
                    {/* Hero Section */}
                    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                        {/* Animated Background Elements */}
                        {/*<div className="absolute inset-0 overflow-hidden">*/}
                        {/*    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>*/}
                        {/*    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>*/}
                        {/*</div>*/}

                        <div className="relative max-w-6xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-blue-200 dark:border-blue-700 mb-8">
                                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted Tax Partners</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
                                Welcome to
                                <br />
                                <span className="text-6xl lg:text-8xl">Capital Taxplus</span>
                            </h1>

                            {/* Description */}
                            <div className="max-w-4xl mx-auto">
                                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    A unit of{" "}
                                    <span className="font-bold text-blue-600 dark:text-blue-400">M/s Capital Group Ventures</span>
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Capital Taxplus is your reliable partner in navigating the complexities of taxation with ease and
                                    expertise. We believe taxation can be a strategic advantage. Let us handle the complexities while you
                                    focus on growing your business.
                                </p>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white">1000+</div>
                                    <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                                    <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                                    <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white">99%</div>
                                    <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Social Section */}
                    <div className="py-16 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    Ready to simplify your tax journey? We're here to help.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                {/* Contact Information Card */}
                                <div className="group">
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex items-center group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl p-3 transition-colors">
                                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                                                    <Globe className="w-5 h-5 text-green-600" />
                                                </div>
                                                <a
                                                    href="https://capitaltaxplus.com"
                                                    target="_blank"
                                                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                                                    rel="noreferrer"
                                                >
                                                    capitaltaxplus.com
                                                </a>
                                            </div>

                                            <div className="flex items-center group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl p-3 transition-colors">
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

                                            <div className="flex items-center group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl p-3 transition-colors">
                                                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-4">
                                                    <Phone className="w-5 h-5 text-indigo-600" />
                                                </div>
                                                <a
                                                    href="tel:+918926130200"
                                                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                                                >
                                                    +91 8926-130-200
                                                </a>
                                            </div>

                                            <div className="flex items-center group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl p-3 transition-colors">
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
                                </div>

                                {/* Social Media Card */}
                                <div className="group">
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                                <Send className="w-6 h-6 text-white" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Connect With Us</h2>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <a
                                                href="https://maps.app.goo.gl/M6oFDCTehkJXxJiq9"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Star className="w-5 h-5 text-yellow-600" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Reviews</span>
                                            </a>

                                            <a
                                                href="https://www.facebook.com/profile.php?id=61556642542120"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Facebook className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Facebook</span>
                                            </a>

                                            <a
                                                href="https://www.instagram.com/capitaltaxplus"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Instagram className="w-5 h-5 text-pink-600" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Instagram</span>
                                            </a>

                                            <a
                                                href="https://www.linkedin.com/in/capital-taxplus-8ba06a2b4"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Linkedin className="w-5 h-5 text-blue-700" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">LinkedIn</span>
                                            </a>

                                            <a
                                                href="https://x.com/capitaltaxplus"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Twitter className="w-5 h-5 text-gray-900 dark:text-white" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">X</span>
                                            </a>

                                            <a
                                                href="https://www.youtube.com/@CapitalTaxplus"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Youtube className="w-5 h-5 text-red-600" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">YouTube</span>
                                            </a>

                                            <a
                                                href="https://www.threads.net/@capitaltaxplus"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Hash className="w-5 h-5 text-gray-900 dark:text-white" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Threads</span>
                                            </a>

                                            <a
                                                href="https://t.me/+9MkrZI8jip1jYmNl"
                                                target="_blank"
                                                className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 group/social"
                                                rel="noreferrer"
                                            >
                                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 group-hover/social:scale-110 transition-transform">
                                                    <Send className="w-5 h-5 text-blue-500" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">Telegram</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Locations Section */}
                            <div className="text-center mb-12">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Locations</h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300">
                                    Visit us at any of our convenient locations across Odisha
                                </p>
                            </div>

                            {/* Google Maps */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="group">
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
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
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                Capital Taxplus – Head Office (Konark)
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                Ward No 02, Plot No 658, Junei, near Mallikai Temple, Konark, Odisha 752111
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
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
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                Capital Taxplus – Bhubaneswar Branch
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                Delta Square, Plot No 2456, Axis Bank Building, High School Rd, near Govt, Satabdi Nagar, Delta
                                                Colony,
                                                <br />
                                                Bhubaneswar, Odisha 751003
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
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
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                Capital Taxplus – Puri Branch
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                                Plot No 27, in front of Kadalibari U.P School, Gopal Nagar, Charinala, Puri, Odisha 752002
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
