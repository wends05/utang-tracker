import Link from "next/link";
import React from "react";

const NotLoggedIn = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="blur">not logged in</h1>
      <Link href={"/"}>home</Link>
      <Link href={"login"}>login / signup</Link>
    </div>
  );
};

export default NotLoggedIn;
