document.getElementById("output").style.visibility = "hidden";
/*hide the output id in the beginning*/
document.getElementById("lbsInput").addEventListener("input", function (e) {
  /*get the input of IbsInput and create a function */
  document.getElementById("output").style.visibility = "visible";
  /*show the result box to visible */
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = (lbs / 0.0022046).toFixed(0);
  /*turn lbs to gram*/
  document.getElementById("kgOutput").innerHTML = (lbs / 2.2046).toFixed(0);
  /*turn lbs to kilos*/
  document.getElementById("ozOutput").innerHTML = lbs * 16;
  /*turn lbs to oz*/
});



