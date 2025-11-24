import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoFacebook } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-[lightseagreen] py-5">
                <div className="px-[1rem] grid grid-cols-5 mx-auto max-w-[60rem] text-white/80 max-[770px]:grid-cols-2 max-[400px]:grid-cols-1">
                    <h1 className="text-3xl"><span className="text-[#0E6F6A] font-extrabold">B</span>rand</h1>
                    <div className="flex flex-col gap-1 text-md">
                        <h1 className='font-bold text-[18px]'>Company</h1>
                        <a href="">Awards</a>
                        <a href="">Careers</a>
                        <a href="">Company</a>
                        <a href="">Contact</a>
                        <a href="">Method</a>
                        <a href="">Reviews</a>
                        <a href="">SEO Case Studies</a>
                    </div>

                    <div className="flex flex-col gap-1 text-md">
                        <h1 className='font-bold text-[18px]'>What We Do</h1>
                        <a href="">SEO Services</a>
                        <a href="">On-Page SEO</a>
                        <a href="">Keyword Research</a>
                        <a href="">Technical SEO</a>
                        <a href="">SEO Audit</a>
                        <a href="">Off-Page SEO</a>
                        <a href="">Link-Building</a>
                        <a href="">Multilocation SEO</a>
                        <a href="">Content Marketing</a>
                        <a href="">SEO Content Writing</a>
                        <a href="">Website Maintenance</a>
                    </div>

                    <div className="flex flex-col gap-1 text-md">
                        <h1 className='font-bold text-[18px]'>What We Serve</h1>
                        <a href="">B2B</a>
                        <a href="">Ecommerce</a>
                        <a href="">Enterprise</a>
                        <a href="">Finance</a>
                        <a href="">Healthcare</a>
                        <a href="">Higher Education</a>
                        <a href="">Insurance</a>
                        <a href="">Law Firm</a>
                        <a href="">Private Equity</a>
                        <a href="">SaaS</a>
                    </div>

                    <div className="flex flex-col gap-1 text-md">
                        <h1 className='font-bold text-[18px]'>Who We Are</h1>
                        <a href="">San Francisco SEO</a>
                        <a href="">Austin SEO Agency</a>
                        <a href="">Boston SEO Agency</a>
                        <a href="">Chicago SEO Agency</a>
                        <a href="">Denver SEO Agency</a>
                        <a href="">DC SEO Company</a>
                        <a href="">Los Angeles SEO Agency</a>
                        <a href="">New York City SEO Agency</a>
                        <a href="">Philadelphia SEO Company</a>
                        <a href="">Phoenix SEO Agency</a>
                        <a href="">Portland SEO Agency</a>
                        <a href="">San Deigo SEO Agency</a>
                        <a href="">Seattle SEO Agency</a>
                    </div>
                </div>
                <div className="max-w-[95%] h-[2px] bg-white mt-8 mx-auto"></div>

                {/* Adding social media handles */}

                <div className='w-[60rem] mx-auto pt-3 px-[1rem]'>
                    <h4>connect with us on our socials</h4>
                    <div className="flex gap-3 pt-1">
                        <IoLogoInstagram/>
                        <IoLogoYoutube/>
                        <IoLogoTwitter/>
                        <IoLogoFacebook/>
                    </div>

                </div>
        </div>
    )
}

export default Footer
