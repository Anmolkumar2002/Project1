
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "Anmol",
    "email": "anmolkumar2002@gmail.com",
    "score": 0.65,
    "domain": "codewithAkm"
}

submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("clicked!");

    let key = "ema_live_FYtUSJm2JYbCs5uFANZznRHZ9dJHJYjQ1Z2YDYij"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for(key of Object.keys(result)) {
        str = str + `<div>${key}: ${result[key]}</div>`
    }

    console.log(str);
    resultCont.innerHTML = str  
})





