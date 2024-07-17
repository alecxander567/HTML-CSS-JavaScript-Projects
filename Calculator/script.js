           	 	let userInput1 = document.getElementById("input1");
			let iserInput2 = document.getElementById("input2");

			const addition = document.getElementById("plus");
			const subtraction = document.getElementById("minus");
			const multiplication = document.getElementById("multiply");
			const division = document.getElementById("divide");

			let calc = document.getElementById("equals");
			let del = document.getElementById("clear");
			let total = document.getElementById("result");

			function calcu1(){
				equals = parseFloat(input1.value) + parseFloat(input2.value);
				addition.style.border = "2px solid orange";
			}

			function calcu2(){
				equals = parseFloat(input1.value) - parseFloat(input2.value);
				minus.style.border = "2px solid orange";
			}

			function calcu3(){
				equals = parseFloat(input1.value) * parseFloat(input2.value);
				multiply.style.border = "2px solid orange";
			}

			function calcu4(){
				equals = parseFloat(input1.value) / parseFloat(input2.value);
				division.style.border = "2px solid orange";
			}

			function myFunction(){
				result.innerHTML = equals;
			}

			function clearAll(){
				addition.style.border = "2px solid black";
			 	subtraction.style.border = "2px solid black";
			 	multiplication.style.border = "2px solid black";
			 	division.style.border = "2px solid black";
			 	result.innerHTML = "";
			}
