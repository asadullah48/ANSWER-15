//Question 15: Changing Guest 
//List: One of your guests can't make it to the dinner, 
//so you need to send out a new set of invitations with a replacement guest.
var list = ["Ifraheem", "Mansoor", "Mohsin", "Sultan", "Usman", "Zakariyah"];
list.forEach(function (list) {
    console.log("Assalaam O Alikum ".concat(list, ", Kindly join me tonight for dinner"));
});
var unableToAttend = "Mohsin";
console.log("".concat(unableToAttend, " can't make it to dinner."));
var newGuest = "Kamal";
list[list.indexOf(unableToAttend)] = newGuest;
list.forEach(function (list) {
    console.log("Assalaam O alikum ".concat(list, ", would you like to join me for dinner?"));
});
