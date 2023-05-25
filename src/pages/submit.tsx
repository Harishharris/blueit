import { useState } from "react";
import CommunityDropDown from "./components/NewPost/CommunitiesDropDown";
import Form from "./components/NewPost/Form";
import Header from "./components/NewPost/Header";

export default function Submit() {
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handlePostSubmit() {
    //
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
        handlePostSubmit={handlePostSubmit}
      />
    </div>
  );
}
