import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import { OurFileRouter } from "~/server/uploadthing";
import { api } from "~/utils/api";

export default function CreateCommunity() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const communities = api.communities.create.useMutation();
  const [fileUrl, setFileUrl] = useState();
  console.log("file is uploaded thing", fileUrl);

  function handleCommunityCreation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = communities.mutate({
      title,
      subTitle,
      description: text,
      communityImage: fileUrl || "",
    });
    console.log(data);
  }

  return (
    <div className="">
      <h1>Community Form</h1>
      <form className="mt-4" onSubmit={handleCommunityCreation}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg bg-[#333] py-2 placeholder:px-4"
          placeholder="Title"
        />
        <input
          type="text"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          className="mt-4 w-full rounded-lg bg-[#333] py-2 placeholder:px-4"
          placeholder="Title"
        />
        <br></br>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-4 w-full rounded-lg bg-[#333] py-2 placeholder:px-4"
          placeholder="Text (optional)"
        />
        <div className="float-right mt-4">
          <button className="mr-4 rounded-full border px-2 py-1 text-white hover:bg-[#222]">
            Save Drafts
          </button>
          <button className="text-semibold rounded-full bg-white px-2 py-1 font-semibold text-black">
            Post
          </button>
        </div>
      </form>
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setFileUrl(res[0]?.fileUrl);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
