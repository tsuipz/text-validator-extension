const btnTry = document.getElementById("try-btn");
const btnCopy = document.getElementsByClassName("copy-btn");

const lowercaseHandler = () => {
	const lowerCase = document.getElementById("text").value.toLowerCase();
	var firstSpan = '<span style=\\"text-transform:uppercase;\\">';
	var secondSpan = "</span>";
	var combineStatement = firstSpan.concat(lowerCase, secondSpan);

	document.getElementById("lowerCase").value = lowerCase;
	document.getElementById("spanTag").value = combineStatement;
};

const copyHandler = (text) => {
	const copyText = document.getElementById(text);
	console.log(copyText);
	navigator.clipboard.writeText(copyText.value).then(
		() => alert("Copied the text"),
		(err) => alert("Could not copy", err)
	);
};

btnTry.addEventListener("click", lowercaseHandler);
console.log(btnCopy[1]);
btnCopy[0].addEventListener("click", copyHandler.bind(null, "lowerCase"));
btnCopy[1].addEventListener("click", copyHandler.bind(null, "spanTag"));
