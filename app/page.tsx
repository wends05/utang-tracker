import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="/login"
            style={{ filter: "blur(1px)" }}
            className="w-72 bg-black px-8 py-3 text-xl text-primary-100"
          >
            log in
          </Link>
          <Link
            href="/signup"
            style={{ filter: "blur(1px)" }}
            className="w-72 bg-black px-8 py-3 text-xl text-primary-100"
          >
            sign in
          </Link>
        </div>
      </div>
      <div className="relative w-1/2">
        <Image
          src="/assets/charli.png"
          alt="Debt Tracker"
          className="h-max object-cover"
          fill
        />
      </div>
    </div>
  );
}
