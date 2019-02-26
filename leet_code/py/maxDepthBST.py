# 104. Maximum Depth of Binary Tree

# Given a binary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Note: A leaf is a node with no children.

# Example:

# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7
# return its depth = 3.


def maxDepth(root, depth = 0):
  if not root: return 0
  if not root.left and not root.right:
    return depth
  elif root.left and root.right:
    return max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
  elif root.left:
    return maxDepth(root.left, depth + 1)
  else:
    return maxDepth(root.right, depth + 1)


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
    

root = BST(3)
root.insert(9)
root.insert(20)
root.insert(15)
root.insert(7)

output = maxDepth(root)
print(output) # 3
