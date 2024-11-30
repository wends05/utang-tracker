"use client";

import { UserContext } from "@/app/providers";
import { User } from "@/utils/types/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

interface loginFormProps {
  email: string;
  password: string;
}

const Login = () => {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const [userData, setUserData] = useState<loginFormProps>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log(userData);

    if (!userData.email || !userData.password) {
      setErrorMessage("incomplete fields");
      setLoading(false);
      return;
    }

    setErrorMessage("");

    const response = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      setLoading(false);
      const errorMessage = await response.json();
      setErrorMessage(errorMessage.message);
      return;
    }
    const dbUser = (await response.json()) as User;
    setUser(dbUser);
    router.replace("/dashboard");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-primary-200">
      <h1 className="blur-[1px]">log in</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 bg-primary-300 p-8"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <div className="text-red-700">{errorMessage}</div>

        <button disabled={loading}>Submit</button>
        <Link href={"/signup"} className="blur-sm">
          sign up
        </Link>
      </form>
    </div>
  );
};

export default Login;
