const fn1 = () => {
  console.log("fn1");
  return Promise.resolve(1);
};

const fn2 = () =>
  new Promise((resolve) => {
    console.log("fn2");
    setTimeout(() => resolve(2), 5000);
  });

const fn3 = () =>
  new Promise((resolve) => {
    console.log("fn2");
    setTimeout(() => resolve(20), 5000);
  });

async function promiseReduce(asyncFunctions, reduce, initialValue) {
  for (const item of asyncFunctions) {
    try {
      const res = await item();
      initialValue = reduce(res, initialValue);
    } catch (err) {}
  }
  return initialValue;
}

promiseReduce(
  [fn1, fn2],
  function (memo, value) {
    console.log("reduce");
    return memo * value;
  },
  1
).then(console.log);
