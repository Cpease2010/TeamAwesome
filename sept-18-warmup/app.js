document.addEventListener('DOMContentLoaded', function() {
    const div_target = document.querySelectorAll('div')
    div_target.forEach(div => {
        div.innerHTML = "Can't Touch This ☄️"
    })

    const li_img = document.querySelectorAll('li')
    console.log(li_img)
    li_img.forEach(button => {
        // console.log('but: ', button)
        var new_img_button = document.createElement('button')
        new_img_button.innerHTML = "toggle image"
        button.appendChild(new_img_button)

        button.addEventListener('click', function(){
            fetch('https://source.unsplash.com/random')
                // .then(response => response.json())
                .then(response => {
                    console.log(response)
                    li_img.forEach(place => {
                        console.log('url: ', response['url'])
                        var newImg = document.createElement('img')
                        newImg.setAttribute('src', response['url'])
                        place.appendChild(newImg)
                        })
                })
                // .then(imgURL => console.log(imgURL))
        })
    })

    
})