class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    if (val > this.val) {
      if (this.right) this.right.insert(val);
      else this.right = new BST(val);
    } else {
      if (this.left) this.left.insert(val);
      else this.left = new BST(val);
    }
  }
  traverse() {
    let queue = [this];
    let curr;
    while (queue.length) {
      curr = queue.shift();
      console.log(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
}

//Construct a BST with 128 random integers
// const vals = [];
// for (let i = 0; i < 50; i++) vals.push(Math.round(Math.random() * 128));
const nums = [4, 8, 11, 13, 4, 7, 2, 1];
const root = new BST(5);
for (num of nums) root.insert(num);

root.traverse();

module.exports = { root };
