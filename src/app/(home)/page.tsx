"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@src/app/(home)/HomePage"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <img src="/assets/icons/favicon.png" alt="Icon" className="size-32" />
    </div>
  ),
});

export default function Home() {
  return <HomePage />;
}
