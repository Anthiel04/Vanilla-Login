const fname = document.getElementById("name");
const mail = document.getElementById("mail");
const career = document.getElementById("career");
const buttonS = document.getElementById("submit");
const errorBox = document.getElementById("error")
const closeButton = document.getElementById('close');
const errormsg = document.getElementById('errormsg')


const classRemover = () => {
    buttonS.classList.remove("red");
    errorBox.classList.remove("red");
    closeButton.classList.remove("red");
    buttonS.classList.remove("green");
    errorBox.classList.remove("green");
    closeButton.classList.remove("green")
    errorBox.classList.remove("slide-in");
    errorBox.classList.add("slide-out");
}

const classAdd = (color) => {
    if (color == "red") {
        buttonS.classList.add("red");
        errorBox.classList.add("red");
        closeButton.classList.add("red")
        errorBox.classList.remove("slide-out");
        errorBox.classList.add("slide-in");
    } else {
        buttonS.classList.add("green");
        errorBox.classList.add("green");
        closeButton.classList.add("green")
        errorBox.classList.remove("slide-out");
        errorBox.classList.add("slide-in");
    }
}

function validate() {
    if (fname.value.length < 5 || fname.value.length > 40) {
        classAdd("red");
        errormsg.innerHTML = `<b>Name</b> must be between 5 and 40`;
        return console.log(fname.value.length)
    } else if (mail.value.length < 10 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1) {
        classAdd("red");
        errormsg.innerHTML = "<b>Email</b> must contain:  </br> - @ symbol </br> - .  symbol </br> - At least 12 characters";
        return console.log(mail.value.length)
    } else if (career.value == "") {
        classAdd("red");
        errormsg.innerHTML = "You must select a <b>Career</b>";
        return console.log(career.value)
    } else {
        classAdd();
        errormsg.innerHTML = "<b>Data</b> sent succesfully";
        return 0
    }
}

buttonS.addEventListener("click", (e) => {
    e.preventDefault();
    validate();
})

closeButton.addEventListener('click', (e) => {
    classRemover();
});

