document.addEventListener('DOMContentLoaded', function() {
    const div_target = document.querySelectorAll('div')
    div_target.forEach(div => {
        div.innerHTML = "Can't Touch This ☄️"
    });
})