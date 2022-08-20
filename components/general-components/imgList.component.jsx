const ImgList = ({ ImagesSrc, alt, parentContainer, parentContainerClass }) => {
  if (parentContainer && parentContainerClass) {
    const Container = `${parentContainer}`;

    return (
      <>
        {Object.values(ImagesSrc).map((item, index) => {
          return (
            <Container className={`${parentContainerClass}`}>
              <img
                key={index}
                src={item}
                alt={Array.isArray(alt) ? alt[index] : alt}
              />
            </Container>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {Object.values(ImagesSrc).map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt={Array.isArray(alt) ? alt[index] : alt}
            />
          );
        })}
      </>
    );
  }
};

export default ImgList;
