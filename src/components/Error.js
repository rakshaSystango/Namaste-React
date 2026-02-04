import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-danger sm:text-4xl">
          Oops!
        </h1>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Something went wrong.
        </p>
        <p className="mt-3 text-sm font-medium text-text">
          {err.status} : {err.statusText}
        </p>
        <button
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-danger px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:opacity-85"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
