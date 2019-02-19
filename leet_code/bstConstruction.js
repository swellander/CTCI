class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    //if value is greater than this.val
    if (value > this.value) {
      if (this.right) this.right.insert(value);
      else this.right = new BST(value);
    } else {
      if (this.left) this.left.insert(value);
      else this.left = new BST(value);
    }
    return this;
  }

  contains(value) {
    if (this.value === value) return true;
    if (value > this.value) {
      if (this.right) return this.right.contains(value);
      else return false;
    } else {
      if (this.left) return this.left.contains(value);
      else return false;
    }
  }

  remove(value) {
    if (value > this.value) {
      if (this.right) {
        if (this.right.value === value) {
          //remove node
          const newLeft = this.right.left;
          const newRight = this.right.right;
          //either of these could be null
          //if both truthy, set to newRight
          this.right = newRight || newLeft;
          //if both truthy
          if (newRight && newLeft) {
            //need to reinsert newLeft
            this.right.insert(newLeft);
          } //else: newRight is null and can be forgotten
        }
      }
    } else return this.left ? this.left.remove(value) : null;
    return this;
  }
}
