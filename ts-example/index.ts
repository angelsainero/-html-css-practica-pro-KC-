interface Values {
  name: string;
  age: number;
}

const renderUserTemplate = (values: Values) => {
  return `Hola me llamo ${values.name} y tengo ${values.age}`;
};
