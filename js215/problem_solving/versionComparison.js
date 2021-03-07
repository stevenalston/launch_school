/*
PROBLEM:
Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character, we should return null.

up to 4 numbers are compared
leftmost numbers has the most significance

split the String according to period
compare by index

EXAMPLES:
compareVersions('4.5.1.0', '4.5.1.2') // -1
compareVersions('4.5.1.0', '4.5.0.2') // 1
compareVersions('4.5.1.a', '4.5.0.2') // Null
compareVersions('4.5.1.0', '4.5.1.0') // 0
compareVersions('4_5_1_0', '4_6_1_0') // Null

DATA:
  Input(s): String, String
  Output: Number or Null

  ALGORITHM
*/

function compareVersions(version1, version2) {
  // ...
}