/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UploadButton } from "@uploadthing/react";
import { type OurFileRouter } from "~/server/uploadthing";
import type { Dispatch, SetStateAction } from "react";

type PageProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  handlePostSubmit: React.FormEvent<HTMLFormElement> & PageProps;
  setFileUrl: Dispatch<SetStateAction<string>>;
};

export default function Form({
  title,
  setTitle,
  text,
  setText,
  handlePostSubmit,
  setFileUrl,
}: PageProps) {
  return (
    <>
      <form className="mt-4" onSubmit={void handlePostSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg bg-[#333] py-2 placeholder:px-4"
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
          <button className="mr-4 rounded-full border px-2 py-1 hover:bg-[#222] ">
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
          console.log("Files: ", res);
          if (res && res[0] && res[0].fileUrl) {
            setFileUrl(res[0]?.fileUrl);
          } else {
            setFileUrl("");
          }
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  );
}
