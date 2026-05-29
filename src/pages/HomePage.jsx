import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// import Navbar from "../components/layout/Navbar"
// import Footer from "../components/layout/Footer"

import homeimg1 from "../assets/homeimgs/homeimg1.webp"
import banner1 from "../assets/homeimgs/banner.png"
import qrimg from "../assets/homeimgs/qr.png"
import songchart from "../assets/homeimgs/songchart.jpg"
import songchart2 from "../assets/homeimgs/songchart2.jpg"
import songchart3 from "../assets/homeimgs/songchart3.jpg"


export default function HomePage(){

    return(
        <div className="w-full min-h-screen bg-gray-900">
                
            {/* Body Section 1 */}
            <main className="relative overflow-hidden min-w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-10 text-white mx-auto px-6 pt-2 pb-8 lg:py-0">
                
                {/* Background Gradient  */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[200px] right-[-100px] w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
                </div>
                {/* Background Gradient  */}


                <div className="lg:flex-1 flex justify-center pt-2 pb-0 lg:py-6">
                    <img src={banner1} alt="banner1" className="max-w-[450px] w-full object-contain" />
                </div>

                <div className="lg:flex-1 mt-10 lg:mt-0">

                    <h1 className="text-2xl md:text-5xl text-center lg:text-start font-bold leading-tight lato-black">Find Music <br className="hidden lg:block" />
                        <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent lato-regular">In Seconds</span>
                    </h1>
                    <h4 className="text-sm md:text-md font-bold text-center lg:text-start py-4 lg:py-2 lato-light">Find music, concerts and more with YoursMusic</h4>
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-4 lg:w-[500px]">
                        <img src={qrimg} alt="qrcode" className="rounded-lg" />
                        <div>
                            <h4 className="font-bold md:text-lg">Get the app</h4>
                            <span className="text-sm md:text-md text-white/40">Scan the code with your smart phone camera to download the free app</span>
                        </div>
                    </div>
                    <span className="text-sm md:text-md block text-center lg:text-start py-3">Available on <a href="#" className="underline">iOS</a>, <a href="#" className="underline">Android</a>, and <a href="#" className="underline">more devices</a></span>

                </div>

            </main>
            {/* Body Section 1 */}


            {/* Body Section 2 */}
            <section className="w-full px-6 lg:px-12 py-10">

                <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-black via-[#001a4d] to-[#002766] overflow-hidden">

                    <div className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden lg:px-16 lg:py-16">
                    
                        <div className="w-full lg:flex-1 relative rounded-[32px] lg:rounded-none overflow-hidden px-8 lg:px-16 py-10 lg:py-16">
                            <video src="/fastforward.webm" autoPlay loop muted playsInline className="max-w-[400px] lg:max-w-[700px] object-cover lg:object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"></video>
                            <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
                        </div>

                        <div className="absolute inset-0 z-10 flex flex-col justify-center text-white lg:static lg:flex-1 px-6 mt-5 sm:mt-0 lg:px-0 lg:text-left">

                            <h2 className="text-xl sm:text-4xl md:text-6xl font-light leading-none lato-regular">
                                Yours Music<br />
                                Fast Forward
                            </h2>

                            <h1 className="text-2xl sm:text-6xl md:text-8xl font-black leading-none tracking-tight py-2">2026</h1>
                            <p className="max-w-xl text-xs sm:text-lg md:text-2xl text-white/80 leading-relaxed mt-2 lato-light">Take a look ahead at some of the most exciting talent being discovered on YoursMusic</p>

                            <div className="mt-6">
                                <a href="#" className="text-sm sm:text-xl font-semibold inline-flex items-center justify-center bg-white text-black rounded-full px-4 sm:px-10 py-2 sm:py-4 hover:scale-105 transition">
                                    See the List
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* Body Section 2 */}
          

            {/* Body Section 3 Global Top 200 */}
            <section className="relative w-full px-6 lg:px-12 py-10">

                {/* Background Gradient  */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[200px] left-[-100px] w-[300px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[150px] right-[-100px] w-[200px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full"></div>
                </div>
                {/* Background Gradient  */}

                {/* Title  */}
                <header className="mt-10">
                    <h3 className="text-lg sm:text-2xl font-bold uppercase text-white text-center lato-black">Global Top 200</h3>
                    <h1 className="text-3xl sm:text-5xl text-white text-center leading-tight py-3 lato-bold">Top songs being discovered around the world right now</h1>
                    <span className="text-md sm:text-xl block text-white text-center lato-regular">See who made it on the list of the top songs worldwide on YoursMusic</span>
                </header>
                {/* Title  */}

                {/* Chart  */}
                <div className="max-w-6xl mx-auto mt-10">

                    <div className="relative group overflow-hidden rounded-[32px] cursor-pointer">

                        <video src="/chart.m4v" autoPlay loop muted playsInline className="w-full h-[250px] sm:h-[400px] lg:h-[550px] object-cover group-hover:scale-105 transition duration-700"/>

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <h1 className="text-white text-4xl sm:text-6xl font-black tracking-widest uppercase lato-black">View Chart</h1>
                        </div>

                        <div className="absolute bottom-5 left-5 flex items-center gap-4 transition duration-300 group-hover:opacity-0">

                            <img src={songchart} alt="album" className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover"/>

                            <div className="text-white">
                                <h1 className="uppercase text-white/40 font-bold">Global Top 200 Chart</h1>
                                <h3 className="font-bold text-lg">Blinding Lights</h3>
                                <p className="text-white/70 text-sm sm:text-base">The Weeknd</p>
                            </div>

                        </div>

                    </div>

                </div>
                {/* Chart  */}

            </section>
            {/* Body Section 3 Global Top 200 */}


            {/* Body Section 4 Global Top 200 Chart */}
            <section className="w-full px-6 lg:px-12 py-16">

                {/* Header */}
                <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-5">

                    <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight lato-bold">Global Top 200 Chart</h1>

                    <button className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wide hover:text-purple-300 transition lato-regular cursor-pointer">
                        See All<span className="text-2xl">→</span>
                    </button>

                </div>

                {/* Music Slider */}
                <div className="max-w-7xl mx-auto mt-10 relative">

                    <div className="absolute hidden sm:block sm:right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none"></div>

                    {/* Scroll Container */}
                    <div id="musicSlider" className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4">

                        {/* Music Columns */}
                        {[0,1,2,3,4,5,6].map((col) => {

                            const songs = col === 6 ? [19, 20]
                            : [
                                col * 3 + 1,
                                col * 3 + 2,
                                col * 3 + 3
                            ];

                            return(
                            <div key={col} className="min-w-full lg:min-w-[48%] flex flex-col divide-y divide-white/10">

                                {/* Music Items */}
                                {songs.map((song) => (

                                    <div key={song} className="flex items-center gap-4 py-5 group cursor-pointer">

                                        <span className="text-3xl font-black text-white/90 w-10">
                                            {song}
                                        </span>

                                        {/* Album */}
                                        <div className="relative">

                                            <img src={songchart2} alt="album" className="w-20 h-20 rounded-2xl object-cover"/>

                                            {/* Play Btn Overlay */}
                                            {/* <div className="absolute inset-0 flex items-center justify-center">

                                                <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition">
                                                    ▶
                                                </div>

                                            </div> */}

                                        </div>

                                        {/* Song Info */}
                                        <div className="text-white">

                                            <h3 className="font-bold text-lg leading-tight">Blinding Lights</h3>
                                            <p className="text-white/60 text-base">The Weeknd</p>

                                        </div>

                                    </div>

                                ))}

                            </div>
                            )

                        })}

                    </div>

                    {/* Next Slide Arrows */}
                    <div className="relative flex items-center justify-center md:justify-end gap-4 mt-8 z-99">

                        {/* Left */}
                        <button onClick={()=> {document.getElementById("musicSlider").scrollBy({
                            left: -350,
                            behavior: "smooth"
                        })
                        }}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                            <ChevronLeft size={24} className="-translate-x-[10%]" />
                        </button>

                        {/* Right */}
                        <button onClick={()=> { document.getElementById("musicSlider").scrollBy({
                            left: 350,
                            behavior: "smooth"
                        })
                        }}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                            <ChevronRight size={24} className="-translate-x-[10%]" />
                        </button>

                    </div>

                </div>

            </section>
            {/* Body Section 4 Global Top 200 Chart */}


            {/* Body Section 5 Featured Top Artists */}
            <section className="relative w-full px-6 lg:px-12 py-16">

                {/* Background Gradient  */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[150px] left-[-100px] w-[200px] h-[300px] bg-red-500/20 blur-[120px] rounded-full"></div>
                </div>
                {/* Background Gradient  */}

                {/* Header */}
                <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-5">
                    <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight lato-bold">Featured Top Artists</h1>
                </div>
                
                <div className="relative max-w-7xl mx-auto mt-10">

                    <div className="absolute hidden sm:block sm:right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none"></div>
                    <div id="artistSlider" className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">   
                    {[1,2,3,4,5,6,7,8].map((artist) => (

                        <div key={artist} className="min-w-[260px] sm:min-w-[250px] rounded-[30px] overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/40 transition group">

                            {/* Artist Image */}
                            <div className="relative overflow-hidden">

                                <img src={songchart} alt="artist" className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"/>

                                {/* Black Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                {/* Play Button */}
                                <div className="absolute w-14 h-14 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 
                                flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 
                                transition-all duration-300 hover:scale-110 bottom-5 right-5">
                                    <Play size={18} fill="white" className="text-white ml-1"/>
                                </div>

                                {/* Text */}
                                <div className="absolute bottom-5 left-5 text-white">

                                    <h2 className="text-2xl font-black">The Weeknd</h2>
                                    <p className="text-white/70 text-sm mt-1">12.5M Monthly Listeners</p>

                                </div>

                            </div>

                        </div>

                    ))}

                    </div>
                </div>
                

                {/* Arrows */}
                <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-end gap-4 mt-8">

                    {/* Left */}
                    <button onClick={()=> {document.getElementById("artistSlider").scrollBy({
                        left: -350,
                        behavior: "smooth"
                    })
                    }}
                    className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <ChevronLeft size={24} className="-translate-x-[10%]" />
                    </button>

                    {/* Right */}
                    <button onClick={()=> {document.getElementById("artistSlider").scrollBy({
                        left: 350,
                        behavior: "smooth"
                    })
                    }}
                    className="relative w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <ChevronRight size={24} className="-translate-x-[10%]" />
                    </button>

                </div>
                
            </section>
            {/* Body Section 5 Featured Top Artists */}


            {/* Body Section 6 More Charts */}
            <section className="w-full px-6 lg:px-12 py-16">

                {/* Header */}
                <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-5">
                    <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight lato-bold">More Charts</h1>
                </div>

                {/* Charts Slider */}
                <div className="max-w-7xl mx-auto mt-10 relative">

                    <div className="absolute hidden sm:block sm:right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent pointer-events-none"></div>

                    {/* Album Area */}
                    <div id="moreChartsSlider" className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4">

                        {[1,2,3,4].map((chart) => (

                            <div key={chart} className="relative min-w-full lg:min-w-[48%] h-[420px] sm:h-[320px] rounded-[32px] overflow-hidden group">

                                {/* Background Image */}
                                <img src={songchart3} alt="chart" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"/>

                                <div className="absolute inset-0 bg-black/65"></div>
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

                                {/* Cards */}
                                <div className="absolute top-0 right-0 rotate-12 translate-x-10 -translate-y-4 opacity-70">
                                    <img src={songchart2} alt="album" className="w-40 rounded-[24px] border border-white/10 shadow-2xl"/>
                                </div>

                                <div className="absolute top-16 right-20 -rotate-12 opacity-90">
                                    <img src={songchart2} alt="album" className="w-40 rounded-[24px] border border-white/10 shadow-2xl"/>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">

                                    <h3 className="text-2xl sm:text-5xl font-black leading-none lato-bold-italic">Top 50</h3>

                                    <h2 className="text-3xl sm:text-6xl font-black leading-none mt-2 lato-black">New York City</h2>

                                    <p className="text-white/75 text-sm sm:text-lg max-w-md mt-4 leading-relaxed lato-regular">
                                        Featuring songs from Drake, Future, Molly Santana,
                                        Dave and more
                                    </p>

                                    {/* Button */}
                                    <div className="mt-6">
                                        <button className="px-8 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 text-white font-bold hover:bg-purple-500 transition-all duration-300 cursor-pointer">
                                            VIEW
                                        </button>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Arrows */}
                    <div className="relative z-99 flex items-center justify-center md:justify-end gap-4 mt-8">

                        <button onClick={()=> {document.getElementById("moreChartsSlider").scrollBy({
                            left: -500,
                            behavior: "smooth"
                        })
                        }}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-purple-500 transition-all duration-300 hover:scale-110 cursor-pointer">
                            <ChevronLeft size={24} />
                        </button>

                        {/* Right */}
                        <button onClick={()=> {document.getElementById("moreChartsSlider").scrollBy({
                            left: 500,
                            behavior: "smooth"
                        })
                        }}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white hover:bg-purple-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                            <ChevronRight size={24} />
                        </button>

                    </div>

                </div>

            </section>
            {/* Body Section 6 More Charts */}
        
        </div>
    )
}