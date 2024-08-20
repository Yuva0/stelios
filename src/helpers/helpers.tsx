export const hasPropertyChain : (props: any, chain: string[]) => boolean = (props, chain) => {
  return chain.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, props) !== undefined;
}

export const getIncrementalGeneratedId = (() => {
  let number = 1;
  return () => {
    return number++;
  };
})();
 