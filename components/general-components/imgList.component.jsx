const ImgList = ({ ImagesSrc, alt }) => {
  return (
    <>
      {Object.values(ImagesSrc).map((item, index) => {
        return <img src={item} alt={Array.isArray(alt) ? alt[index] : alt} />;
      })}
    </>
  );
};

export default ImgList;
