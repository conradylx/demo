interface NumericField {
  type: "NumericField";
  name: string;
  label: string;
  pattern: null;
  choices: null;
}

interface RegexValidatedField {
  type: "RegexValidatedField";
  name: string;
  label: string;
  pattern: string;
  choices: null;
}

interface MultiSelectField {
  type: "MultiSelectField";
  name: string;
  label: string;
  pattern: null;
  choices: string[];
}

type FormField = NumericField | RegexValidatedField | MultiSelectField;

export interface FormDefinition {
  url: string;
  fields: FormField[];
}

export interface IForm {
  definition: FormDefinition;
}
