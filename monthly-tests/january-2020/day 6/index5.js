var firstUniqChar = function(s) {
    var map= {};
      for (var i = 0; i < s.length; i++) {
          if (map[s[i]] === undefined) {
              map[s[i]] = 0;
          } 
          map[s[i]]++;
      }
      for (var i = 0; i < s.length; i++) {
          if (map[s[i]] === 1) {
              return i;
          }
      }
      return -1;  
  };
  console.log(firstUniqChar("codeling"));
  console.log(firstUniqChar("lovecodeling"));
