
export const renderError = (fromId, formName, value) => {
  const errorElement = document.querySelector(`#${fromId} .${formName}-error-message`);
  errorElement.classList.add('show');
  errorElement.textContent = value;
};

export const clearErrors = (fromId, fields) => {
  fields.forEach(field => {
    const errorElement = document.querySelector(`#${fromId} .${field}-error-message`);
    errorElement.classList.remove('show');
    errorElement.textContent = '';
  });
};
