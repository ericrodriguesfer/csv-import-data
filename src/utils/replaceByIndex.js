function replaceByIndex(string, index, replacement) {
  return (
    string.substr(0, index) +
    replacement +
    string.substr(index + replacement.length)
  );
}

export default replaceByIndex;
