import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="text-primaryText mt-24 flex lg:flex-row flex-col gap-8 sm:gap-16 bg-primary rounded-lg  sm:p-12 p-6">
      <div className="min-w-fit min-h-fit">
        <Image
          src="/assets/dealer.jpg"
          width={500}
          height={400}
          alt="dealer"
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-between flex-col">
        <div>
          <h1 className="font-bold md:text-3xl sm:text-2xl text-xl md:leading-10 sm:leading-5">
            We make it easy for property buyers, tenants & landlords.
          </h1>
          <p className="text-secondaryText md:text-md xl:text-lg mt-1 md:mt-4 sm:mt-2 sm:text-md text-sm">
            Whether it is selling your current home, buying your next one or
            finding a rental property, we can help. We are a full-service estate
            agency, with local experts on hand to help you at every stage of
            your property journey.
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <Link href={{ pathname: "/properties", query: { type: "purchase" } }}>
            <button className="bg-blueText text-primaryText rounded-lg py-2 px-4 text-lg hover:opacity-50 font-semibold">
              Purchase
            </button>
          </Link>
          <Link
            href={{ pathname: "/properties", query: { type: "rent" } }}
            className="hover:opacity-75 bg-secondaryText text-primaryText rounded-lg"
          >
            <button className=" rounded-lg py-2 px-4 text-lg font-semibold">
              Rent
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
