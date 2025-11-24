import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div>
            <header className="bg-[lightseagreen] py-5 px-[1rem]">
                <div className="flex items-center justify-between mx-auto max-w-[60rem] text-white/80">
                    <h1 className="text-3xl"><span className="text-[#0E6F6A] font-extrabold">B</span>rand</h1>
                    <div className="max-[770px]:hidden flex gap-10 text-md">
                        <a href="">Features</a>
                        <a href="">About Us</a>
                        <a href="">Integrations</a>
                        <a href="">Careers</a>
                    </div>
                   <Button text="join waitlist"/>
                </div>
            </header>
        </div>
    )
}

export default Header
