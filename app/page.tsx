export default function Home() {
  return (
    <div className="flex h-screen bg-[#ABFF00] pl-5">
      <div className="ml-10 w-1/2 pt-20">
        <div
          style={{ filter: "blur(1.5px)" }}
          className="mb-6 text-7xl text-black"
        >
          <p>brat themed debt tracker</p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <button
            style={{ filter: "blur(1px)" }}
            className="w-72 bg-black px-8 py-3 text-xl text-[#ABFF00]"
          >
            log in
          </button>
          <button
            style={{ filter: "blur(1px)" }}
            className="w-72 bg-black px-8 py-3 text-xl text-[#ABFF00]"
          >
            sign in
          </button>
        </div>
      </div>
      <div className="ml-40 w-1/2">
        <img
          src="/assets/charli.png"
          alt="Debt Tracker"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}
