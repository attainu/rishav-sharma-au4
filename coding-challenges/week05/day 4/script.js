//hammingDistance !!!
var a="rishav"
  var b="rishab"
  count=0;
  if(a.length==b.length){
      for(var i=0;i<a.length;i++)
      {
          if(a[i]!=b[i])
          {
              count=count+1;
          }
      }
      console.log(count);
  }