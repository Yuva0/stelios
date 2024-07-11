export const getIncrementalGeneratedId = (() => {
  let number = 1;
  return () => {
    return number++;
  };
})();
