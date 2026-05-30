import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faArrowRight, faMusic ,faHeadphones ,faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons"

import favicon from "../../assets/favicon.ico"
import favicon1 from "../../assets/favicon1.png"

export default function Navbar(){

    const navbarRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setOpenSearch(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    // Side Bar Resize 
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1024){
                setOpenMenu(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const closeSidebar = ()=> setOpenMenu(false);
    
    return(
        <section>

            {/* Navbar */}
            <nav ref={navbarRef} className={`fixed top-0 left-[50%] -translate-x-[50%] z-100 w-full sm:w-[95%] xl:w-[90%] flex items-center justify-center px-4 sm:px-6 mt-2 ${scrolled ? "py-3" : "py-2"} transition-all duration-300 ease-out rounded-2xl
            ${scrolled ? "bg-gradient-to-r from-violet-600/20 via-purple-500/20 to-slate-600/20 shadow-lg backdrop-blur-md border-b border-white/10" : "bg-transparent backdrop-blur-sm shadow-none border-b border-transparent"}`}>
            
                <div className="w-full flex items-center justify-between">

                    <div className="flex items-center gap-2 select-none">
                        <img src={favicon1} alt="yoursmusiclogo" className="w-4 sm:w-6 h-4 sm:h-6 rounded-full" />
                        <Link to="/" className="text-sm sm:text-lg font-bold text-white tracking-wider lato-black-italic">Yours Music</Link>
                    </div>

                    <div className="hidden lg:block select-none">
                        <ul className="text-xs font-bold text-white flex items-center gap-4 xl:gap-7 p-2 mr-10 xl:mr-0 cursor-pointer lato-black">
                            <Link to="/apps" className="transition duration-300 hover:text-gray-600/80">Get The App</Link>
                            <Link to="/pricings" className="transition duration-300 hover:text-gray-600/80">Pricing</Link>
                            <Link to="/charts" className="transition duration-300 hover:text-gray-600/80">Charts</Link>
                            <li className="transition duration-300 hover:text-gray-600/80">Voice Test</li>
                            <li className="transition duration-300 hover:text-gray-600/80">Fast Forward '26</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative hidden lg:flex items-center gap-3 text-black">

                            {/* <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSearch ? "w-46 xl:w-60 2xl:w-84 opacity-100" : "w-0 opacity-0"}`}>
                                <input type="text" placeholder="Search for music" className="w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 outline-none"/>
                            </div>
                            <Search onClick={()=> setOpenSearch(!openSearch)} className="cursor-pointer text-white hover:text-rose-400/60 transition"/> */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openSearch ? "w-52 xl:w-64 2xl:w-80 opacity-100" : "w-10"}`}>
                                
                                <div className={`flex items-center justify-between rounded-full transition-all duration-300 ${ openSearch ? 
                                "px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20" : ""}`}>
                                    <input autoFocus type="text" placeholder="Search for music" className={`text-sm bg-transparent text-white placeholder:text-white/50 outline-none flex-1 transition-opacity duration-300 ${
                                    openSearch ? "opacity-100" : "opacity-0 w-0 pointer-events-none" }`}/>
                                    <Search size={18} onClick={(e)=> {e.stopPropagation(); setOpenSearch(true);}} className="cursor-pointer text-white hover:text-rose-400/60 shrink-0"/>
                                </div>
                            </div>
                            <a href="#" className="flex items-center gap-1 border border-white/40 px-4 py-2 rounded-full bg-white/70 group hover:bg-white/20 transition">
                                <span className="text-sm group-hover:text-white lato-bold">Join</span>
                                <FontAwesomeIcon icon={faHeadphones} className="text-xs group-hover:text-white group-hover:translate-x-1 transition-transform"/>
                            </a>

                        </div>
                    </div>   

                </div>


                {/* Mobile Toggle*/}
                <div className="flex lg:hidden items-center gap-4">

                    {/* <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSearch ? "w-44 md:w-60 lg:w-88 opacity-100" : "w-0 opacity-0"}`}>
                        <input type="text" placeholder="Search for music" className="w-full pl-2 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 outline-none"/>
                    </div>
                    <Search onClick={()=> setOpenSearch(!openSearch)} className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer text-white hover:text-rose-400/60 transition"/> */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openSearch ? "w-auto xl:w-60 2xl:w-88 opacity-100" : "w-10"}`}>
                
                        <div className={`flex items-center justify-between rounded-full transition-all duration-300 ${ openSearch ? 
                        "px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20" : ""}`}>
                            <input autoFocus type="text" placeholder="Search for music" className={`text-xs sm:text-sm bg-transparent text-white placeholder:text-white/50 outline-none flex-1 transition-opacity duration-300 ${
                            openSearch ? "opacity-100" : "opacity-0 w-0 pointer-events-none" }`}/>
                            <Search onClick={(e)=> {e.stopPropagation(); setOpenSearch(true);}} className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer text-white hover:text-rose-400/60 shrink-0"/>
                        </div>
                        
                    </div>
                    <button onClick={()=> setOpenMenu(true)} className="text-white cursor-pointer">
                        <Menu className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>

                </div>
                
            </nav>


            {/* Sidebar */}
            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-screen bg-gray-900 z-100 transform transition-transform duration-300 xl:hidden flex flex-col
            ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>

                <div className="flex items-center justify-between px-5 py-5 border-b border-gray-700">

                    <div className="flex items-center gap-2 select-none">
                        <img src={favicon1} alt="yoursmusiclogo" className="w-6 sm:w-8 h-6 sm:h-8 rounded-full" />
                        <Link to="/" onClick={closeSidebar} className="text-md sm:text-xl font-bold text-white tracking-wider lato-black-italic">Yours Music</Link>
                    </div>
                    <button onClick={() => setOpenMenu(false)}className="text-white cursor-pointer">
                        <X size={30} className="mr-4"/>
                    </button>

                </div>

                <div className="flex-1 overflow-y-auto">
                    {/* Items */}
                    <ul className="flex flex-col gap-8 text-white lato-bold text-lg sm:text-xl p-6 sm:p-12 cursor-pointer">
                        <li className="hover:text-purple-400 transition cursor-pointer">Download Yours Music</li>
                        <Link to="/apps" onClick={closeSidebar} className="hover:text-purple-400 transition duration-300 cursor-pointer sm:my-2">Get The App</Link>
                        <li className="hover:text-purple-400 transition cursor-pointer">Pricing</li>
                        <li className="hover:text-purple-400 transition cursor-pointer sm:my-2">Charts</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Voice Test</li>
                        <li className="hover:text-purple-400 transition cursor-pointer sm:my-2">Fast Forward '26</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Help</li>
                    </ul>
                </div>

                {/* Bottom Button */}
                <div className="bg-white/20 px-6 py-3 md:flex md:justify-center md:gap-4">

                    <div className="py-2 sm:py-4 text-center">
                        <span className="text-lg sm:text-xl text-white font-bold">Join to Apple Music to play songs in full within YoursMusic.</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="#" className="font-semibold inline-flex items-center justify-center gap-2 border border-white/20 rounded-full bg-white group hover:bg-white/20 px-4 py-3">
                            <span className="text-sm group-hover:text-white lato-bold">Join</span>
                            <FontAwesomeIcon icon={faHeadphones} className="text-xs group-hover:text-white group-hover:translate-x-1 transition-transform"/>
                        </a>
                    </div>

                </div>

            </div>
            {/* Mobile Sidebar */}

            {/* Background black */}
            {openMenu && (
                <div onClick={()=> setOpenMenu(false)}className="fixed inset-0 bg-black/50 z-40 xl:hidden"></div>
            )}
            {/* Background black */}
        </section>
    )
}