import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short!")
    .max(50, "To long!")
    .required("Required"),
  number: ,
});

export default function ContactForm() {
  const usernameFieldId = useId();
  const userNumberId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={usernameFieldId}>Name</label>
          <Field type="text" name="name" id={usernameFieldId} />
        </div>

        <div>
          <label htmlFor={userNumberId}>Number</label>
          <Field pattern="[0-9-]*" name="number" id={userNumberId} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
