import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";
import Skeleton from "@mui/material/Skeleton";

const Category = ({ link = "#", name,active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 z-0 m-2 rounded-full capitalize font-semibold border border-solid border-dark hover:scale-105 transition-all ease duration-200 px-10",
        props.className,
        active ? "bg-dark index text-light" : "z-0 bg-light text-dark"
      )}
    
    >

      #{name}
    </Link>
  );
};

export default Category;
