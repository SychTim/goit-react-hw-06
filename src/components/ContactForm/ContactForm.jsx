import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onSubmit }) {
  function handleSubmit(data, acts) {
    onSubmit(data);
    acts.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" className={css.message} />
        </div>
        <div className={css.container}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={css.message}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
