const filterWords = (value) => {
    return value.length > 1
}

const wordFrequency = function (arr) {
    return arr.reduce((count, word) => {
          count[word] = (count[word] || 0) + 1;
          return count
    }, {})
  }

function sortSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

const createRowInTable = (table, data1, data2) => {
    let row = table.insertRow()

    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    row.append(td1)
    row.append(td2)

    td1.append(data1)
    td2.append(data2)
}

const countButton = document.getElementById('countButton')


countButton.addEventListener('click', function(e) {
    e.preventDefault()

    const text = document.getElementById('text').value
    const textP = text.replace(',', '').replace('.', '')
    const splitedText = textP.split(' ')

    const allWords = splitedText.filter(filterWords)

    const obj = wordFrequency(allWords)

    const a = []

    for (let prop in obj) {
        a.push([prop, obj[prop]])
    }

    a.sort(sortSecondColumn);

    const table = document.querySelector('.result-table')

    for (let i=0; i<a.length; i++) {
        createRowInTable(table, a[i][0], a[i][1])
        
    }

})