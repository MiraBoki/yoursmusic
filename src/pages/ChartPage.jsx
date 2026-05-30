import { useState, useEffect } from "react"
import { Search, Menu, X, Play, Download } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple, faGooglePlay, faFacebook, faXTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons'


import songchart2 from "../assets/homeimgs/songchart2.jpg"

export default function ChartPage() {

    const [selectedCategory, setSelectedCategory] = useState("TOP 200");

    const songs = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        title: `Song ${i + 1}`,
        artist: "Artist Name",
    }))



    const categories = ["TOP 200", "VIRAL", "GENRES"];

    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* Top Section */}
            <section className="relative bg-gray-700/40 pt-28 px-3 sm:px-6 lg:px-12 py-10">

                {/* Cards */}
                <div className="absolute top-0 right-20 rotate-12 translate-x-10 -translate-y-4 opacity-70">
                    <img src={songchart2} alt="album" className="w-40 rounded-[24px] border border-white/10 shadow-2xl"/>
                </div>
                
                <div className="absolute top-16 right-20 -rotate-12 opacity-90">
                    <img src={songchart2} alt="album" className="w-40 rounded-[24px] border border-white/10 shadow-2xl"/>
                </div>

                {/* Country Select */}
                <select className="w-full sm:w-auto relative z-50 bg-black border border-white/20 px-5 py-3 rounded-xl mb-10">
                    <option>Global</option>
                    <option>United States</option>
                    <option>Japan</option>
                </select>

                {/* Title Area */}
                <div className="flex items-center gap-6 group">

                    <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 cursor-pointer
                    flex items-center justify-center transition-all duration-300 hover:scale-110 bottom-5 right-5">
                        <Play size={18} fill="white" className="text-white ml-1"/>
                    </div>

                    <div>
                        <p className="text-sm sm:text-md uppercase text-white/60 font-bold">Global</p>
                        <h1 className="text-3xl sm:text-5xl lato-black">Top 200</h1>
                        <p className="text-sm sm:text-md text-white/60 mt-2">The top songs in the world this week</p>
                    </div>

                </div>

                <div className="flex items-center justify-between">
                    {/* Categories */}
                    <div className="flex mx-auto sm:mx-0 gap-4 mt-10">

                        {categories.map((category)=>(
                            <button key={category} onClick={()=> setSelectedCategory(category)} className={`text-sm sm:text-md rounded-full cursor-pointer transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3
                            ${selectedCategory === category ? "bg-white lato-bold text-black" : "bg-white/10 hover:bg-white hover:text-black lato-regular"}`}>
                            {category}
                            </button>
                        ))}

                    </div>

                    <div className="hidden md:flex mt-10">
                        <a href="#" className="uppercase flex items-center gap-2 text-white/80 hover:text-white transition group">
                            <Download size={16} className="group-hover:translate-y-[1px] transition-transform"/>
                            <span className="hover:underline">Download CSV</span>    
                        </a>
                    </div>
                </div>

            </section>
            {/* Top Section */}

            {/* Content */}
            {/* <section className="px-6 lg:px-12 py-10">

                <div className="grid lg:grid-cols-2 gap-8">

                
                <div className="h-[80vh] overflow-y-auto pr-2">
                    {songs.map((song) => (
                    <div
                        key={song.id}
                        className="
                        flex items-center gap-4
                        py-4
                        border-b border-white/10
                        cursor-pointer
                        hover:bg-white/5
                        px-3
                        rounded-xl
                        "
                    >
                        <span className="font-bold text-xl w-8">
                        {song.id}
                        </span>

                        <img
                        src="https://placehold.co/70"
                        alt=""
                        className="w-16 h-16 rounded-lg"
                        />

                        <div>
                        <h3 className="font-bold">
                            {song.title}
                        </h3>

                        <p className="text-white/60">
                            {song.artist}
                        </p>
                        </div>
                    </div>
                    ))}
                </div>

                
                <div>

                    <div
                    className="
                        sticky
                        top-28
                    "
                    >
                    <h2 className="text-3xl font-bold mb-4">
                        Music Video
                    </h2>

                    <div
                        className="
                        aspect-video
                        bg-black
                        rounded-3xl
                        overflow-hidden
                        "
                    >
                        <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        allowFullScreen
                        />
                    </div>

                    </div>

                </div>

                </div>

            </section> */}

        </div>
    )
}