            let firstItem = document.getElementById("firstQuestion");
			let secondItem = document.getElementById("question2");
			let thirdItem = document.getElementById("question3");
			let item1 = document.getElementById("item1");
			let item2 = document.getElementById("item2");
			let item3 = document.getElementById("item3");
			let item4 = document.getElementById("item4");
			let item5 = document.getElementById("item5");
			let item6 = document.getElementById("item6");
			let item7 = document.getElementById("item7");
			let item8 = document.getElementById("item8");
			let btn2 = document.getElementById("next2");
			let btn1 = document.getElementById("next");
			let score = document.getElementById("total1");
			let btn3 = document.getElementById("next3");
			let total = document.getElementById("score");
			let numberOfCorrect = 0;

			function nextItem1(){

				firstItem.style.animation = "slide 5s forwards";
				secondItem.style.animation = "slide2 5s forwards";
				secondItem.style.visibility = "visible";

			     btn1.style.visibility = "hidden";
			     btn2.style.visibility = "visible";
			}

			btn1.addEventListener("click", nextItem1);

			function nextItem2(){

				secondItem.style.animation = "slide4 5s forwards";
				thirdItem.style.animation = "slide3 5s forwards";
				thirdItem.style.visibility = "visible";

				btn2.style.visibility = "hidden";
				btn3.style.visibility = "visible";
			}

			btn2.addEventListener("click", nextItem2);

			function showTotal(){

				thirdItem.style.animation = "slide5 5s forwards";
				score.style.visibility = "visible";
				btn3.style.visibility = "hidden";
			}

			btn3.addEventListener("click", showTotal);

			function answer1(){

				if(item1){
					item1.style.background = "greenyellow";
					item2.style.background = "white";
					numberOfCorrect++;					
				} 

				total.innerHTML = numberOfCorrect;
			}

			function answer2(){

				if(item2){
					item2.style.background = "red";
					item1.style.background = "white";
				} 
			}

			function answer3(){
				if(item3){
					item3.style.background = "greenyellow";
					item4.style.background = "white";
					numberOfCorrect++;					
				}

				total.innerHTML = numberOfCorrect;
			}


			function answer4(){
				if(item4){
					item4.style.background = "red";
					item3.style.background = "white";
				}
			}

			function answer5(){
				if(item5){
					item5.style.background = "greenyellow";
					item6.style.background = "white";
					numberOfCorrect++;					
				}

				total.innerHTML = numberOfCorrect;
			}

			function answer6(){
				item6.style.background = "red";
				item5.style.background = "white";
			}

			item1.addEventListener("click", answer1);
			item2.addEventListener("click", answer2);
			item3.addEventListener("click", answer3);
			item4.addEventListener("click", answer4);
			item5.addEventListener("click", answer5);
			item6.addEventListener("click", answer6);