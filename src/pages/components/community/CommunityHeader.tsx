import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function CommunityHeader() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  // const communityId = router.query.communityId;
  const { data: communityPosts } =
    api.communities.getAllPostsRelatedToCommunity.useQuery(
      router.query.communityId as string
    );
  return (
    <div className="bg-[#333]">
      <img
        src={sessionData?.user.image || ""}
        className="mx-[20%] rounded-full"
      />
      <pre>{JSON.stringify(communityPosts, null, 2)}</pre>
    </div>
  );
}
