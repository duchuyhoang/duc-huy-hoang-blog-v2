import Typography from "@/components/Typography";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface IArticleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  id: string;
  title?: string;
  children: React.ReactNode;
}

interface IArticleTitle {
  id: string;
  title: string;
}

const ArticleTitle = ({ id, title }: IArticleTitle) => {
  return (
    <div className="flex items-center mb-2" title={title}>
      <Typography component="h5" className="text-[1.72rem] font-bold">
        <Link href={`#${id}`}>
          <FaLink
            size={"18px"}
            className="inline mr-2 dark:text-secondary-dark text-secondary rotate-[10deg] transition-all duration-500"
          />
        </Link>

        {title}
      </Typography>
    </div>
  );
};

const Article = ({
  title,
  id,
  children,
  className,
  ...rest
}: IArticleProps) => {
  const isSectionHaveTitle = !!title;
  return (
    <>
      <article
        title={title}
        id={id}
        className={twMerge("scroll-mt-[80px] my-4", className)}
        style={{
          scrollMarginTop: "80px",
          //   scrollMarginBlockStart: "100px",
        }}
      >
        {isSectionHaveTitle && <ArticleTitle id={id} title={title} />}

        {children}
      </article>
    </>
  );
};

export default Article;
