import { useSession } from "next-auth/react";
import Link from "next/link";
import { api } from "~/utils/api";

export default function PostHeader({ postId }: { postId: string }) {
  const { data: sessionData } = useSession();
  const { data: eachPost } = api.communities.getSinglePost.useQuery(postId);
  const { data: user } = api.communities.getCorrespondingUser.useQuery(
    eachPost?.userId as string
  );
  const { data: communityName } = api.communities.getCommunityName.useQuery(
    eachPost?.communityId as string
  );

  return (
    <div className="w-full">
      <div className="flex gap-4">
        <div className="cursor-pointer hover:underline">
          <Link href={`/r/${eachPost?.communityId ?? ""}`}>
            {`r/${communityName?.title ?? ""}`}
          </Link>
        </div>
        <div>
          Posted by{" "}
          <span className="cursor-pointer hover:underline">
            u/ {user?.name}
          </span>{" "}
          10 hours ago
        </div>
      </div>
      <h2 className="font-semibold">{eachPost?.title}</h2>
      <img src={sessionData?.user.image as string} className="block w-auto" />
      <hr className="mt-2 block w-full"></hr>
      <div className="m-[0.1re] flex gap-4">
        <button className="px-2 py-2 hover:bg-[#333]">0 Comments</button>
        <button className="px-2 py-2 hover:bg-[#333]">Award</button>
        <button className="px-2 py-2 hover:bg-[#333]">Share</button>
        <button className="px-2 py-2 hover:bg-[#333]">Save</button>
      </div>
    </div>
  );
}
