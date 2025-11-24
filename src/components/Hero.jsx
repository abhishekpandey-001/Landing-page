import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <div className="max-w-[850px] text-center py-[6rem] mx-auto px-0.5">
            <h1 className="max-[500px]:text-4xl text-7xl font-serif font-bold">The best way to <span className="bg-[#0E6F6A] rounded-2xl px-3 max-[500px]:text-3xl">Review</span> creative assets</h1>
            <p className="py-3 px-1 text-[25px] max-w-[620px] mx-auto max-[500px]:text-[16px]">Store, collaborate and share your marketing materials. Ship high-performing creatives 10x faster</p>
            <Button text="Subscribe Now" />
        </div>
    )
}

export default Hero
