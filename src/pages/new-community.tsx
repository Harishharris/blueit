import CreateCommunity from "./components/models/CreateCommunity";

export default function NewCommunity() {
  return (
    <div className="mx-auto min-h-screen max-w-[70%]">
      <h1 className="text-white">New Community Form</h1>
      <CreateCommunity />
    </div>
  );
}
