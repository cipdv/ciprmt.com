import React from "react";
import Link from "next/link";
import { Suspense } from "react";

const UpcomingAppointments = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 mt-28 mb-28">
      <Suspense
        fallback={
          <div className="flex justify-center h-screen text-2xl mt-20">
            Loading...
          </div>
        }
      >
        <div className="flex items-center space-x-8">
          <div className="space-y-2 flex-grow">
            {" "}
            {/* Allow text container to grow as needed */}
            <div className="mb-4">
              <h1 className="text-3xl">
                You currently have no upcoming massage appointments scheduled.
              </h1>
            </div>
            <div className="space-y-5">
              <div>
                <Link href="/dashboard/patient/book-a-massage">
                  <button className="btn">Book a Massage</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default UpcomingAppointments;
