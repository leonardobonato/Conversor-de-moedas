const button = document.getElementById('convert-button') //pra pegar o meu botão la no html e trazer pra ca
const select = document.getElementById('currency-select') //pra pegar meu select la no html e trazer pra ca

const dolar = 5.2
const euro = 5.5

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value //.value é pra pegar somente o valor do meu input, só o que foi digitado
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', //Pra formatar meu valor pra moeda real
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === '$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', //Pra formatar meu valor pra moeda dólar
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);

    }

    if (select.value === '€ Euro') {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', //Pra formatar meu valor pra moeda euro
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);


    }


}

changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }


    if (select.value === '$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./img/dolar 1.png"
    }

    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)