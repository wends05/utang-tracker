import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default async function Layout({ children }: { children: ReactNode }) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {children}
    </div>
  );
}
