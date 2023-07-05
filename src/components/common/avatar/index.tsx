interface IProps {
  imageUrl: string;
  altText?: string;
  size?: string;
}

export const Avatar = ({
  imageUrl,
  altText = "avatar",
  size = "35px",
}: IProps) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{
        borderRadius: "50%",
        width: size,
        height: size,
      }}
    />
  );
};
