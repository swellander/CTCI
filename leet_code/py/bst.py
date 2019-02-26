class BST:
  def __init__(self, value):
    self.val = value
    self.right = None
    self.left = None
    
  def insert(self, value):
    if value > self.val:
      if self.right: 
        self.right.insert(value)
      else:
        self.right = BST(value)
    else:
      if self.left: 
        self.left.insert(value)
      else:
        self.left = BST(value)