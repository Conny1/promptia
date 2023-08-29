"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const [loggedIn, setloggedIn] = useState(false);
  const [providers, setproviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setproviders(response);
    };

    setProviders;
  }, []);
  return (
    <nav className="p-10 w-full flex justify-between ">
      <section className=" flex items-center gap-2  ">
        <Image
          src="/images/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="object-contain"
        />
        <p className="font-bold text-lg hidden sm:block "> Promptia</p>
      </section>
      {/* deskop screen */}
      <section>
        {loggedIn ? (
          <div>
            <button className="bg-black text-white rounded-full w-24  ">
              sign in
            </button>
          </div>
        ) : (
          <div className="hidden gap-2 sm:flex ">
            <button className="bg-black text-white  rounded-full w-24  outline outline-1 text-sm font-bold hover:bg-transparent hover:text-black ">
              Create post
            </button>

            <button className=" text-black rounded-full w-24  outline outline-1 text-sm font-bold hover:bg-black hover:text-white ">
              Sign out
            </button>

            <section className=" flex items-center gap-2 cursor-pointer ">
              <Image
                src="/images/logo.svg"
                width={20}
                height={20}
                alt="logo"
                className="object-contain"
              />
              <p className=" text-sm hidden sm:block "> profile</p>
            </section>
          </div>
        )}
      </section>

      {/* mobile screen */}

      <section className=" outline sm:hidden flex relative w-4/12  ">
        {loggedIn ? (
          <div>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    className="bg-black text-white rounded-full w-24  "
                    type="button"
                    key={provider.name}
                    onClick={() => {}}
                  >
                    sign in
                  </button>
                );
              })}
          </div>
        ) : (
          <div className=" gap-2 flex flex-col ">
            <button className="bg-black text-white  rounded-full w-24  outline outline-1 text-sm font-bold hover:bg-transparent hover:text-black ">
              Create post
            </button>

            <button className=" text-black rounded-full w-24  outline outline-1 text-sm font-bold hover:bg-black hover:text-white ">
              Sign out
            </button>

            <section className=" flex items-center gap-2 cursor-pointer ">
              <Image
                src="/images/logo.svg"
                width={20}
                height={20}
                alt="logo"
                className="object-contain"
              />
              <p className=" text-sm "> profile</p>
            </section>
          </div>
        )}
      </section>
    </nav>
  );
}
