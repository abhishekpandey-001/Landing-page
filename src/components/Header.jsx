import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="bg-[lightseagreen] py-5">
                <div className="flex items-center justify-between mx-auto max-w-[60rem] text-white/80">
                    <h1 className="text-3xl"><span className="text-[#0E6F6A]">B</span>rand</h1>
                    <div className="flex gap-10 text-md">
                        <a href="">Features</a>
                        <a href="">About Us</a>
                        <a href="">Integrations</a>
                        <a href="">Careers</a>
                    </div>
                    <button className="bg-[#0E6F6A] px-5 py-2 rounded-2xl">Join Waitlist</button>
                </div>
            </header>
        </div>
    )
}

export default Header
