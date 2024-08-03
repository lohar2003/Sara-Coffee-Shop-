// const btns =Array.form(document.getElementsByClassName("o-btn"))
// btns.forEach(btn => {
//     btn.addEventListener("click",()=>{
//             btn.href = `https://api.whatsapp.com/send/?phone=+9187066069665&text=probuct+name: ${btn.previousElementSibling.innerText} %2C%0AProduct+disc: ${btn.previousElementSibling.innerText}`;
//     })
// })


const btns=Array.from(document.getElementsByClassName("o-btn"))
btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
            btn.href=`https://api.whatsapp.com/send/?phone=+918766069665&text=product+n : ${btn.previousElementSibling.innerText} %2C%0Aprooduct+d: ${btn.previousElementSibling.innerText}`;
    })
})
const btns = Array.from(document.getElementsByClassName("o-btn"))
btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        btn.href = `https://api.whatsapp.com/send/?phone=+918766069665&text=Product+Name : ${btn.previousElementSibling.previousElementSibling.previousElementSibling.innerText}%2C%0AProduct+Description : ${btn.previousElementSibling.previousElementSibling.innerHTML}%2C%0AProduct+price : ${btn.previousElementSibling.innerText}`;
    })
})