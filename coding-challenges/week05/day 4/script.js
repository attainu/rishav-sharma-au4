var commonCharacters = function (str1,str2)
{
    var one = str.replace (/ /g,"");
    var two = str.replace (/ /g,"");
    for(var i=0;  i < one.length; i++){
        if(two.indexof(one[i]) !== -1 && result.indexof(one[i]) === -1){
            result.push(one[i]);
        }
    }
    return result.join("");
}