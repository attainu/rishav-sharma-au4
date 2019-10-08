var table = document.createElement("table");

table.style.border = "1px solid box";
table.style.width = "1500px";
table.style.borderSpacing = "20px"

table.classList.add("table", "table-striped");

document.body.appendChild(table);

for(var i = 1; i < 2; i++){
    var tr = document.createElement("tr");
    var th1 = document.createElement("th"); 
    var th2 = document.createElement("th"); 
    var text1 = document.createTextNode("Number");
    var text2 = document.createTextNode("Square");
    th1.appendChild(text1);
    th2.appendChild(text2);
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
}

for(var i = 1; i < 11; i++){
    var tr = document.createElement("tr");
    var th1 = document.createElement("th"); 
    var th2 = document.createElement("th"); 
    var text1 = document.createTextNode(i);
    var text2 = document.createTextNode(Math.pow(i,2));
    th1.appendChild(text1);
    th2.appendChild(text2);
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
}