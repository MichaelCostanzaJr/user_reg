//creat a User constructor
function User(fname,lname,email,password,gender,phone,age,address,paymentmethod,favoritecolor){
    this.firstName=fname;
    this.lastName=lname;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.phone = phone;
    this.age = age;
    this.address = address;
    this.paymentMethod = paymentmethod;
    this.favoriteColor = favoritecolor;
}

function register(){
    let inputfName = $("#txtFirstName").val();
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPaymentMethod = $("#txtPaymentMethod").val();
    let inputFavortieColor = $("txtColor").val();

    let newUser = new User(inputfName,inputlName,inputEmail,inputPassword,inputAddress,inputPaymentMethod,inputFavortieColor);
}



function init(){
    console.log("Init function");

    let user1= new User("Michael", "Costanza", "Costanzamike86@gmail.com", "Test 123456")
    let user2= new User("Michael", "Costanza", "Costanzamike86@gmail.com", "Test 123456")

}

window.onload=init;
