"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
const mdxComponents = {
    Image
}
const ReaderMdx = ({blog}) => {
    const MDXContent = useMDXComponent(blog.body.code)
    console.log(blog)
    console.log(MDXContent)
  return (
    <div className='col-span-8 font-in prose prose-lg max-w-max
     prose-blockquote:bg-accent/20 prose-blockquote:p-2 
     prose-blockquote:px-6 prose-blockquote:border-accent
      prose-blockquote:not-italic prose-blockquote:rounded-r-lg
       prose-li:marker:text-accent'>
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default ReaderMdx