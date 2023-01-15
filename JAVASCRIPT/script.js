

const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if (input.value != "") {
            form.classList.add('secActive');
        } else {
            form.classList.remove('secActive');
        }
    })
})
backBtn.addEventListener("click", () => form.classList.remove('secActive'));

const fs = require('fs')

let student = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const information = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    student.push(inform);
    fs.writeFile('data.txt', student, (err) => {
        if (err) throw err;
    });
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();



    // //saving to localStorage
    // localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}
form.addEventListener('DOMContentLoaded', () => {
    form.getElementById('sumbit1').addEventListener('click', information);
});
