# Move Zeroes
# ===================

# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Example:

# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:

# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

def moveZeros(nums): 
  z = []
  i = 0
  while i < len(nums):
    if nums[i] == 0:
      z.append(0)
      del nums[i]
    else: 
      i += 1
  nums.extend(z)  
  return nums

numbers = [0,1,0,3,12]
output = moveZeros(numbers) # Output: [1,3,12,0,0] 
print(output)