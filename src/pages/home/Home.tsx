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
      <h1 className="text-[12.8rem] font-extrabold">OPTIMISTIC CAFE</h1>
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
