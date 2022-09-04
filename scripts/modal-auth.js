function toggleAuthModal(){
    document.querySelector(".modal__auth").classList.toggle("active")
}

document.addEventListener("keyup", (e) => {
    if(e.key === "Escape"){
        document.querySelector(".modal__auth").classList.remove("active")
    }   
})

function validate(className, classError, messageError){
    let input = document.querySelector(`.${className}`)
    let error = document.querySelector(`.${classError}`)

    if(input && input.value.trim() !== ""){
        error.innerHTML = ""
        error.classList.remove("error")
        input.classList.remove("input__error")
    } else {
        error.innerHTML = `Поле "${messageError}" обязательно для заполнения`
        error.classList.add("error")
        input.classList.add("input__error")
    }
}   

function sendForm(){
    document.querySelector(".form__auth").addEventListener("submit", (e) => {
        e.preventDefault()

        let infoHeading = document.querySelector(".heading__form")

        let name = document.querySelector(".input__name"),
            email = document.querySelector(".input__email"),
            phone = document.querySelector(".input__phone")

        if(
            name && name.value.trim() !== "" &&
            email && email.value.trim() !== "" &&
            phone && phone.value.trim() !== ""
        ){
            let request = {
                nameUser: name.value,
                emailUser: email.value,
                phoneUser: phone.value
            }

            infoHeading.classList.remove("error__head")
            infoHeading.classList.add("success__head")
            infoHeading.textContent = "Спасибо за обращение"

            localStorage.setItem("authData", JSON.stringify(request))

            let content = document.querySelector(".form__auth").innerHTML

            setTimeout(() => {
                toggleAuthModal()

                setTimeout(() => {
                    document.querySelector(".form__auth").innerHTML = content
                    infoHeading.textContent = "Вы авторизованы"
                }, 500)
            }, 1500)

            document.querySelector(".form__auth").innerHTML = ``
        } else {
            infoHeading.classList.add("error__head")
            infoHeading.textContent = "Ошибка отправки данных"
        }
    })
}