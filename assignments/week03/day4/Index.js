//Write a Javascript function that takes an array and a value and search that value in the array.
var nam = ['rishav','sagar','sandeep','rohit','nsal'];

var searchArray = function(arrayName,vauleToSearch){
    var indexOfValue=arrayName.indexOf(vauleToSearch);
    return("The Position of the "+vauleToSearch+" in the ["+arrayName+"] array is: "+indexOfValue);
    
};

searchArray(nam,'nsal');