
	<!DOCTYPE html>

<html>		
<body>	
	
<script>			
//Creating fuctions								

// Function f1

function f10(){
	var val = document.getElementById('click');				
var x1 = Math.floor((Math.random() * 5) + 1);
var x2 = Math.floor((Math.random() * 5) + 1);
var x3 = Math.floor((Math.random() * 5) + 1);
var x4 = Math.floor((Math.random() * 5) + 1);
var x5 = Math.floor((Math.random() * 5) + 1);
var x6 = Math.floor((Math.random() * 5) + 1);
var x7 = Math.floor((Math.random() * 5) + 1);
var x8 = Math.floor((Math.random() * 5) + 1);


var a1 = [
"",
"Once upon a time", 
"In a land far far away",
"A long time ago", 
"In a small village", 
"In the middle of no where"
];								

var a2 = [
"",
", there was a group of children",
", there was a group of woman",
", there was a group of men",							
", there was a group of boys",
", there was a group of girls",
];														

var a3 = [
"",
". They were very powerful. </br>",
". They had extreme power. </br>",
". They mighty when together. </br>",							
". They could do amazing things. </br>",
". They had power like no other. </br>",
];															

var a4 = [
"",
"The group would travel around the world",
"The group would explore the depths of this world",
"They would travel in search of people to help",							
"The group traveled the seas ",
"They searched far and wide for people in need",
];											

var a5 = [
"",
". On their journey they would use there skills to help anyone in need. </br>",
". This quest was long and hard but they helped any one and everyone they came across. </br>",
". The path they chose was to change the world for the better. </br>",							
". This journey was to help others and made them grow as individuals. </br> ",
". They helped all around the world with smiles on there faces. </br>",
];							

var a6 = [
"",
"They recived nothing in return for their deeds",
"The only thing they recived out of helping others is knowing graditude",
"They never asked for anything in return for the help they provided ",							
"The people helped out of the kindness in their hearts",
"These were the kindess and most generous people alive",
];								

var a7 = [
"",
". Sadly in the end no one was there to help them. </br>",
". In the end no one was there in their time of need. </br>",
". They helped so many, yet no one was there to help them. </br>",							
". They could not survie from only giving. </br>",
". No one was there for them in the end tho. </br>",
];							

var a8 = [
"",
"They died at sea.",
"They died on the back lines of a battle field.",
"They died from a unknown illness.",							
"Their death was from a massive monster.",
"Their boat sank, then they drowned at sea.",
];								





							
document.getElementById("click").innerHTML = a1[x1] + a2[x2] + a3[x3] + a4[x4] + a5[x5] + a6[x6] + a7[x7] + a8[x8];						
}	
	
</script>
	<button onclick="f10()">Run</button>
	<p id="click"></p>			
</body>
			
</html>