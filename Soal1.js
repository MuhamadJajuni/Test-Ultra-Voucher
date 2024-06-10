function groupAnagrams(strings) {
    const anagramGroups = {};
  
    for (let i = 0; i < strings.length; i++) {
      const str = strings[i];
      const sortedStr = sortString(str);
      if (!anagramGroups[sortedStr]) {
        anagramGroups[sortedStr] = [];
      }
      anagramGroups[sortedStr].push(str);
    }
    const result = [];
    for (const key in anagramGroups) {
      result.push(anagramGroups[key]);
    }
    return result;
  }
  function sortString(str) {
    return str.split('').sort().join('');
  }
  
// Contoh inputan
  const inputArray = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
  const groupedAnagrams = groupAnagrams(inputArray);
  console.log(groupedAnagrams);
  