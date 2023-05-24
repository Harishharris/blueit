export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="mb-4">Create a Post</h2>
      <button className="rounded-full px-3 py-2 hover:bg-[#333]">
        Drafts <span className="bg-[#333] px-1">0</span>
      </button>
    </div>
  );
}
