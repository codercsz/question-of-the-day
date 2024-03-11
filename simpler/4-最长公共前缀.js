/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1：
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 示例 2：
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 */

const longestCommonPrefix = (strs) => {
  let res = ""
  if (!strs[0].length) return res
  let prefix = strs[0]
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== prefix[i]) return res
    }
    res += strs[0][i]
  }
  return res
}

console.log(longestCommonPrefix([""]), "**")






