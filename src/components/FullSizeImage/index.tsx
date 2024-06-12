/* eslint-disable @next/next/no-img-element */
type FullSizeImageProps = {} & JSX.IntrinsicElements["img"];

const FullSizeImage = ({ src, ...rest }: FullSizeImageProps) => {
  return (
    <div className="w-100" style={{ borderRadius: "5px", overflow: "hidden" }}>
      <img
        className="w-100"
        style={{ objectFit: "cover", borderRadius: "5px", overflow: "hidden" }}
        src={src}
        alt={"full-size-image"}
        {...rest}
      />
    </div>
  );
};

export default FullSizeImage;
