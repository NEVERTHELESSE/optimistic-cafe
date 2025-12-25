import { lazy, Suspense } from "react";
import Hero from "./Hero";
const Connect = lazy(() => import("./Connect"));
const Further = lazy(() => import("./Further"));
const Feature = lazy(() => import("./Feature"));
const Training = lazy(() => import("./Training"));
const Technology = lazy(() => import("./Technology"));
const Advantage = lazy(() => import("./Advantage"));

export default function Home() {
  return (
    <main>
      <h1 className="text-[3.7rem] leading-14 sm:text-[6rem] md:text-[8rem] sm:leading-26 lg:leading-36 my-10 lg:text-[9rem] font-extrabold">
        OPTIMISTIC CAFE
      </h1>
      <Hero />
      <Suspense fallback="loading..">
        <Feature />
      </Suspense>
      <Suspense fallback="loading..">
        <Further />
        <Connect />
      </Suspense>
      <Suspense fallback="loading..">
        <Training />
      </Suspense>
      <Suspense fallback="loading..">
        <Technology />
      </Suspense>
      <Suspense fallback="loading..">
        <Advantage />
      </Suspense>
    </main>
  );
}
