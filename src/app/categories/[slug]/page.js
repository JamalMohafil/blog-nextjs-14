import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GitHubSlugger,{ slug } from "github-slugger";
import Skeleton from "@mui/material/Skeleton";
const slugger = new GitHubSlugger();
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}
const CategoryPage = ({ params }) => {
  let allCategories = ["all"];
  let loading = true;
  const blogs = allBlogs.filter((blog) => {
    loading = true;
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });

    if (params.slug === "all") {
      loading = false;
      return true;
    }
    loading=false
    return blog.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <article className="mt-12 flex flex-col text-dark">
      <div className="px-32 flex flex-col ">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {loading === true
          ? // Display Skeleton components while loading
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="col-span-1 row-span-1 relative">
                <Skeleton variant="rectangular" width={'100%'} height={250} />
              </div>
            ))
          : // Display actual blog posts once loading is complete
            blogs.map((blog, index) => (
              <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree blog={blog} />
              </article>
            ))}
      </div>
    </article>
  );
};

export default CategoryPage;
