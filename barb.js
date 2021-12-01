barba.hooks.after(() => {
	const bottomDOM = document.getElementsByTagName("body")[0]
	const newScript = document.createElement("script")
	const oldScript = document.querySelector(".main-script")
	newScript.src = "./main.js"
	newScript.className = "main-script"
	oldScript.remove()
	bottomDOM.appendChild(newScript)
	console.log('has changed');
})