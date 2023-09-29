import {CustomLink} from "@/shared/types";
import Link from "next/link";

const CustomLink = ({styles, link, icon, title, titleStyles}: CustomLink) => {
  return (
    <Link className={styles} href={link}>
      {icon} <h3 className={titleStyles}>{title}</h3>
    </Link>
  );
};
export default CustomLink;
