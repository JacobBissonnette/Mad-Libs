//Declaring variables
var sentence = [];//the sentence the person is righting
var index = 0; // allows for incrementing in while loop
var replacements = []; //the parts your replacing

filler(sentence,"Next Word:");//american wording for the word to replace
filler(replacements, "Next Position:");//american wording for the position

replace(sentence,replacements,"Part of speech for word in sentence to");//the three parts needed for the function
alert("Switch Positons");//telling people to switch positions

function filler(myArray,myPrompt){//chinese wording	for the variables
  index = -1;
do{
	index++;
	console.log(index);
   	myArray[index] = prompt(myPrompt+"["+index+"]=");	
}
while (myArray[index]!="^");
myArray.pop(); //gets rid of the ^ character at the end , we need this because the array counts it when its only supposed to end it.
console.log(myArray);
}

function replace(mySArray, myRarray, myPrompt){
	for (index = 0;index<myRarray.length;index++){
	mySArray[myRarray[index]]=prompt(myPrompt+"["+index+"]=");	
	}
	
	console.log(mySArray);
}

