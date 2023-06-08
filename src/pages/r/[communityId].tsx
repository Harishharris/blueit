import { useRouter } from "next/router";
import CommunityHeader from "../components/community/CommunityHeader";

export default function SingleUser() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      <h1> hi there, {router.query.communityId}</h1>
      <CommunityHeader />
    </div>
  );
}
