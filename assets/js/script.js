const form = document.getElementsByTagName("form")[0];
const target = document.querySelector("[name='result']");
const copy = document.getElementById("copy");

let utm = {
	source: "",
	medium: "",
	campaign: ""
}

form.addEventListener("submit",(event) => {
	event.preventDefault();
	const values = {
		name: event.target[0].value.toLowerCase(),
		type: event.target[1].value.split("_"),
		url: event.target[2].value
	}

	const url = new URL(values.url);
	url.params = new URLSearchParams(url.search);
	
	utm.campaign = values.name.split(" ").join("_"); // Replace spaces with underscores
	utm.medium = values.type[0];
	utm.source = values.type[1] ? values.type[1] : utm.medium;

	for(let [key,value] of Object.entries(utm)) {
		url.params.append(`utm_${key}`,value);
	}

	url.search = url.params.toString();
	target.value = url.toString();
});

copy.addEventListener("click",() => {
	target.focus();
	document.execCommand("copy");

	const memory = target.value;
	target.value = "Copied to clipboard!";

	setTimeout(() => target.value = memory,2000);
})