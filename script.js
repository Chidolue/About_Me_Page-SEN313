const section1 = document.getElementById("one");
const section2 = document.getElementById("two");
const section3 = document.getElementById("three");
const section4 = document.getElementById("contact");
const enterBtn = document.getElementById("enter");
const input = document.getElementById("input")
const welcome = document.getElementById("welcome");
const myName = document.getElementById("my-name");

enterBtn.addEventListener("click", function() {
    let name = input.value;
    console.log(name);
    section1.style.display = "none";
    section2.style.display = "flex";
    section2.textContent = `Welcome ${name} 🎉`;
    
    setTimeout(function() {
        section2.style.display = "none";
        section3.style.display = "block";
        typeWriter();
        section4.style.display = "block";
    }, 3000);
})

const text = "Chidolue Ebube Samuel";
let index = 0;

function typeWriter() {
	myName.textContent = "";
	index = 0;

	function type() {
		if (index < text.length) {
			myName.textContent += text.charAt(index);
			index++;
			setTimeout(type, 100);
		}
	}
	type();
}


