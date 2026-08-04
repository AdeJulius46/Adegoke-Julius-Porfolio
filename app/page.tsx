import { Hero } from "@/components/home/hero";
import { WhatIDo } from "@/components/home/what-i-do";
import { SelectedWork } from "@/components/work/selected-work";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <div className="mt-10 sm:mt-14">
        <SelectedWork showViewAllLink />
      </div>
    </>
  );
}
