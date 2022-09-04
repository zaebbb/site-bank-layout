function calculate(){
    let typeCredit = document.querySelector(".type__credit"),
        sizeCredit = document.querySelector(".input__size"),
        timeCredit = document.querySelector(".input__time"),
        result = document.querySelector(".calculate__result"),
        calculateEverymount = document.querySelector(".calculate__everymount")

    if(typeCredit && sizeCredit && timeCredit){
        typeCredit = Number(typeCredit.value)
        sizeCredit = Number(sizeCredit.value)
        timeCredit = Number(timeCredit.value)

        let formulaMaxLimit = sizeCredit * typeCredit * (365 * (Math.floor(timeCredit / 12))) / 365

        let formulaEverymounthMoney = sizeCredit / timeCredit + formulaMaxLimit / timeCredit

        console.log(formulaMaxLimit);
        console.log(typeCredit);

        result.textContent = `${String(Math.floor(formulaMaxLimit))} руб.`
        calculateEverymount.textContent = `${String(Math.floor(formulaEverymounthMoney))} руб.`
    }
}