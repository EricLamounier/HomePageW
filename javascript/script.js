const input = document.getElementById('menuChk')
input.addEventListener('click', () => {
    let fade = document.getElementById('fade')

    if(input.checked) {
        fade.style.zIndex = '1'
        fade.style.opacity = '1'
        return
    }
    fade.style.zIndex = '-1'
    fade.style.opacity = '0'
})