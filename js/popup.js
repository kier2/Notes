const dataPopups = document.querySelectorAll('[data-popup]')
const dataBtns = document.querySelectorAll('[data-btn]')

const closePopupBtn = document.querySelectorAll('.close-popup')

dataBtns.forEach(button => {
    button.addEventListener('click', () => {
        let buttonVal = button.dataset.btn
        closePopup()
        if(buttonVal === 'add'){
            document.body.classList.add('active')
            dataPopups[0].classList.add('toggle')
        }else if(buttonVal === 'edit'){
            document.body.classList.add('active')
            dataPopups[1].classList.add('toggle')
        }else if(buttonVal === 'delete'){
            document.body.classList.add('active')
            dataPopups[3].classList.add('toggle')
        }
    })
})

function closePopup(){
    closePopupBtn.forEach(btnClose => {
        btnClose.addEventListener('click', () => {
            document.body.classList.remove('active')
            btnClose.parentElement.parentElement.classList.remove('toggle')
        })
        
    })
}  