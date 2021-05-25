const $costCalculation = document.getElementById("costCalculation")
const $formOpenButton = document.querySelector('button[data-target = "#costCalculation"]')
const $costCalculationForm = $costCalculation.querySelector(".costCalculationForm")
const $costCalculationOutput = $costCalculation.querySelector(".costCalculationOutput")
const $submit = $costCalculation.querySelector("#submit")

const tours = {
    1: "Свежий воздух Кавказа",
    2: "Отдых без забот в Крыму",
    3: "Невероятные красоты Алтая"
}

$submit.addEventListener('click', () => {
    const tourId = parseInt($costCalculation.querySelector("#tourSelect").value)
    const date = new Date($costCalculation.querySelector("input[type=\"date\"]").value)
    const people = parseInt($costCalculation.querySelector("input[type=\"number\"]").value)
    const email = $costCalculation.querySelector("input[type=\"email\"]").value
    console.log(date);
    $costCalculationOutput.innerText = `Стоимость ${(tourId ? `тура "${tours[tourId]}"` : "любого нашего тура")} составляет от ${10 + (tourId ? tourId : 0) + 2 * (people ? people : 0)} у.е.
    ${email ? `Полная информация о путёвке будет направлена вам на электронную почту по адресу: ${email}` : ""}
    Ждем вас на ${(tourId ? `туре "${tours[tourId]}"` : "любом нашем туре")} ${date.getDate() ? date.toLocaleDateString() : ""}
    ${people ? `вместе в компании из ${people} человек${people === 1 ? "a" : ""}` : ""}
    `
    $costCalculationForm.classList.add("hidden");
    $costCalculationOutput.classList.remove("hidden");
})

$formOpenButton.addEventListener('click', () => {
    $costCalculationForm.classList.remove("hidden");
    $costCalculationOutput.classList.add("hidden");
})