import { useSession } from "next-auth/react";
import Link from "next/link";

export default function PostCreateCard() {
  const { data: sessionData } = useSession();

  return (
    <div className="m-auto mb-2 flex items-center justify-between gap-4 rounded-sm bg-[#333] px-4 py-3">
      <img
        src={sessionData?.user.image}
        className="h-9 w-9 cursor-pointer rounded-full"
      />
      <Link href="/submit" className="flex w-[100%] flex-1">
        <input
          type="text"
          placeholder="Create Post"
          className="flex-1 bg-[#444] py-2 placeholder:pl-4 hover:bg-[#333] hover:outline hover:outline-1 focus:bg-[#333] focus:outline-1 focus:outline-white"
        />
      </Link>
      <div>I</div>
      <div>L</div>
    </div>
  );
}
