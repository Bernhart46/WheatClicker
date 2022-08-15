const capitalizeFirstLetter = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const formatNumber = (input: number) => {
  return input.toLocaleString(navigator.language);
};

export { capitalizeFirstLetter, formatNumber };
