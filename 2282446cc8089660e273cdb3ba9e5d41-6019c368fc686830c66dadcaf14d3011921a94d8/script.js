
function getNewDate(){
  var date = new Date('1987-4-17'); // April 17th, 1987
  var submitValue = Number(document.querySelector(".input").value);
  date.setDate(date.getDate() + submitValue); document.querySelector(".newDate").innerText = date.toDateString();
}
document.querySelector(".submit").addEventListener("click", () => getNewDate());
