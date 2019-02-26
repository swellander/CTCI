function isPalindrome(string) {
  //if one or less char, return true;
  if (string.length < 2) return true;
  //if first char and last char do not match, return false
  if (string[0] !== string[string.length - 1]) return false;
  //return recurse call on string with front and back cut off
  return isPalindrome(string.slice(1, -1));
}
