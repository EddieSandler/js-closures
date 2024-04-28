function curriedAdd(total) {


  if (total === undefined) return 0;
  return function Add(num) {
    if (num === undefined) return total;

    total += num;
    return Add;

  };

}

module.exports = { curriedAdd };
