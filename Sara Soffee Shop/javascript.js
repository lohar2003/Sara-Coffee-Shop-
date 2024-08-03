const btns = Array.from(document.getElementsByClassName("o-btn"))
btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        btn.href = `https://api.whatsapp.com/send/?phone=+918766069665&text=Product+Name : ${btn.previousElementSibling.previousElementSibling.previousElementSibling.innerText}%2C%0AProduct+Description : ${btn.previousElementSibling.previousElementSibling.innerHTML}%2C%0AProduct+price : ${btn.previousElementSibling.innerText}`;
    })
})