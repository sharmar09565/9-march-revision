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

const imgBtn = document.querySelector("#img-btn");
const image = document.querySelector("#image");
let currImg = "img1";
imgBtn.addEventListener("click",changeImage);


function changeImage(){
    if(currImg == "img1"){
        image.src = "https://i.pinimg.com/736x/36/bc/e8/36bce85074c631139046d06d43d18a1e.jpg";
        currImg = "img2";
    }
    else {
        image.src="https://i.pinimg.com/736x/4a/a3/6f/4aa36f4b84940489c3f49153e3c3289c.jpg";
        currImg = "img1";
    }
}