import clsx from "clsx";

interface ContainerProps {
  className?: string;
}
const Container = ({
  className,
  children,
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <section
      className={clsx(
        "max-w-full xl:max-w-[1200px] px-[20px] md:px-[40px] mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
