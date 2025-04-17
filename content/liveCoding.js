function areAnagrams(str1, str2) {
  const arrStr1 = str1.toLowerCase()
  const arrStr2 = str2.toLowerCase()
  let counter1 = {}
  for (let i = 0; i < arrStr1.length; i++) {
    const char = arrStr1[i];
    counter1[char] = (counter1[char] || 0) + 1;
  }
  let counter2 = {}
  for (let i = 0; i < arrStr2.length; i++) {
    const char = arrStr2[i];
    counter2[char] = (counter2[char] || 0) + 1;
  }
  if (Object.keys(counter1).length !== Object.keys(counter2).length) return false
  for (let key in counter1)  {
    if (counter1[key] !== counter2[key]) return false
  }
  return true
}
ч
console.log(areAnagrams('listen', 'silent')) 
console.log(areAnagrams('hello', 'world')) 
