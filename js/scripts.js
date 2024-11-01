const textPasswordElement = document.getElementById("textPassword")
const numbersElement = document.getElementById("numbers")
const rangeElement = document.getElementById("range")
const vocabularyUpperElement = document.getElementById("vocabularyUpper")
const vocabularyLowerElement = document.getElementById("vocabularyLower")
const checkNumbersElement = document.getElementById("checkNumbers")
const checkSymbolsElement = document.getElementById("checkSymbols")
const generatePasswordElement = document.getElementById("generatePassword")

const vocabularyUpper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const vocabularyLower = "abcdefghijklmnñopqrstuvwxyz"
const checkNumbers = "0123456789"
const checkSymbols = ",;.:-_<>`^[´¨{+*]çÇ}/*-+º!·$%&/()=¡|@#~€¬"


const generatePassword = () => {
    let textContent = ""
    let contentCheck = ""
    
        for (let i = 0; i < rangeElement.value; i++)
            {                
                if (vocabularyUpperElement.checked)
                    {
                        contentCheck += vocabularyUpper
                    }
                if (vocabularyLowerElement.checked)
                    {
                        contentCheck += vocabularyLower
                    }
                if (checkNumbersElement.checked)
                    {
                        contentCheck += checkNumbers
                    }
                if (checkSymbolsElement.checked)
                    {
                        contentCheck += checkSymbols
                    }
                textContent += contentCheck.charAt(Math.floor(Math.random() * contentCheck.length))
            }
            textPasswordElement.value = textContent            
}

const changeTextLength = () => {
    numbersElement.textContent = rangeElement.value
}

const checkPassword = () => {
    
    if (vocabularyUpperElement.checked || vocabularyLowerElement.checked || checkNumbersElement.checked || checkSymbolsElement.checked)
        {
            generatePasswordElement.disabled = false
        }
        else
        {
            generatePasswordElement.disabled = true
        }
}

generatePasswordElement.addEventListener('click', generatePassword)
rangeElement.addEventListener("input", changeTextLength)
vocabularyUpperElement.addEventListener("change", checkPassword)
vocabularyLowerElement.addEventListener("change", checkPassword)
checkNumbersElement.addEventListener("change", checkPassword)
checkSymbolsElement.addEventListener("change", checkPassword)












/* const textPasswordElement = document.getElementById("textPassword")
const numbersElement = document.getElementById("numbers")
const rangeElement = document.getElementById("range")
const vocabularyUpperElement = document.getElementById("vocabularyUpper")
const vocabularyLowerElement = document.getElementById("vocabularyLower")
const checkNumbersElement = document.getElementById("checkNumbers")
const checkSymbolsElement = document.getElementById("checkSymbols")
const generatePasswordElement = document.getElementById("generatePassword")

const vocabularyUpper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const vocabularyLower = "abcdefghijklmnñopqrstuvwxyz"
const checkNumbers = "0123456789"
const checkSymbols = ",;.:-_<>`^[´¨{+*]çÇ}/*-+º!·$%&/()=¡|@#~€¬"


const generatePassword = () => {
    let textContent = ""

        for (i = 0; i < rangeElement.value; i++)
            {
                textContent += vocabularyUpper.charAt(Math.floor(Math.random() * vocabularyUpper.length))
                textContent += vocabularyLower.charAt(Math.floor(Math.random() * vocabularyLower.length))
                textContent += checkNumbers.charAt(Math.floor(Math.random() * checkNumbers.length))
                textContent += checkSymbols.charAt(Math.floor(Math.random() * checkSymbols.length))
            }
            textPasswordElement.value = textContent
            
}

const changeTextLength = () => {
    numbersElement.textContent = rangeElement.value
}

const checkPassword = () => {
    
    if (vocabularyUpperElement.checked || vocabularyLowerElement.checked || checkNumbersElement.checked || checkSymbolsElement.checked)
        {
            generatePasswordElement.disabled = false
        }
        else
        {
            generatePasswordElement.disabled = true
        }
}

generatePasswordElement.addEventListener('click', generatePassword)
rangeElement.addEventListener("input", changeTextLength)
vocabularyUpperElement.addEventListener("change", checkPassword)
vocabularyLowerElement.addEventListener("change", checkPassword)
checkNumbersElement.addEventListener("change", checkPassword)
checkSymbolsElement.addEventListener("change", checkPassword) */