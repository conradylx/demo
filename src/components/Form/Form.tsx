import { useState } from "react";
import { IForm } from "./IForm";
import { Formik, Form, Field, ErrorMessage } from "formik";

const MyForm = ({ definition }: IForm) => {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (values: Record<string, string | string[]>) => {
    try {
      const response = await fetch(definition.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitMessage("Form submitted successfully");
      } else {
        setSubmitMessage("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Error submitting form");
    }
  };

  const handleClear = () => {
    setSubmitMessage("Form has been cleared");
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        {definition.fields.map((field) => (
          <div key={field.name} style={{ flex: "1" }}>
            <label>{field.label}</label>
            {field.type === "NumericField" && (
              <Field
                type="number"
                name={field.name}
                style={{ width: "100%" }}
              />
            )}
            {field.type === "RegexValidatedField" && (
              <Field
                type="text"
                name={field.name}
                pattern={field.pattern}
                style={{ width: "100%" }}
              />
            )}
            {field.type === "MultiSelectField" && (
              <Field
                as="select"
                multiple
                name={field.name}
                style={{ width: "100%" }}
              >
                {field.choices.map((choice) => (
                  <option key={choice} value={choice}>
                    {choice}
                  </option>
                ))}
              </Field>
            )}
            <ErrorMessage name={field.name} component="div" />
          </div>
        ))}
        <div>
          <button type="submit" style={{ width: "20em", margin: ".25em 0" }}>
            Submit
          </button>
          <button type="reset" onClick={handleClear} style={{ width: "20em" }}>
            Clear
          </button>
        </div>
        {submitMessage && <div>{submitMessage}</div>}
      </Form>
    </Formik>
  );
};

export default MyForm;
