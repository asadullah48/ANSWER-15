//Question 15: Changing Guest 
//List: One of your guests can't make it to the dinner, 
//so you need to send out a new set of invitations with a replacement guest.
let list: string [] = ["Ifraheem", "Mansoor", "Mohsin", "Sultan", "Usman", "Zakariyah"];
list .forEach(list =>{
    console.log(`Assalaam O Alikum ${list}, Kindly join me tonight for dinner`);
});
let unableToAttend = "Mohsin";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Kamal";
list[list.indexOf(unableToAttend)] = newGuest;
list.forEach(list => {
    console.log(`Assalaam O alikum ${list}, would you like to join me for dinner?`);
});