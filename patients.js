//Ready Data
var nameV, ageV, genderV, bloodgroupV, contactV, addressV, emailV, passwordV;

function Ready(){

nameV = document.getElementById('namebox').value;
ageV = document.getElementById('agebox').value;
genderV = document.getElementById('genderbox').value;
bloodgroupV = document.getElementById('bloodgroupbox').value;
contactV = document.getElementById('numberbox').value;
addressV = document.getElementById('addressbox').value;
emailV = document.getElementById('emailbox').value;
passwordV = document.getElementById('passwordbox').value;
                          
}

//Insert process

document.getElementById('insert').onclick = function(){
Ready();

//get user id here
// FirebaseUser currentUser = FirebaseAuth.getInstance().getCurrentUser();
// String uid = currentUser.getUid();

firebase.database().ref("User_Type").child(contactV).child("Type").setValue("Patient");
firebase.database().ref('Patient_Details/'+contactV).set({
Name: nameV,
Gender: genderV,
Blood_Group: bloodgroupV,
Contact_N0: contactV,
Address: addressV,
Email: emailV,
Password: passwordV,


});
window.alert("New Patient Record Added");
}

//select process

document.getElementById('select').onclick = function(){

Ready();
firebase.database().ref('Patient_Details/'+contactV).on('value', function(snapshot){
document.getElementById('namebox').value()= snapshot.val().NameofStudent;
document.getElementById('agebox').value()= snapshot.val().Gender;
document.getElementById('genderbox').value()= snapshot.val().RollNumber;
document.getElementById('bloodgroupbox').value()= snapshot.val().Section;
document.getElementById('numberbox').value()= snapshot.val().Section;
document.getElementById('addressbox').value()= snapshot.val().Section;
document.getElementById('emailbox').value()= snapshot.val().Section;
document.getElementById('passwordbox').value()= snapshot.val().Section;

});

}
//Update process

document.getElementById('update').onclick = function(){

Ready();
firebase.database().ref('student/'+contactV).update({
    Name: nameV,
    Gender: genderV,
    Blood_Group: bloodgroupV,
    Contact_N0: contactV,
    Address: addressV,
    Email: emailV,
    Password: passwordV,

});
window.alert("Patient Details Updated");
}
//Delete process

document.getElementById('delete').onclick = function(){

Ready();
firebase.database().ref('student/'+contactV).remove();
window.alert("Data Deleted");

}