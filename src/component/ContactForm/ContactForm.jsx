import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { nanoid } from "nanoid";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short!")
    .max(50, "To long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "To short!")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Invalid phone number format, use XXX-XX-XX."
    ),
});

export default function ContactForm({ onAdd }) {
  const usernameFieldId = useId();
  const userNumberId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, action) => {
        console.log(values);
        onAdd({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
        action.resetForm();
      }}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={usernameFieldId}>Name</label>
          <Field type="text" name="name" id={usernameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={userNumberId}>Number</label>
          <Field pattern="[0-9-]*" name="number" id={userNumberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
