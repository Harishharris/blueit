import Link from "next/link";
import { useState } from "react";
import CreateCommunity from "../models/CreateCommunity";

export default function QuickActions() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className=" top-0 mt-6 scroll-smooth border px-2 py-2">
      <div className="flex gap-4">
        <img src="jldfjldjfl" alt="Reddit" />
        <p>Home</p>
      </div>
      <p className="mb-2 text-[.95rem]">
        Your personal Reddit frontpage. Come here to check in with your favorite
        communities.
      </p>
      <hr></hr>
      <Link href="/submit">
        <button className="mt-4 w-full rounded-full bg-white py-1 text-center font-semibold text-black hover:opacity-80">
          Create Post
        </button>
      </Link>
      <Link href={"/new-community"}>
        <button
          className="mt-2 w-full rounded-full border py-1 text-center font-semibold hover:bg-[#222]"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          Create Community
        </button>
      </Link>
      {isOpened && <CreateCommunity />}
    </div>
  );
}
