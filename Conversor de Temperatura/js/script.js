const celsiusToKelvin = (C) => {
    return C*1 + 273.15 
}

const celsiusToFahrenheit = (C) => {
    return (C * 9/5) + 32
}

const kelvinToFahrenheit = (K) => {
    return (K - 273.15) * 9/5 + 32
}

const kelvinToCelsius = (K) => {
    return K - 273.15
}

const fahrenheitToKelvin = (F) => {
    return (F - 32) * 5/9 + 273.15
}

const fahrenheitToCelsius = (F) => {
    return (F - 32) * 5/9
}

const conversorButton = document.querySelector('.button')

conversorButton.addEventListener('click', function(e) {
    e.preventDefault()

    const leftInputValues = document.querySelector('#left-input').value
    const splitedValues = leftInputValues.split(',')

    const leftTemp = document.getElementById('left-temperature').value
    const rightTemp = document.getElementById('right-temperature').value

    numbersArray = splitedValues.map((value) => {
        if (isNaN(value)) {
            return value = 'Valor indefinido'
        }

        if (leftTemp === 'C') {
            if (rightTemp === 'F') {
                return celsiusToFahrenheit(value)
            }else {
                return celsiusToKelvin(value)
            }
        }

        else if (leftTemp === 'F') {
            if (rightTemp === 'C') {
                return fahrenheitToCelsius(value)
            }else {
                return fahrenheitToKelvin(value)
            }
        }

        else if (leftTemp === 'K') {
            if (rightTemp === 'F') {
                return kelvinToFahrenheit(value)
            }else {
                return kelvinToCelsius(value)
            }
        }
    })

    const rightInput = document.querySelector('#right-input')
    rightInput.value = numbersArray

})
