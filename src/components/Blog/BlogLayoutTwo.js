import Link from 'next/link'
import Image from 'next/image'
import Tag from '../Elements/Tag'
import { format } from 'date-fns';
const truncateText = (text, maxWords) => {
    const words = text.split(' ');
  
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
  
    return text;
  };
const BlogLayoutTwo = ({blog}) => {
    const truncatedDescription = truncateText(blog?.description, 11);

  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark '>
        <Link href={blog.url} className='col-span-4 h-full rounded-xl overflow-hidden'>
        <Image
        src={blog?.image.filePath.replace("../public", "")}
        placeholder="blur"
        alt={blog?.title}
        width={blog.image.width}
        height={blog.image.height}
        blurDataURL={blog?.image.blurhashDataUrl}
        className="aspect-square w-full h-full object-cover object-center   group-hover:scale-105 transition-all ease duration-300"
      />
   
        </Link> 
        <div className="col-span-8 w-full">
        <span className='uppercase text-accent font-semibold text-sm'>{blog.tags[0]}</span>
        <Link href={`${blog?.url}`} className="inline-block my-1"> 
          <h2 className="font-semibold capitalize text-lg">
            <span
              className="
              bg-left-bottom bg-no-repeat transition-[background-size] duration-500
              bg-gradient-to-r from-accent to-accent 
              bg-[length:0px_3px] group-hover:bg-[length:100%_3px]"
            >
              {blog?.title}
            </span>
          </h2>
        </Link>
        <p className="block mt-2 text-l font-in ">
        {truncatedDescription}
        </p>
        <span className='capitalize text-dark/50 font-semibold text-base'>
            {format(new Date(blog.publishedAt),"MMMM dd, yyyy")}
        </span>
      </div>

    </div>
  )
}

export default BlogLayoutTwo
