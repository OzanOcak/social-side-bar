import { useState } from "react";
import { FaLinkedin, FaShare, FaGithub, FaMicroblog } from "react-icons/fa";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { GrClose } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

function Social() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  {
    /* useEffect(() => {
    urls.forEach((url) => icons.push(url.replace(/.+\/\/|www.|\..+/g, "")));
  },[]);*/
  }
  return (
    <div className="relative flex items-center h-full">
      <div
        className={`absolute top-[47%] rounded-xl z-10  ${
          open ? "ml-[4.5rem] " : "ml-4"
        } transition-all hover:scale-125`}
        onClick={handleClick}
      >
        {!open ? <FaShare /> : <GrClose />}
      </div>
      <div
        className={`absolute  top-60 flex-1 ${
          open ? "w-[4rem] ml-0" : "w-[.20rem] ml-2 h-80"
        } backdrop-blur-xl bg-black/10 rounded-r-xl transition-all`}
      >
        {open && (
          <div className="flex-1">
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 rounded-full border border-gray-400 flex justify-center hover:scale-125 transition duration-500 ease-in-out ">
              <a href="https://www.linkedin.com/in/ozanocak/">
                <FaLinkedin />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 rounded-full border border-gray-400  flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <a href="https://github.com/OzanOcak">
                <FaGithub />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 rounded-full border border-gray-400  flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <a href="https://codesandbox.io/u/OzanOcak">
                <PiCodesandboxLogoDuotone />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 rounded-full border border-gray-400  flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <a href="https://ozanocak.github.io/">
                <FaMicroblog />
              </a>
            </div>
            <div className=" text-2xl m-3 my-5 p-2 py-.5 bg-gray-200 rounded-full border border-gray-400  flex justify-center hover:scale-125 transition duration-500 ease-in-out">
              <div
                onClick={() =>
                  (window.location.href = "mailto:yourmail@domain.com")
                }
              >
                <SiGmail />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Social;
