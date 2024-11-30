import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const supabaseClient = await createClient();
  const { user } = await supabaseClient.auth.getUser().then((res) => res.data);

  if (user) {
    redirect("/dashboard");
  }

  return <div>{children}</div>;
};

export default AuthLayout;
