import React, { lazy, Suspense } from "react";
import Image from "next/image";
import { allBlogs } from "@/.contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";

const FeaturedPosts = lazy(() => import("../components/Home/FeaturedPosts"));
const RecentPosts = lazy(() => import("../components/Home/RecentPosts"));

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedPosts blogs={allBlogs} />
        <RecentPosts blogs={allBlogs} />
      </Suspense>
    </main>
  );
}
