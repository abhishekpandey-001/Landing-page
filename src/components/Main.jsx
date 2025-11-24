import { BsFolderSymlinkFill } from "react-icons/bs";
import { BiSolidMessageAltCheck } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";

const Main = () => {
  return (
    <div className="max-w-[60rem] mx-auto mb-20">
        <div className="grid grid-cols-3 gap-15">
            <div className="flex flex-col px-5 py-8 bg-[#F5F7F7] rounded-3xl items-center">
                <BsFolderSymlinkFill className="text-6xl text-[#0E6F6A]"/>
                <h1 className="text-3xl font-semibold text-center">All Your Assets in One Place</h1>
                <p className="pt-2.5 pb-9 text-center">Upload, organize and manage your creative files effortlessly. No more scattered folders or lost versions. Keep everything together for your team.</p>
            </div>

                <div className="flex flex-col px-5 py-8 bg-[#F5F7F7] rounded-3xl items-center">
                <BiSolidMessageAltCheck className="text-6xl text-[#0E6F6A]"/>
                <h1 className="text-3xl font-semibold text-center">Review & Approve Faster</h1>
                <p className="pt-2.5 pb-9 text-center">Share assets with your team or clients, collect feedback instantly, and track every revision. Speed up your entire review cycle with clear, actionable comments.</p>
            </div>

                <div className="flex flex-col px-5 py-8 bg-[#F5F7F7] rounded-3xl items-center">
                <AiFillThunderbolt className="text-6xl text-[#0E6F6A]"/>
                <h1 className="text-3xl font-semibold text-center">Ship Creatives 10x Faster</h1>
                <p className="pt-2.5 pb-9 text-center">Upload, organize and manage your creative files effortlessly. No more scattered folders or lost versions. Keep everything together for your team.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Main
