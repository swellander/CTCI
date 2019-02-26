# 559. Maximum Depth of N-ary Tree

# Given a n-ary tree, find its maximum depth.

# The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# For example, given a 3-ary tree:

# We should return its max depth, which is 3.

 

# Note:

# The depth of the tree is at most 1000.
# The total number of nodes is at most 5000.

"""
# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
"""

from itertools import repeat
from tree import Tree

root = Tree(20)
root.children.append(Tree(25))
root.children.append(Tree(22))
child1 = Tree(33)
root.children.append(child1)
child2 = Tree(40)
child1.children.append(child2)

class Solution:
    def maxDepth(self, root: 'Node', depth = 1) -> int:
      if not root: 
        return 0
      if not root.children: # empty list is falsey
        return  depth
      else:
        return max(list(map(self.maxDepth, root.children, repeat(depth + 1))))


solution = Solution()
print(solution.maxDepth(root)) # 3