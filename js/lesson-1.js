const sum = (x) => {
  const createAcc = (x, res) => {
    if (x == undefined) {
      return res;
    }
    res ? (res = res + x) : (res = x);
    return (x) => {
      return createAcc(x, res);
    };
  };
  return createAcc(x);
};
