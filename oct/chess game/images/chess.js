function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText}<img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.computedStyleMap.cursor = 'pointer'
            } else {
                image.innerHTML = `${image.innerText}<img class='allimg allpawn' src="${image.innerText}.png"alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}

insertImage()

function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup
        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(240,201,150)'
        }
        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(100,75,43)'
        }
    })
}

coloring()


function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {
            document.querySelectorAll('.box').forEach(i2 => {
                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {
                    greenText = i2.innerText
                    pinkText = i1.innerText

                    pinkcolor = ((Array.from(pinkText)).shift()).toString()
                    greencolor = ((Array.from(greenText)).shift()).toString()

                    if (pinkcolor == greencolor) {
                        i2.style.backgroundColor = 'rgb(253,60,60)'
                    }
                }


            })
        }
    })
}


tog = 1

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function() {
        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        } else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkTest = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1

                }
            })
        }
    })
})


getId = item.id
arr = Array.from(getId)
arr.shift()
aside = eval(arr.pop())
arr.push('0')
aup = eval(arr.join(''))
a = aside + aup


function whosTurn(toggle) {

}