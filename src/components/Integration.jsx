import adobe from "../icons/adobe.svg"
import drive from "../icons/drive.svg"
import figma from "../icons/figma.svg"
import notion from "../icons/notion.svg"
import slack from "../icons/slack.svg"
import trello from "../icons/trello.svg"

const Integration = () => {
  return (
    <div className="max-w-[60rem] mx-auto flex flex-col mb-20 px-1.5 gap-4">
      <h1 className="mx-auto text-4xl font-semibold max-[360px]:text-3xl px-1.5">Integrations</h1>
      <p className="mx-auto max-[360px]:text-sm px-2">Seamlessly connects with your workflow</p>

      <div className="flex flex-wrap justify-center gap-10 max-sm:gap-4 pt-6 pb-4 max-[250px]:text-sm">
        <img src={figma} alt="Adobe Logo" className="w-[2.5rem] h-[2.5rem] max-[260px]:w-8 max-[260px]:h-8 max-[220px]:w-7 max-[220px]:h-7" />
        <img src={adobe} alt="Adobe Logo" className="w-[2.5rem] h-[2.5rem] max-[260px]:w-8 max-[260px]:h-8 max-[220px]:w-7 max-[220px]:h-7" />
        <img src={slack} alt="Adobe Logo" className="w-[2.5rem] h-[2.5rem] max-[260px]:w-8 max-[260px]:h-8 max-[220px]:w-7 max-[220px]:h-7" />
        <img src={notion} alt="Adobe Logo" className="w-[2.5rem] h-[2.5rem] max-[260px]:w-8 max-[260px]:h-8 max-[220px]:w-7 max-[220px]:h-7" />
        <img src={drive} alt="Adobe Logo" className="w-[2.5rem] h-[2.5rem] max-[260px]:w-8 max-[260px]:h-8 max-[220px]:w-7 max-[220px]:h-7" />
        <img src={trello} alt="Adobe Logo" className="w-[2.5rem] h-[2.5rem] max-[260px]:w-8 max-[260px]:h-8 max-[220px]:w-7 max-[220px]:h-7" />
      </div>

      <button className="bg-[#0E6F6A] mx-auto px-5 py-2 rounded-2xl max-[500px]:text-[8px]">Get started</button>

    </div>
  )
}

export default Integration
