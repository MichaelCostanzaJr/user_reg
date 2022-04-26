//selecting the txtEmail]
//let email=document.getElementById("txtEmail");
// #id, .class, tag
//jquery = $

//Selecting by ID
//let email=document.getElementById("txtEmail").value;
email=$("#txtEmail").val();
console.log(email);


//selecting by className
let formControl = document.getElementsByClassName("form-control");
for(let i=0;i<formControl.length;i++)

//let formControl = $(".form-control");

//selecting by tagName
//let inputs = document.getElementsByClassName("label");
//console.log(labels);
let labels = $("label");
console.log(labels);
