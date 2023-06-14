import { api } from "~/utils/api";
import EachPost from "./EachPost";

export default function Posts() {
  const { data } = api.communities.getAllPosts.useQuery();
  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          className="w-full flex-1 hover:outline hover:outline-1"
        >
          <div className="mt-4 flex w-full border">
            <div className="bg-[#222]">
              <div>UP</div>
              <div>156</div>
              <div>Down</div>
            </div>
            <EachPost postId={item.id} />
            {/* <div key={item.id} className="flex flex-col gap-2">
              <div className="flex text-sm">
                <div>{item.communityId}</div>
                <div>{item.userId}</div>
              </div>
              <h1>{item.title}</h1>
              <div>{item.title}</div>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}
