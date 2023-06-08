import { type NextPage } from "next";
import Head from "next/head";

import PostCreateCard from "./components/Posts/PostCreateCard";
import BlueitPremium from "./components/cards/BlueitPremium";
import QuickActions from "./components/cards/QuickActions";
import Posts from "./components/Posts/Posts";
import CommunitiesRecommendations from "./components/cards/CommunitiesRecommendations";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Blueit - Dive into anything</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen bg-black pb-[30000px] text-white">
        {/* <Header /> */}
        <div className="mx-auto flex w-full gap-4 md:max-w-[70%]">
          <div className="w-full md:w-[70%]">
            <PostCreateCard />
            <Posts />
          </div>
          <div className="hidden flex-1 md:block">
            <BlueitPremium />
            <QuickActions />
            <CommunitiesRecommendations />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
