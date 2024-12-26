import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href={`/categories/all`}
          className="inline-block font-medium text-accent underline underline-offset-2"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 mt-16 gap-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
