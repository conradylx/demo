import "./App.css";
import Form from "./components/Form/Form";
import { FormDefinition } from "./components/Form/IForm";

const definition: FormDefinition = {
  url: "form_url",
  fields: [
    {
      type: "NumericField",
      name: "number",
      label: "Number field",
      pattern: null,
      choices: null,
    },
    {
      type: "RegexValidatedField",
      name: "string",
      label: "Only lowercase letters and underscores field",
      pattern: "[a-z_]+",
      choices: null,
    },
    {
      type: "MultiSelectField",
      name: "selection",
      label: "Multiselect field",
      pattern: null,
      choices: ["Choice A", "Choice B", "Choice C"],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
      <Form definition={definition} />
    </div>
  );
}

export default App;
