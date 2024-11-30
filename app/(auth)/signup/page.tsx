"use client";

import { User } from "@/utils/types/user";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

interface LoginFormProps extends User {
  password: string;
  retypedPassword: string;
}

const Signup = () => {
  const [userData, setUserData] = useState<LoginFormProps>({
    username: "",
    email: "",
    password: "",
    retypedPassword: "",
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

    if (
      !userData.email ||
      !userData.password ||
      !userData.retypedPassword ||
      !userData.username
    ) {
      setErrorMessage("incomplete fields");
      setLoading(false);
      return;
    }

    if (userData.password.length < 8) {
      setErrorMessage("password should be 8 characters long");
      setLoading(false);
      return;
    }

    if (userData.password != userData.retypedPassword) {
      setErrorMessage("password and retyped passwords don't match");
      setLoading(false);
      return;
    }

    setErrorMessage("");

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      setErrorMessage(errorMessage.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-primary-200">
      <h1 className="blur-[1px]">sign up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 bg-primary-300 p-8"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userData.username}
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

        <div className="flex flex-col">
          <label htmlFor="retypedPassword">Retype Password</label>
          <input
            type="password"
            id="retypedPassword"
            value={userData.retypedPassword}
            onChange={handleChange}
          />
        </div>

        <div className="text-red-700">{errorMessage}</div>

        <button disabled={loading}>Submit</button>
        <Link href="/login" className="blur">
          log in
        </Link>
      </form>
    </div>
  );
};

export default Signup;
