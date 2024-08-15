import Typography from "@/components/Typography";
import { POST_DETAIL_WRAPPER } from "@/constants";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface ContentLeaf {
  id: string;
  label: string;
}

type ContentTree = Tree<ContentLeaf>;

const TABLE_ID = "postContentTable";

const PostContentTable = () => {
  const [treeStructure, setTreeStructure] = useState<Array<ContentTree>>([]);

  useLayoutEffect(() => {
    const container = document.getElementById(POST_DETAIL_WRAPPER);

    const newTree: Array<ContentTree> = [];

    const makeTree = (
      container: HTMLElement,
      childrens: Array<ContentTree>
    ) => {
      const childs = container?.querySelectorAll("& > [id]");
      if (childs.length === 0) return;

      childs.forEach((child) => {
        const item = {
          data: {
            id: child.id,
            label: (child as any).title || child.id,
          },
          childrens: [],
        };
        childrens.push(item);
        makeTree(child as any, item.childrens);
      });
    };

    makeTree(container!, newTree);
    setTreeStructure(newTree);
  }, []);

  const renderTree = (item: ContentTree) => {
    const childrens = item.childrens || [];
    return (
      <ul className="ml-2" key={item.data.id}>
        <li className={twMerge("flex items-center mt-[0.5rem]")}>
          <Link
            href={`#${item.data.id}`}
            className="group/navigator flex items-center"
          >
            <MdOutlineArrowRight className="dark:text-secondary-dark text-secondary min-w-[20px] min-h-[20px]" />
            <Typography
              className="text-[0.875rem] font-medium group-hover/navigator:text-blue group-hover/navigator:font-bold"
              style={{}}
            >
              {item.data.label}
            </Typography>
          </Link>
        </li>
        {childrens.map((child) => (
          <>{renderTree(child)}</>
        ))}
      </ul>
    );
  };

  return (
    <section
      className="p-3 dark:bg-card-bg-dark bg-white rounded-[5px] flex flex-col sticky top-[10.5%]"
      id={TABLE_ID}
    >
      <Typography className="uppercase font-bold text-[0.8rem]">
        Table of Contents
      </Typography>
      {treeStructure.map((item) => (
        <>{renderTree(item)}</>
      ))}
    </section>
  );
};

export default PostContentTable;
