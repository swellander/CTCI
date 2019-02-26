# 28. Implement strStr()

# Implement strStr().

# Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

# Example 1:

# Input: haystack = "hello", needle = "ll"
# Output: 2
# Example 2:

# Input: haystack = "aaaaa", needle = "bba"
# Output: -1
# Clarification:

# What should we return when needle is an empty string? This is a great question to ask during an interview.

# For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

def strStr(haystack, needle):
  for j in range(len(haystack)):
    if haystack[j] == needle[0]:
      found = True
      for i in range(len(needle) -1): 
        if needle[i+1] != haystack[j + i + 1]:
          found = False
          break
      if found:
        return j
  return -1

input = 'hello'
output = strStr(input, 'll')
print(output) # Output: 2