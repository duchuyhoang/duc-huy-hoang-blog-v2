import { useEffect, useMemo, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDataContext } from "@/context/DataContext";
import lunr from "lunr";
import { PostExtract } from "@/types/post";
import { debounce } from "@/utils/asynchronous";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import Typography from "../Typography";
import Link from "next/link";
import Avatar from "../Avatar";
interface SearchBackdropProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchBackdrop = ({ open, setOpen }: SearchBackdropProps) => {
  const [keyword, setKeyword] = useState("");
  const [filterPosts, setFilterPosts] = useState<PostExtract[]>([]);
  const { posts } = useDataContext();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<any>();

  const isSearched = useMemo(() => {
    return keyword.trim().length > 0;
  }, [keyword]);

  const index = useMemo(() => {
    return lunr(function (this) {
      this.field("tags", {
        boost: 4,
        extractor: (doc: any) => {
          return doc.metadata.tags;
        },
      });
      this.field("title", {
        boost: 3,
        extractor: (doc: any) => {
          return doc.metadata.title;
        },
      });
      this.field("description", {
        boost: 2,
        extractor: (doc: any) => {
          return doc.metadata.description;
        },
      });

      this.field("content");
      this.field("author", {
        extractor: (doc: any) => {
          return doc.metadata?.author?.name;
        },
      });
      this.ref("id");
      posts.forEach((post) => {
        this.add(post);
      });
    });
  }, [posts]);

  useEffect(() => {
    const inner = debounce(() => {
      const searchK = keyword.trim();
      if (!searchK) {
        setIsLoading(false);
        return setFilterPosts([]);
      }
      const searchResultsIds = index
        .search(`*${searchK}*`)
        .map((result) => result.ref);

      setFilterPosts(
        posts.filter((post) => searchResultsIds.includes(post.id))
      );

      setIsLoading(false);
    }, 500);
    inner();
    return () => {
      inner.clear();
    };
  }, [keyword, index]);

  useEffect(() => {
    const searchContainer = document.getElementById("search-container");
    if (open) {
      document.body.classList.add("scroll-lock");
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          searchContainer?.classList.add("!top-[20%]", "!visible");
          window.requestAnimationFrame(() => {
            inputRef.current.focus();
          });
        });
      }, 100);
    } else {
      document.body.classList.remove("scroll-lock");
      searchContainer?.classList.remove("!top-[20%]", "!visible");
      setFilterPosts([]);
      setKeyword("");
      setIsLoading(false);
    }
  }, [open]);

  return (
    <section
      className={twMerge(
        "justify-center fixed inset-0 z-[1000] hidden",
        open && "flex"
      )}
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      <div
        className={twMerge(
          "invisible flex flex-col h-max relative bg-white items-center p-4 box-border top-[25%] w-[512px] rounded-md"
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          transition: "all 0.2s ease-in-out",
        }}
        id="search-container"
      >
        <div className="flex w-full items-center">
          <div>
            {!keyword.trim() ? (
              <IoMdSearch className="size-[20px]" />
            ) : (
              <IoClose
                className="size-[20px] cursor-pointer"
                onClick={() => {
                  setKeyword("");
                  setFilterPosts([]);
                }}
              />
            )}
          </div>
          <input
            className="h-full w-[calc(100%_-_56px)] ml-[8px] outline-none pr-2"
            placeholder="Search posts, tags and authors"
            value={keyword}
            onChange={(e) => {
              setIsLoading(true);
              setKeyword(e.target.value);
            }}
            ref={inputRef}
          />

          <div className={twMerge("hidden", isLoading && "block")}>
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        </div>
        {isSearched && (
          <>
            {!isLoading && filterPosts.length === 0 ? (
              <Typography className="!text-gray-light w-full text-left pt-3 pl-[4px]">
                No matches found
              </Typography>
            ) : (
              <>
                <div className="h-[1px] w-[calc(100%_+_2rem)] mx-[-1rem] mt-4 border-b border-b-primary border-solid"></div>
                <section className="max-w-[calc(100%_+_2rem)] max-h-[300px] pt-2 flex flex-col overflow-auto">
                  {filterPosts.map((post) => (
                    <Link
                      href={`/post/${post.id}`}
                      key={post.id}
                      onClick={() => {
                        setKeyword("");
                        setOpen(false);
                      }}
                    >
                      <div className="px-2 py-1 flex flex-col hover:bg-gray-lighter">
                        <Typography className="text-lg !text-text-color font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                          {post.metadata.title}
                        </Typography>

                        <div className="flex items-center my-1">
                          <Avatar
                            src={post.metadata.author.avatar}
                            className="size-8"
                          />
                          <Typography className="font-semibold text-[0.875rem] ml-1 mt-1 !text-text-color">
                            {post.metadata.author.name} •{" "}
                            {post.metadata.minutesRead} min read
                          </Typography>
                        </div>

                        <Typography
                          className="mt-1 text-xs !text-gray-light overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {post.metadata.description}
                        </Typography>
                      </div>
                    </Link>
                  ))}
                </section>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchBackdrop;
