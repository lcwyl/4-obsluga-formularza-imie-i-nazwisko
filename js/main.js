function showValue(e) {
    e.preventDefault();
    let input1 = document.querySelector("input[name='fname']");
    let input2 = document.querySelector("input[name='lname']");
    console.log(`Imię: ${input1.value} , Nazwisko: ${input2.value}`)


}
const form = document.getElementById("form")

form.addEventListener('submit', showValue);