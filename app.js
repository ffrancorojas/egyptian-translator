function calculateIntervalDays(fromDate, toDate = '03/10/2023') {

    const resta = new Date(toDate) - fromDate
    const days = Math.ceil(resta / 1000 / 60 / 60 / 24)

    document.getElementById("days-elapsed").value = days

}
function removeVocalsAndSpaces(name) {
    const translatedName = name.replace(/[aeiou ]/g, '')
    document.getElementById("name-without-vocals").value = translatedName;
}
function handleInputName() {

}
function handleInputDate() {

}

document.getElementById("name").addEventListener("keyup", (e) => removeVocalsAndSpaces(e.target.value))
document.getElementById("date").addEventListener("change", (e) => calculateIntervalDays(e.target.valueAsDate))