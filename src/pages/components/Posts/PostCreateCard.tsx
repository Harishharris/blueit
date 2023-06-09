import { useSession } from "next-auth/react";
import Link from "next/link";
import { BiImageAdd } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import Image from "next/image";

export default function PostCreateCard() {
  const { data: sessionData } = useSession();

  return (
    <div className="m-auto mb-2 flex items-center justify-between gap-4 rounded-sm bg-[#333] px-4 py-3">
      <Image
        src={sessionData?.user.image || ""}
        className="h-9 w-9 cursor-pointer rounded-full "
        height={36}
        width={36}
        alt="Image"
      />
      <Link href="/submit" className="flex w-[100%] flex-1">
        <input
          type="text"
          placeholder="Create Post"
          className="flex-1 bg-[#444] py-2 placeholder:pl-4 hover:bg-[#333] hover:outline hover:outline-1 focus:bg-[#333] focus:outline-1 focus:outline-white"
        />
      </Link>
      <BiImageAdd size={42} className="rounded-full p-2 hover:bg-[#444]" />
      <BsLink45Deg size={42} className="rounded-full p-2 hover:bg-[#444]" />
    </div>
  );
}
