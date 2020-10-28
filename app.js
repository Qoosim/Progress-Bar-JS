let submit = document.getElementById('submit')

let i = 0
submit.addEventListener('click', function() {

    if (i == 0) {
        i = 1
        let bar = document.querySelector('.myBar')
        let width = 1
        let id = setInterval(frame, 30)
        function frame(){
            if(width >= 100) {
                clearInterval(id)
                i = 0
            } else {
                width++
                bar.style.width = width + '%'
            }
        }
    }
})

