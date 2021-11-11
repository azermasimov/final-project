const ProductImage = (props) => {
  return (
    <div>
      <img
        key={props.photo.id}
        src={props.photo.urls.regular}
        style={{ width: "90px", height: "100px" }}
        alt={props.photo.alt_description}
      />
    </div>
  );
};

export default ProductImage;
