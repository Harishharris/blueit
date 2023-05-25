import { api } from "~/utils/api";

export default function CommunityDropDown({
  selectedCommunity,
  setSelectedCommunity,
}) {
  const { data } = api.communities.getAllCommunities.useQuery();
  return (
    <>
      <select
        className="mt-3 rounded-md bg-[#333] py-2 pr-36"
        onChange={(e) => void setSelectedCommunity(e.target.value)}
        defaultValue={selectedCommunity}
      >
        <option value={"Select Community"}>Select Community</option>
        {data?.map((item) => (
          <option key={item.id} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
}
