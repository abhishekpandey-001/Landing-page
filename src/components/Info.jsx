import { IoMdCloudUpload } from "react-icons/io";
import { IoChatbubblesSharp, IoCheckmarkDoneCircle } from "react-icons/io5";

const Info = () => {
  return (
    <div className='max-w-[60rem] mx-auto mb-20 px-[1.5rem]'>
         <div className="grid grid-cols-3 gap-10 max-[730px]:grid-cols-2 max-[500px]:grid-cols-1">
                    <div className="flex flex-col py-8 bg-[#F5F7F7] rounded-3xl items-center">
                        <IoMdCloudUpload className="text-5xl text-[#0E6F6A] max-[500px]:text-3xl"/>
                        <h1 className="text-3xl font-semibold text-center max-[500px]:text-xl">All Your Assets in One Place</h1>
                        <p className="pt-2.5 text-center mb-1 px-6">Upload, organize and manage your creative files effortlessly. No more scattered folders or lost versions. Keep everything together for your team.</p>
                    </div>
        
                        <div className="flex flex-col py-8 bg-[#F5F7F7] rounded-3xl items-center">
                        <IoChatbubblesSharp className="text-5xl text-[#0E6F6A] max-[500px]:text-3xl"/>
                        <h1 className="text-3xl font-semibold text-center max-[500px]:text-xl">Review & Approve Faster</h1>
                        <p className="pt-2.5 text-center mb-1 px-6 max-[500px]:text-sm">Share assets with your team or clients, collect feedback instantly, and track every revision. Speed up your entire review cycle with clear, actionable comments.</p>
                    </div>
        
                        <div className="flex flex-col py-8 bg-[#F5F7F7] rounded-3xl items-center">
                        <IoCheckmarkDoneCircle className="text-5xl text-[#0E6F6A] max-[500px]:text-3xl"/>
                        <h1 className="text-3xl font-semibold text-center max-[500px]:text-xl">Ship Creatives 10x Faster</h1>
                        <p className="pt-2.5 text-center mb-1 px-6 max-[500px]:text-sm">Upload, organize and manage your creative files effortlessly. No more scattered folders or lost versions. Keep everything together for your team.</p>
                    </div>
                    
                </div>
    </div>
  )
}

export default Info