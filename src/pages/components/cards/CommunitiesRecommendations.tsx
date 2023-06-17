import { api } from "~/utils/api";

export default function CommunitiesRecommendations() {
  const { data } = api.communities.getRecommendedCommunities.useQuery();
  return (
    <div className="mt-4 border">
      <h3 className="px-2">Recommendations: </h3>
      {data?.map(({ id, title, profileIamge }) => (
        <div key={id} className="flex items-center justify-between p-2">
          <img
            src={profileIamge ?? "@/../favicon.ico"}
            className="h-10 w-10 rounded-full hover:cursor-pointer"
          />
          <p>{title}</p>
          <button className="rounded-full bg-orange-500 px-6 py-1 text-center">
            Join
          </button>
        </div>
      ))}
    </div>
  );
}
