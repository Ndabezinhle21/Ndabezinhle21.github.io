//Ready Data
var nameV, genV, rollV, secV;

function Ready(){

nameV = document.getElementById('namebox').value;
genV = document.getElementById('genbox').value;
rollV = document.getElementById('rollbox').value;
secV = document.getElementById('secbox').value;
}

//Insert process

document.getElementById('insert').onclick = function(){

Ready();
firebase.database().ref('student/'+rollV).set({
NameofStudent: nameV,
Section: secV,
RollNumber: rollV,
Gender: genV,

});
window.alert("Data Set");
}

//select process

document.getElementById('select').onclick = function(){

Ready();
firebase.database().ref('student/'+rollV).on('value', function(snapshot){
document.getElementById('namebox').value()= snapshot.val().NameofStudent;
document.getElementById('genbox').value()= snapshot.val().Gender;
document.getElementById('rollbox').value()= snapshot.val().RollNumber;
document.getElementById('secbox').value()= snapshot.val().Section;

});

}
//Update process

document.getElementById('update').onclick = function(){

Ready();
firebase.database().ref('student/'+rollV).update({
NameofStudent: nameV,
Section: secV,
Gender: genV,

});
window.alert("Data Updated");
}
//Delete process

document.getElementById('delete').onclick = function(){

Ready();
firebase.database().ref('student/'+rollV).remove();
window.alert("Data Deleted");

}