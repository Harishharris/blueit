import { BsReddit } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const { data: sessionData } = useSession();

  return (
    <nav className="flex flex-1 items-center justify-between bg-[#333] px-4 py-3 text-white">
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex cursor-pointer items-center gap-2">
          <BsReddit color="red" size={40} />
          <h3 className="hidden md:block">Blueit</h3>
        </div>
        <div className="flex items-center gap-4 outline-2 hover:outline">
          <HiHome size={30} />
        </div>
      </div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="mx-12 flex-1 rounded-full bg-[#555] px-4 py-2"
        placeholder="Search Blueit"
      />
      <div className="flex items-center gap-4 md:gap-8">
        {sessionData?.user ? (
          <div className="flex items-center gap-4 md:gap-8">
            <IoNotificationsOutline
              size={42}
              className="cursor-pointer rounded-full p-2 hover:bg-[#444]"
            />
            <img
              src={sessionData.user.image}
              className="h-9 w-9 cursor-pointer rounded-full"
            />
            <AiOutlinePlus
              size={42}
              className="cursor-pointer rounded-full p-2 hover:bg-[#444]"
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-blue-500 px-4 py-2"
            onClick={() => void signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
