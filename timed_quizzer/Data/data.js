var ans = new Array;
var done = new Array;
var score = 0;
ans[1] = "c";
ans[2] = "a";
ans[3] = "b";
ans[4] = "d";
ans[5] = "c";
ans[6] = "b";
ans[7] = "a";
ans[8] = "b";

function Engine(question, answer) {
if (answer != ans[question]) {
if (!done[question]) {
done[question] = -1;
alert("Wrong!\n\nYour score is now: " + score);
}
else {
alert("Chake phela! You have already answered this question!");
   }
}
else {
if (!done[question]) {
done[question] = -1;
score++;
alert("Correct!\n\nYour score is now: " + score);
}
else {		
alert("You have already answered this question...Move on");
      }
   }
}
	
function NextLevel () {
if (score > 8) {
alert("Cheater!");
}
if (score >= 6 && score <= 8) {
top.location.replace('data/Congrats.html')
}
else {
top.location.replace('data/Cheat.html')
   }
}