const rulesButton = document.querySelector("#rules")
const rulesContainer = document.querySelector(".rulesContent")
rulesButton.addEventListener("click", (e) => {
    e.preventDefault()
    if(rulesButton.textContent == "↓ Show Instructions ↓"){
        rulesContainer.innerHTML = `<p>insert insturctions here</p>`
        rulesButton.textContent = "↑ Hide Instructions ↑"
    }
    else{
        rulesContainer.innerHTML = ""
        rulesButton.textContent = "↓ Show Instructions ↓"
    }
    
})

