"use client";

import { useEffect } from "react";

const customError = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <section>
      <div className="container mx-auto">
        <div className="page flex flex-col items-center justify-center">
          <h4 className="text-center font-semibold">{error.message}</h4>
          <button className="capitalize btn btn-m btn-prim" onClick={reset}>
            try again
          </button>
        </div>
      </div>
    </section>
  );
};

export default customError;
