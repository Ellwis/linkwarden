import Image from "next/image";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import GitHubButton from "../GitHubButton";

export default function Showcase() {
  return (
    <>
      <div
        className="relative"
        style={{
          background:
            "radial-gradient(circle at center, #0C4A6E 0%, rgba(12, 74, 110, 0.00) 50%)",
        }}
      >
        <div className="z-10 max-w-5xl px-5 w-fit mx-auto xl:pt-52 lg:pt-40 md:pt-32 pt-24">
          <div className="py-2">
            <p className="lg:text-5xl sm:text-4xl text-3xl text-center font-bold relative z-10">
              Collect, Organize, and Preserve Webpages Featuring Seamless
              Collaboration
            </p>
          </div>
        </div>
        <p className="relative z-10 max-w-6xl p-5 mx-auto text-center text-slate-300 font-semibold">
          Linkwarden is a fully self-hostable, open-source collaborative
          bookmark manager to collect, organize and archive webpages.
        </p>
        <div className="relative z-10 flex justify-center gap-5">
          <PrimaryButton
            text="Start Free Trial"
            path="https://cloud.linkwarden.app/register"
          />
          <GitHubButton />
        </div>
        <div className="pt-10 pl-2 pr-2 pb-2 max-w-7xl mx-auto">
          <div className="pl-2 pr-2 pb-2 relative mx-auto">
            <Image
              src="./app/links.png"
              width={1920}
              height={922}
              alt=""
              className="relative z-10 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
