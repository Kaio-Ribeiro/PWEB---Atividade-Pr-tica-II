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

    if (leftTemp === rightTemp) {
        alert('Não pode conveter para a mesma temperatura!')
    }

    else if (leftTemp === 'C') {
        if (rightTemp === 'F') {
            functionConvert = celsiusToFahrenheit
            symbol = '°F'
        }else {
            functionConvert = celsiusToKelvin
            symbol = 'K'
        }
    }

    else if (leftTemp === 'F') {
        if (rightTemp === 'C') {
            functionConvert = fahrenheitToCelsius
            symbol = '°C'
        }else {
            functionConvert = fahrenheitToKelvin
            symbol = 'K'
        }
    }

    else if (leftTemp === 'K') {
        if (rightTemp === 'F') {
            functionConvert = kelvinToFahrenheit
            symbol = '°F'
        }else {
            functionConvert = kelvinToCelsius
            symbol = '°C'
        }
    }

   numbersArray = splitedValues.map((value) => {
       if (isNaN(value)) {
           return value = 'Valor indefinido'
        }
        else {
            convertedNumber = functionConvert(value)
            return ' '+convertedNumber+' '+symbol
        }
   })

    const rightInput = document.querySelector('#right-input')
    rightInput.value = numbersArray

})
