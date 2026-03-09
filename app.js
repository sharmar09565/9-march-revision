const showBtn = document.querySelector("#show");
const submitBtn = document.querySelector("#submit");
const pswrd = document.querySelector("#pswrd");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const mob = document.querySelector("#mob");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

const para = document.querySelector("#para")

showBtn.addEventListener("click", () => {
    if (pswrd.type === "password") {
        pswrd.type = "text";
        showBtn.innerHTML = "Hide Password";
    }
    else {
        pswrd.type = "password";
        showBtn.innerHTML = "Show Password";
    }
})

submitBtn.addEventListener("click", (e) => {
    
    if (firstName.value !== "" && lastName.value !== "" && mob.value !== "" && email.value !== "" && address.value !== "" && pswrd.value !== "") {
        alert("Submitted Successfully");
    }
    else {
        e.preventDefault();
        para.innerHTML = "Fill all the details";
        setTimeout(()=>{
            para.innerHTML = "";
        },2000)
    }
})
