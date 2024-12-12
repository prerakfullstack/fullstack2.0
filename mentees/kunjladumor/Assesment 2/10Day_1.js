{
  function volume(length) {
    return function (width) {
      return function (height) {
        return length * width * height;
      };
    };
  }

  const curriedVolume = volume(2)(3)(4); // Returns 24
  console.log(curriedVolume);
}
