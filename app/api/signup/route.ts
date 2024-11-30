import pool from "@/utils/db";
import { createClient } from "@/utils/supabase/server";
import { User } from "@/utils/types/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const supabaseClient = await createClient();
    const { email, password, username } = (await req.json()) as User & {
      password: string;
    };

    console.log({
      email,
      password,
      username,
    });

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName: username,
        },
      },
    });

    if (error) {
      console.log(error);
      throw Error(error.message, { cause: error.cause });
    }

    await pool.query(
      'INSERT INTO "Users"(email, username) VALUES ($1, $2) RETURNING *',
      [email, username],
    );

    return NextResponse.redirect("/login");
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
};
