function getNthFib(n) {
  // Write your code here.
  if (n == 1) return 0;
  if (n == 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

//0,1,1,2,3,5,7,12