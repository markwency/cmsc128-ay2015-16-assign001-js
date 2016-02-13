/*
Name: Mark Wency P. Yambao
Student Number: 2012-76554
Section: CMSC 128 AB-7L
*/

function numToWords(form){

	var holder = parseInt(form.num1.value);	//saves num1 to holder
	var input = parseInt(form.num1.value);	//saves num1 to input
	var output = ""; //variable that will contains all the words
	var quotient = "";
	var divisor = 1000000; //starting divisor is 1000000

	if(form.num1.value == ""){ //case if there is no given
		output = output + "Please provide a number! ";
		form.word1.value = output;
	}
	if(input==0){ //case if given is zero
		output = output + "zero ";
		form.word1.value = output;
	}
	
	
	while(input>0){
		quotient = Math.floor(input/divisor);
		if(quotient>0 && (divisor==10000 || divisor==10)){ //case if tens or thousands
			
			switch(quotient){ //switch case to determine the corresponding value in words
				case 1: 
					switch(Math.floor((input - (quotient*divisor))/(divisor/10))){
						//depending on case, add corresponding word to the output
						case 0:
							output = output + "ten ";
							break;
						case 1:
							output = output + "eleven ";
							break;
						case 2:
							output = output + "twelve ";
							break;
						case 3:
							output = output + "thirteen ";
							break;
						case 4:
							output = output + "fourteen ";
							break;
						case 5:
							output = output + "fifteen ";
							break;
						case 6:
							output = output + "sixteen ";
							break;
						case 7:
							output = output + "seventeen ";
							break;
						case 8:
							output = output + "eighteen ";
							break;
						case 9:
							output = output + "nineteen ";
							break;
					}
					//updates input
					input = input - (quotient*divisor);
					//updates the divisor
					divisor = divisor / 10;
					//case if the divisor is 1000, then adds the word thousand to the output
					if(divisor==1000){
						output = output + "thousand ";
					}
					break;
				case 2:
					output = output + "twenty ";
					break;
				case 3:
					output = output + "thirty ";
					break;
				case 4:
					output = output + "fourty ";
					break;
				case 5:
					output = output + "fifty ";
					break;
				case 6:
					output = output + "sixty ";
					break;
				case 7:
					output = output + "seventy ";
					break;
				case 8:
					output = output + "eighty ";
					break;
				case 9:
					output = output + "ninety ";
					break;
				
			}
			//to update the input
			input = input - (quotient*divisor); 
		}
		// if not tens or ten thousands
		else if(quotient>0){ 
		
			switch(quotient){
				//adds word to output depending on the quotient
				case 1:
					output = output + "one ";
					break;
				case 2:
					output = output + "two ";
					break;
				case 3:
					output = output + "three ";
					break;
				case 4:
					output = output + "four ";
					break;
				case 5:
					output = output + "five ";
					break;
				case 6:
					output = output + "six ";
					break;
				case 7:
					output = output + "seven ";
					break;
				case 8:
					output = output + "eight ";
					break;
				case 9:
					output = output + "nine ";
					break;
				
			}
			//to update the input
			input = input - (quotient*divisor); 
			if(divisor==1000000){	//if divisor is equal to 1000000 then add million to output
				output = output + "million "; 
			}else if(divisor==100000 && (holder == 1100000 || holder == 1200000 || holder == 1300000 || holder == 1400000 || holder == 1500000 || holder == 1600000 || holder == 1700000 || holder == 1800000 || holder == 1900000 || holder == 100000 || holder == 200000 || holder == 300000 || holder == 400000 || holder == 500000 || holder == 600000 || holder == 700000 || holder == 800000 || holder == 900000)){
				output = output + "hundred thousand ";
			}else if(divisor==100000 && (holder != 1100000 || holder != 1200000 || holder != 1300000 || holder != 1400000 || holder != 1500000 || holder != 1600000 || holder != 1700000 || holder != 1800000 || holder != 1900000 || holder != 100000 || holder != 200000 || holder != 300000 || holder != 400000 || holder != 500000 || holder != 600000 || holder != 700000 || holder != 800000 || holder != 900000)){
				output = output + "hundred ";
			}else if(divisor==1000){//if divisor is equal to 1000 then add thousand to output
				output = output + "thousand ";
			}else if(divisor==100){//if divisor is equal to 100 then add hundred to output
				output = output + "hundred ";
			}else{ 
				output = output +" ";
			}
		}
		//removes one zero from the divisor
		divisor = divisor/10;
	}
	//updates word1 from the form
	form.word1.value = output;
}

function wordsToNum(form){

	var a = form.word2.value;
	//splits the word from the form and put it into an array
	var input = a.split(" ");
	var output = 0;
	var i;
	//accumulates all the number
	var acc = 0;
	
	if(input[0]=="zero" && input.length==1){ //special case of zero
		output = 0;
		form.num2.value = output;
	}
	
	for(i=0; i<input.length; i++){
		//identify corresponding numbers depending on the current index in the array
		switch(input[i]){ 
			case "one":
				acc = 1;
				break;
			case "two":
				acc = 2;
				break;
			case "three":
				acc = 3;
				break;
			case "four":
				acc = 4;
				break;
			case "five":
				acc = 5;
				break
			case "six":
				acc = 6;
				break;
			case "seven":
				acc = 7;
				break;
			case "eight":
				acc = 8;
				break;
			case "nine":
				acc = 9;
				break;
			case "ten":
				acc = 10;
				break;
			case "eleven":
				acc = 11;
				break;
			case "twelve":
				acc = 12;
				break;
			case "thirteen":
				acc = 13;
				break;
			case "fourteen":
				acc = 14;
				break;
			case "fifteen":
				acc = 15;
				break;
			case "sixteen":
				acc = 16;
				break;
			case "seventeen":
				acc = 17;
				break;
			case "eighteen":
				acc = 18;
				break;
			case "nineteen":
				acc = 19;
				break;
			//checks if the next two index has thousand, if yes then multiplies acc with 1000
			case "twenty":
				acc = 20;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "thirty":
				acc = 30;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "fourty":
				acc = 40;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "fifty":
				acc = 50;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "sixty":
				acc = 60;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "seventy":
				acc = 70;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "eighty":
				acc = 80;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "ninety":
				acc = 90;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			default:
				acc = 0;
		}
		
		//adjusts i depending on the next index's unit
		if(i+1<input.length){ 
			switch(input[i+1]){
				case "million":
					acc = acc * 1000000;
					i++;
					break;
				case "hundred":
					//checks if the hundred has "thousand" on the following index
					if(i+2 < input.length && (input[i+2] == "thousand" || input[i+3] == "thousand") || input[i+4] == "thousand"){
						acc = acc * 100000;
						i++;
					}else{//if there is no thousand, then multiple hundred
						acc = acc * 100;
						i++;
					}
					break;
				case "thousand":
					//if thousand then multiply by thousand
					acc = acc * 1000;
					i++;
					break;
			}
		}
		//updates output
		output = output + acc;
	}
	//updates num2 from form
	form.num2.value = output;
}

function wordsToCurrency(form){
	
	//basically the same as words to num but has currency
	
	var chosen = form.curr.value;
	var a = form.word3.value;
	//splits the word from the form and put it into an array
	var input = a.split(" ");
	var output = 0;
	var i;
	//accumulates all the number
	var acc = 0;
	
	if(input[0]=="zero" && input.length==1){ //special case of zero
		output = 0;
		form.num2.value = output;
	}
	
	for(i=0; i<input.length; i++){
		//identify corresponding numbers depending on the current index in the array
		switch(input[i]){ 
			case "one":
				acc = 1;
				break;
			case "two":
				acc = 2;
				break;
			case "three":
				acc = 3;
				break;
			case "four":
				acc = 4;
				break;
			case "five":
				acc = 5;
				break
			case "six":
				acc = 6;
				break;
			case "seven":
				acc = 7;
				break;
			case "eight":
				acc = 8;
				break;
			case "nine":
				acc = 9;
				break;
			case "ten":
				acc = 10;
				break;
			case "eleven":
				acc = 11;
				break;
			case "twelve":
				acc = 12;
				break;
			case "thirteen":
				acc = 13;
				break;
			case "fourteen":
				acc = 14;
				break;
			case "fifteen":
				acc = 15;
				break;
			case "sixteen":
				acc = 16;
				break;
			case "seventeen":
				acc = 17;
				break;
			case "eighteen":
				acc = 18;
				break;
			case "nineteen":
				acc = 19;
				break;
			//checks if the next two index has thousand, if yes then multiplies acc with 1000
			case "twenty":
				acc = 20;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "thirty":
				acc = 30;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "fourty":
				acc = 40;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "fifty":
				acc = 50;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "sixty":
				acc = 60;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "seventy":
				acc = 70;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "eighty":
				acc = 80;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			case "ninety":
				acc = 90;
				if(input[i+2]=="thousand")
					acc = acc*1000;
				break;
			default:
				acc = 0;
		}
		
		//adjusts i depending on the next index's unit
		if(i+1<input.length){ 
			switch(input[i+1]){
				case "million":
					acc = acc * 1000000;
					i++;
					break;
				case "hundred":
					//checks if the hundred has "thousand" on the following index
					if(i+2 < input.length && (input[i+2] == "thousand" || input[i+3] == "thousand") || input[i+4] == "thousand"){
						acc = acc * 100000;
						i++;
					}else{//if there is no thousand, then multiple hundred
						acc = acc * 100;
						i++;
					}
					break;
				case "thousand":
					//if thousand then multiply by thousand
					acc = acc * 1000;
					i++;
					break;
			}
		}
		//updates output
		output = output + acc;
	}
	//updates currency from form by concat chosen curr and output
	form.currency.value = chosen + output;
}

function numberDelimited(form){

	var x = form.num4.value;
	var delimiter = form.delimiter.value;
	var jump = form.jump.value;
	//splits x which has the value of num4
	var num = x.toString().split("");
	//length of the array minus 1
	var y = num.length - 1;
	var z = 1;
	//collects all the outputs
	var output = "";
	
	//moves from the array, right to left
	while (y>-1){
		if (y != 0 && z%jump == 0){//if already in the jump
			output = delimiter + num[y] + output;
		}else{
			output = num[y] + output;
		}
		//update y and z
		y--;
		z++;
	}
	//updates the delimited from the form
	form.delimited.value = output;
	
}