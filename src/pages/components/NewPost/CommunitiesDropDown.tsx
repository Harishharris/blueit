import type { Dispatch, SetStateAction } from "react";
import { api } from "~/utils/api";

export default function CommunityDropDown({
  setSelectedCommunity,
}: {
  setSelectedCommunity: Dispatch<SetStateAction<string>>;
}) {
  const { data } = api.communities.getAllCommunities.useQuery();
  console.log(data?.map((item) => console.log(item.id)));
  return (
    <>
      <select
        className="mt-3 rounded-md bg-[#333] py-2 pr-36"
        onChange={(e) => void setSelectedCommunity(e.target.value)}
      >
        <option value={"Select Community"}>Select Community</option>
        {data?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
}
