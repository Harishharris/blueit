import { useState } from "react";
import CommunityDropDown from "./components/NewPost/CommunitiesDropDown";
import Form from "./components/NewPost/Form";
import Header from "./components/NewPost/Header";
import { api } from "~/utils/api";

export default function Submit() {
  const [selectedCommunity, setSelectedCommunity] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string>("");
  console.log("file is uploaded thing", fileUrl);

  const postsMutation = api.communities.newPost.useMutation({});

  async function handlePostSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await postsMutation.mutateAsync({
      title,
      text,
      communityId: selectedCommunity,
      image: fileUrl,
    });
    console.log(res);
  }

  return (
    <div className="mx-auto min-h-screen w-[70%] px-4 pt-10 text-white">
      <Header />
      <hr></hr>
      <CommunityDropDown
        selectedCommunity={selectedCommunity}
        setSelectedCommunity={setSelectedCommunity}
      />
      <Form
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        // @ts-expect-error I don't know
        handlePostSubmit={handlePostSubmit}
        fileUrl={fileUrl}
        setFileUrl={setFileUrl}
      />
    </div>
  );
}
