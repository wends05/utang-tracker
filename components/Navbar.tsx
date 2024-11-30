"use client";

import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    const client = createClient();
    client.auth.signOut();
    router.replace("/login");
  };
  return (
    <div className="flex h-20 w-full items-center justify-between bg-primary-400 px-10">
      {/* Logo */}
      <div></div>

      <div>
        <button onClick={handleLogOut}>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
