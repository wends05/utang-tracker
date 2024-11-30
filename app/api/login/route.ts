import pool from "@/utils/db";
import { createClient } from "@/utils/supabase/server";
import { User } from "@/utils/types/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const supabaseClient = await createClient();
    const { email, password } = (await req.json()) as User & {
      password: string;
    };

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw Error(error.message);
    }

    const data = await pool.query('SELECT * FROM "Users" WHERE email = $1', [
      email,
    ]);

    return NextResponse.json({ message: data.rows[0] });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
};
