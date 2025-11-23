import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className="max-w-[850px] text-center py-[8rem] mx-auto">
            <h1 className="text-7xl font-serif font-bold">The best way to <span className="bg-[#0E6F6A] rounded-2xl px-3">Review</span> creative assets</h1>
            <p className="py-3 text-[25px] max-w-[620px] mx-auto">Store, collaborate and share your marketing materials. Ship high-performing creatives 10x faster</p>
            <Button text="Subscribe Now" />
        </div>
    )
}

export default Hero
