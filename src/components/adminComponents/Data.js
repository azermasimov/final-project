import { Link } from "react-router-dom";

const Data = (props) => {
  return (
    <div>
      {" "}
      {props.product.map((el, i) => (
        <ul>
          <li key={i}>
            {el.title} - {el.description} - {el.price} ${" "}
            <Link to="/admin/edit">Edit</Link>{" "}
            <Link to="/admin/delete">Delete</Link>
          </li>
        </ul>
      ))}{" "}
      <br />
      <button>
        <Link to="/admin/create">Create Product</Link>
      </button>
    </div>
  );
};

export default Data;
