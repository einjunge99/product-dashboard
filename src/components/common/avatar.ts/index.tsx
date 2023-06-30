interface IProps {
    imageUrl: string,
    altText?: string,
}

export const Avatar = ({ imageUrl, altText = 'avatar' }: IProps) => {
    return (
      <img
        src={imageUrl}
        alt={altText}
        style={{
          borderRadius: '50%',
          width: '35px',
          height: '35px',
        }}
      />
    );
  };