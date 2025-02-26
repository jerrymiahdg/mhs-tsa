import { ArrowRight } from "lucide-react";

const Resources = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full p-10">
        <div className="py-20 flex flex-col gap-10 w-[50%]">
          <p className="text-5xl italic">Resources</p>
          <ul className="list-disc text-2xl flex flex-col gap-5">
            <li>
              <a className="underline">Resource #N</a>
            </li>
            <li>
              <a className="underline">Resource #N</a>
            </li>
            <li>
              <a className="underline">Resource #N</a>
            </li>
            <li>
              <a className="underline">Resource #N</a>
            </li>
          </ul>
        </div>
        <div className="py-20 flex flex-col gap-10 w-[50%]">
          <p className="text-5xl italic">Contact</p>
          <ul className="list-disc text-2xl flex flex-col gap-5">
            <li>
              <a className="underline">Contact #N</a>
            </li>
            <li>
              <a className="underline">Contact #N</a>
            </li>
            <li>
              <a className="underline">Contact #N</a>
            </li>
            <li>
              <a className="underline">Contact #N</a>
            </li>
          </ul>
        </div>
        <div className=" flex items-center gap-20 justify-center h-[75vh] font-josefin-sans">
          <div className="text-7xl">Join Today</div> <ArrowRight size={75} />
          <a href="https://lego.com" target="_blank">
            <button className="cursor-pointer bg-blue-300 text-blue-800 py-5 px-20 rounded-full text-3xl">
              Join
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
