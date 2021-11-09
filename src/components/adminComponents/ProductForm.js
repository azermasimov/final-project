import { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ProductForm extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <Field name="price" component={this.renderInput} label="Price" />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.title) {
    errors.title = "You must enter title";
  }
  if (!formValue.description) {
    errors.description = "You must enter description";
  }
  if (!formValue.price) {
    errors.price = "You must enter price for product";
  }

  return errors;
};

export default reduxForm({
  form: "productForm",
  validate,
})(ProductForm);
