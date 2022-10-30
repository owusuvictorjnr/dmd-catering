import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-DMD Catering" : "DMD Catering"}</title>
        <meta name="description" content="DMD Catering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 justify-between pt-5 px-4 shadow-xl bg-[#DF58AE]">
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">DMD Catering</a>
            </Link>

            <div className="">
              <ul className="flex justify-end items-end gap-5">
                <Link href="/">
                  <li className="">home </li>
                </Link>

                <Link href="/about">
                  <li>about </li>
                </Link>

                <Link href="/contact">
                  <li>contact</li>
                </Link>

                <Link href="/service">
                  <li>service</li>
                </Link>

                <Link href="/cart">
                  <li>cart</li>
                </Link>

                <Link href="/login">
                  <li>login</li>
                </Link>
              </ul>
            </div>
          </nav>
        </header>

        <main className="">{children}</main>

        <footer className="flex min-h-[20rem] h-12 shadow-inner bg-[#020601] text-[#ffffff]">
          <div className="flex flex-col justify-between">
            <div className="">
              <h2>leave a comment</h2>
              <form>
                <label>
                  <textarea></textarea>
                </label>
              </form>
              <button type="submit" className="primary-button ">
                Submit
              </button>
            </div>

            <div className="mb-4 ">
              <div className=" flex justify-center items-center ">
                <p> Copyright &copy; 2022 vitech solutions</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
