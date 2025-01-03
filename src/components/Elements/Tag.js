import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";
const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 rounded-full capitalize font-semibold border border-solid border-light hover:scale-105 transition-all ease duration-200 px-10 bg-dark text-light",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
