// import { useSession } from "next-auth/react";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from "next/image";

export default function PostHeader({ postId }: { postId: string }) {
  // const { data: sessionData } = useSession();
  const { data: eachPost } = api.communities.getSinglePost.useQuery(postId);
  const { data: user } = api.communities.getCorrespondingUser.useQuery(
    eachPost?.userId as string
  );
  console.log(eachPost);
  const { data: communityName } = api.communities.getCommunityName.useQuery(
    eachPost?.communityId as string
  );

  return (
    <div className="w-full">
      <div className="ml-2 mt-2 flex gap-4">
        <div className="cursor-pointer hover:underline">
          <Link href={`/r/${eachPost?.communityId ?? ""}`}>
            <Image
              src={communityName?.profileIamge || ""}
              className="h-4 w-4 rounded-full"
              alt="Image"
            />
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
      <div className="">
        <h1 className="ml-2 text-lg font-semibold">{eachPost?.title}</h1>
        <Image
          src={
            eachPost?.image ||
            "https://preview.redd.it/rhbrfkzuu26b1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=255352ba6449e647e0b2587627d174ff7c2014d8"
          }
          className="w-full object-contain"
          alt="Image"
        />
      </div>
      <div className="flex gap-4">
        <button>Comments</button>
        <button>Awards</button>
        <button>Share</button>
        <button>Save</button>
      </div>
    </div>
  );
}
