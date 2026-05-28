import { useState, useEffect } from "react"
import { Search, Menu, X } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple, faGooglePlay, faFacebook, faXTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from "react-i18next"

import favicon from "../../assets/favicon.ico"

export default function Footer(){

    const { t, i18n } = useTranslation()

    return(
        <>
            {/* Footer Section  */}
            <footer>

                {/* Cookie Bar */}
                <div className="bg-gray-600 text-white px-6 py-2 flex items-center justify-between">

                    <p className="text-sm sm:text-base mx-auto">
                        We use cookies — by using this site you agree to our{" "}
                        <a href="#" className="underline font-semibold">Apple Privacy Policy</a>
                    </p>

                    <button className="text-white hover:text-red-400 transition">
                        <X size={20} />
                    </button>

                </div>

                {/* Main Footer */}
                <div className="bg-[#0a0a0a] text-white px-6 lg:px-16 py-14">

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* First Col */}
                        <div className="flex flex-col gap-10">

                            <div className="flex items-center gap-2 mx-auto sm:mx-0 select-none">
                                <img src={favicon} alt="yoursmusiclogo" className="w-8 h-8" />
                                <span className="text-xl font-bold text-white tracking-wider lato-black-italic">Yours Music</span>
                            </div>

                            <div className="flex flex-col">
                                {/* <span className="mb-3 lato-regular">Select Language: </span> */}
                                <span className="mb-3 lato-regular">{t("selectLanguage")}</span>
                                <select onChange={(e)=> i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}
                                className="bg-black border border-white/20 rounded-lg px-4 py-3 outline-none">
                                    
                                    <option value="en">English</option>
                                    <option value="mm">Myanmar</option>

                                </select>
                            </div>

                            <div className="flex flex-col items-center sm:items-start gap-4">

                                {/* <a href="#" className="flex items-center gap-3 bg-white text-black rounded-xl px-5 py-3 hover:scale-105 transition w-fit">
                                    <FontAwesomeIcon icon={faGooglePlay} />
                                    <div className="flex flex-col">
                                        <span className="text-xs">GET IT ON</span>
                                        <span className="font-bold">Google Play</span>
                                    </div>
                                </a> */}
                                <a href="#">
                                    <img src="/googleplay.png" alt="Get it on Google Play" className="h-14 w-auto hover:scale-105 transition"/>
                                </a>

                                {/* <a href="#" className="flex items-center gap-3 bg-white text-black rounded-xl px-5 py-3 hover:scale-105 transition w-fit">
                                    <FontAwesomeIcon icon={faApple} />
                                    <div className="flex flex-col">
                                        <span className="text-xs">Download on the</span>
                                        <span className="font-bold">App Store</span>
                                    </div>
                                </a> */}
                                {/* <a href="YOUR_APP_STORE_LINK" target="_blank" rel="noopener noreferrer">
                                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us" alt="Download on the App Store" className="h-16"/>
                                </a> */}
                                <a href="#" target="_blank">
                                    <img src="/applestore.svg" alt="Download on the App Store" className="h-16 w-auto hover:scale-105 transition"/>
                                </a>

                            </div>

                        </div>

                        {/* Second Col */}
                        <div className="flex flex-col items-center sm:items-start gap-4">

                            <h2 className="text-2xl font-bold lato-bold">Company</h2>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">About Us</a>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Apps</a>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Careers</a>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Help for Apple Devices</a>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Help for Android Devices</a>

                        </div>

                        {/* Third Col */}
                        <div className="flex flex-col items-center sm:items-start gap-4">

                            <h2 className="text-2xl font-bold lato-bold">Legal</h2>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Terms</a>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Privacy Policy</a>
                            <a href="#" className="text-white/70 hover:text-purple-400 transition">Manage Your Data</a>

                        </div>

                    </div>

                    {/* Social */}
                    <div className="border-t border-white/10 mt-14 pt-10 text-center">

                        <h3 className="text-xl lato-bold mb-5">Follow Us</h3>

                        <div className="flex items-center justify-center gap-6 text-2xl">
                            <a href="#" className="hover:text-blue-400 transition"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" className="hover:text-white transition"><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href="#" className="hover:text-pink-400 transition"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" className="hover:text-yellow-300 transition"><FontAwesomeIcon icon={faSnapchat} /></a>
                        </div>

                        <p className="text-white/50 text-sm mt-8">
                            © Copyright 2026 Apple Inc. and its affiliates | Supplier Responsibility
                        </p>

                    </div>
                    {/* Social */}

                </div>

            </footer>
            {/* Footer Section  */}
        </>
    )
}