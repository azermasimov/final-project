const ProductImage = (props) => {
  return (
    <div>
      <ul
        style={{
          float: "right",
          listStyleType: "none",
          display: "block",
          margin: 0,
          padding: 0,
        }}
      >
        <li key={props.photo.urls} style={{ display: "inline" }}>
          <img
            src={props.photo.urls.regular}
            style={{ width: "90px", height: "100px" }}
            alt={props.photo.description}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProductImage;
