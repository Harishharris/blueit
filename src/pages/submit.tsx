import CommunityDropDown from "./components/NewPost/CommunitiesDropDown";
import Form from "./components/NewPost/Form";
import Header from "./components/NewPost/Header";

export default function Submit() {
  return (
    <div className="mx-auto min-h-screen w-[70%] px-4 pt-10 text-white">
      <Header />
      <hr></hr>
      <CommunityDropDown />
      <Form />
    </div>
  );
}
