import React, { use, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] => called every time btnNameReact is update
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnNameReact]);

const onlineStatus = useOnlineStatus();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <h1 className="flex items-center gap-3">
          <img
            alt="logo"
            src={LOGO_URL}
            className="h-10 w-10 rounded-lg object-cover shadow-sm sm:h-11 sm:w-11"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Namaste React
          </span>
        </h1>

        <nav>
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-muted sm:gap-x-6">
            <li className="hidden sm:block">
              <span className="font-medium text-text">Status:</span>{" "}
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </li>
            <li>
              <Link className="hover:text-text" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-text" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-text" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-text" to="/grocery">
                Grocery
              </Link>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-text hover:bg-bg"
                href="#"
              >
                🛒 Cart{" "}
                <span className="rounded-full bg-bg px-2 py-0.5 text-xs font-semibold text-muted">
                  0
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
                className="inline-flex items-center justify-center rounded-lg bg-text px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:opacity-85"
              >
                {btnNameReact}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
