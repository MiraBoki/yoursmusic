import { useState, useEffect } from "react"
import { Search, Menu, X, ArrowUpRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple, faGooglePlay, faFacebook, faXTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons'

import homeimg1 from "../assets/homeimgs/homeimg1.webp"
import banner1 from "../assets/getappimgs/banner1.webp"
import banner2 from "../assets/getappimgs/banner2.webp"
import banner3 from "../assets/getappimgs/banner3.webp"
import banner4 from "../assets/getappimgs/banner4.webp"
import banner5 from "../assets/getappimgs/banner5.webp"

import qrimg from "../assets/homeimgs/qr.png"
import songchart from "../assets/homeimgs/songchart.jpg"
import songchart2 from "../assets/homeimgs/songchart2.jpg"
import songchart3 from "../assets/homeimgs/songchart3.jpg"

import favicon from "../assets/favicon.ico"
import favicon1 from "../assets/favicon1.png"

export default function GetAppPage(){
    return(
        <>
            <div className="w-full min-h-screen bg-gray-900">

                {/* Body Section 1 */}
                <main className="relative overflow-hidden min-w-full min-h-screen flex flex-col items-center justify-center mx-auto pt-10">
                                
                    {/* Background Gradient  */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
                        <div className="absolute bottom-[200px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
                    </div>
                    {/* Background Gradient  */}
                               
                    <div className="lg:flex-1 flex justify-center mt-25 sm:mt-20">
                        <img src={banner1} alt="banner1" className="max-w-[80%] 3xl:max-w-[60%] w-full object-contain" />
                    </div>

                    {/* Text Section  */}
                    <div>
                        {/* Title */}
                        <header className="mt-10">
                            <h1 className="text-3xl md:text-5xl md:w-3xl text-white text-center leading-tight lato-bold mx-auto">Identify, listen and discover songs with the YoursMusic app</h1>
                            <span className="text-md md:text-xl lg:w-4xl block text-gray-500 text-center lato-regular my-3 mx-5">Listen and add songs you discover to your Apple Music or Spotify playlists. Sing along with time-synced lyrics. Watch your favorite music videos with Apple Music or YouTube.</span>
                        </header>
                        {/* Title */}

                        {/* QR Code */}
                        <div className="w-[60%] flex flex-col-reverse md:flex-row items-center gap-3 bg-white/10 rounded-lg px-3 py-4 mx-auto">
                            <img src={qrimg} alt="qrcode" className="rounded-lg w-60 md:w-50" />
                            <div>
                                <h4 className="text-xl text-white lato-black">Download the app</h4>
                                <span className="text-white/40">Scan the code with your smart phone camera to download the free app</span>

                                <div className="flex text-white flex-col mt-4">
                                    <span className="lato-light">Available on</span>
                                    <div className="flex items-center gap-2">
                                        <a href="#" className="flex items-center gap-1 text-blue-400 lato-bold hover:text-blue-300 transition">
                                            iOS<ArrowUpRight size={16} />
                                        </a>
                                        <span className="text-white/40">|</span>
                                        <a href="#" className="flex items-center gap-1 text-blue-400 lato-bold hover:text-blue-300 transition">
                                            Android<ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* QR Code */}
                    </div>
                    {/* Text Section  */}
                               
                </main>
                {/* Body Section 1 */}


                {/* Body Section 2 */}
                <main className="relative overflow-hidden min-w-full min-h-screen flex flex-col items-end justify-center mt-20">
                                
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Card 1 */}
                            <div className="bg-gray-600/20 rounded-[40px] overflow-hidden flex flex-col justify-between min-h-[520px] px-7 pt-7 lg:my-10">

                                {/* Top Content */}
                                <div>

                                    {/* Logo */}
                                    <img src={favicon1} alt="logo" className="w-10 h-10 rounded-full" />

                                    {/* Text */}
                                    <div className="mt-2">
                                        <h1 className="text-3xl text-white leading-tight lato-black">Pop Up YoursMusic on Android</h1>
                                        <p className="text-gray-400 text-lg mt-2 leading-relaxed lato-regular">Bring YoursMusic to your favorite Android apps with Pop Up YoursMusic</p>
                                    </div>

                                    <button className="mt-2 flex items-center gap-2 text-blue-500 lato-bold hover:gap-3 transition-all duration-300 cursor-pointer">
                                        Learn more<ArrowUpRight size={18} />
                                    </button>

                                </div>

                                {/* Image */}
                                <div className="flex justify-center mt-10">
                                    <img src={banner2} alt="phone" className="w-full max-w-[340px] object-contain"/>
                                </div>

                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-600/20 rounded-[40px] overflow-hidden flex flex-col justify-between min-h-[720px] px-7 pt-7 mb-10 lg:my-10">

                                {/* Top Content */}
                                <div>

                                    <img src={favicon1} alt="logo" className="w-10 h-10 rounded-full" />

                                    <div className="mt-2">
                                        <h1 className="text-3xl text-white leading-tight lato-black">YoursMusic Android Notification</h1>
                                        <p className="text-gray-400 text-lg mt-2 leading-relaxed lato-regular">Use Android Notification to identify music with a swipe and tap.</p>
                                    </div>

                                    <button className="mt-2 flex items-center gap-2 text-blue-500 lato-bold hover:gap-3 transition-all duration-300 cursor-pointer">
                                        Learn more<ArrowUpRight size={18} />
                                    </button>

                                </div>

                                <div className="flex justify-center mt-10">
                                    <img src={banner3} alt="phone" className="w-full max-w-[340px] object-contain"/>
                                </div>

                            </div>

                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                            {/* Card 3 */}
                            <div className="bg-gray-600/20 rounded-[40px] overflow-hidden flex flex-col justify-between min-h-[520px] px-7 pt-7 lg:my-10">

                                {/* Top Content */}
                                <div>

                                    {/* Logo */}
                                    <img src={favicon1} alt="logo" className="w-10 h-10 rounded-full" />

                                    {/* Text */}
                                    <div className="mt-2">
                                        <h1 className="text-3xl text-white leading-tight lato-black">YoursMusic on iOS Control Center</h1>
                                        <p className="text-gray-400 text-lg mt-2 leading-relaxed lato-regular">Identify songs directly from Control Center on your iPhone or on your iPad.</p>
                                    </div>

                                    <button className="mt-2 flex items-center gap-2 text-blue-500 lato-bold hover:gap-3 transition-all duration-300 cursor-pointer">
                                        Learn more<ArrowUpRight size={18} />
                                    </button>

                                </div>

                                {/* Image */}
                                <div className="flex justify-center mt-10">
                                    <img src={banner5} alt="phone" className="w-full max-w-[340px] object-contain"/>
                                </div>

                            </div>

                            {/* Card 4 */}
                            <div className="bg-black/20 rounded-[40px] overflow-hidden flex flex-col justify-between min-h-[720px] px-7 pt-7 mb-10 lg:my-10">

                                <div className="flex flex-col items-center justify-center mt-10">
                                    <img src={banner4} alt="phone" className="w-full max-w-[340px] object-contain"/>

                                    {/* Content */}
                                    <div>
                                        <div className="mt-2">
                                            <h1 className="text-3xl text-white leading-tight lato-black">Use YoursMusic on the go</h1>
                                            <p className="text-gray-400 text-lg mt-2 leading-relaxed lato-regular">YoursMusic is available for both Apple Watch and Android Wear</p>
                                        </div>
                                    </div>
                                </div>

                                

                            </div>

                    </div>
                                           
                </main>
                {/* Body Section 2 */}
            </div>
        </>
    )
}