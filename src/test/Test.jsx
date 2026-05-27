{/* Nav Bar  */}
            <section>
                <nav className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-5 ${scrolled ? "py-3" : "py-5"} transition-all duration-300 ease-out
                ${scrolled ? "bg-gradient-to-r from-violet-600/20 via-purple-500/20 to-slate-600/20 shadow-lg backdrop-blur-md border-b border-white/10" : "bg-transparent backdrop-blur-sm shadow-none border-b border-transparent"}`}>
            
                    <div className="w-auto 2xl:w-1/2 flex items-center justify-between">

                        <div className="flex items-center gap-2 select-none">
                            <img src={favicon} alt="yoursmusiclogo" className="w-8 h-8" />
                            <span className="text-xl font-bold text-white tracking-wider lato-black-italic">Yours Music</span>
                        </div>

                        <div className="ml-4 hidden lg:block select-none">
                            <ul className="text-sm font-bold text-white flex items-center p-3 gap-7 cursor-pointer lato-black">
                                <li className="transition duration-300 hover:text-black">Get The App</li>
                                <li className="transition duration-300 hover:text-black">Pricing</li>
                                <li className="transition duration-300 hover:text-black">Charts</li>
                                <li className="transition duration-300 hover:text-black">Voice Test</li>
                                <li className="transition duration-300 hover:text-black">Fast Forward '26</li>
                            </ul>
                        </div>

                    </div>

            
                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-3 text-black">
                            <Search className="cursor-pointer text-white"/>
                            <a href="#" className="flex items-center gap-1 border border-white/40 px-4 py-2 rounded-full bg-white/70 hover:bg-white/20 transition">
                                <span className="font">Join</span>
                                <FontAwesomeIcon icon={faApple} />
                                <span className="font-bold">Music</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle*/}
                    <div className="flex lg:hidden items-center gap-4">

                        <Search className="cursor-pointer text-white" />

                        <button onClick={()=> setOpenMenu(true)} className="text-white cursor-pointer">
                            <Menu size={30} />
                        </button>

                    </div>
                
                </nav>

                {/* Mobile Sidebar */}
                <div className={`fixed top-0 left-0 h-full w-[100vw] bg-gray-900 z-50 transform transition-transform duration-300 lg:hidden 
                ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>

                    <div className="flex items-center justify-between px-5 py-5 border-b border-gray-700">

                        <div className="flex items-center gap-2">
                            <img src={favicon} alt="yoursmusiclogo" className="w-8 h-8" />
                            <span className="text-xl font-bold text-white tracking-wider">Yours Music</span>
                        </div>
                        <button onClick={() => setOpenMenu(false)}className="text-white cursor-pointer">
                            <X size={30} />
                        </button>

                    </div>

                    {/* Items */}
                    <ul className="flex flex-col gap-8 text-white font-bold text-2xl p-12 cursor-pointer">
                        <li className="hover:text-purple-400 transition cursor-pointer">Download YoursMusic</li>
                        <li className="hover:text-purple-400 transition cursor-pointer my-2">Get The App</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Pricing</li>
                        <li className="hover:text-purple-400 transition cursor-pointer my-2">Charts</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Voice Test</li>
                        <li className="hover:text-purple-400 transition cursor-pointer my-2">Fast Forward '26</li>
                        <li className="hover:text-purple-400 transition cursor-pointer">Help</li>
                    </ul>

                    {/* Bottom Button */}
                    <div className="w-full bg-white/20 absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg md:flex md:justify-center md:gap-4">

                        <div className="py-4 text-center">
                            <span className="text-xl text-white font-bold">Join to Apple Music to play songs in full within YoursMusic.</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/20 px-4 py-3 rounded-full bg-white text-black text-lg font-semibold">
                                <span></span>
                                <FontAwesomeIcon icon={faApple} />
                                <span>Music</span>
                            </a>
                        </div>

                    </div>

                </div>
                {/* Mobile Sidebar */}


                {/* Background black */}
                {openMenu && (
                    <div onClick={()=> setOpenMenu(false)}className="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
                )}
                {/* Background black */}
            </section>
            {/* Nav Bar  */}