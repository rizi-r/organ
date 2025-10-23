const doo = document.querySelector('#doo')
const ree = document.querySelector('#ree')
const mee = document.querySelector('#mee')
const faa = document.querySelector('#faa')
const soll = document.querySelector('#soll')
const laa = document.querySelector('#laa')
const sii = document.querySelector('#sii')

let x = 400


window.addEventListener('keypress', function (event) {
    const letter = event.key
    console.log(letter);
    if(x>=1500){
        x=300
        init()
    }
    switch (letter) {
        case 'q':case 'a': case 'z':
            doo.play()
            dokey(x+=100)
            break;
        case 'w':case 's':case 'x':
            ree.play()
            rekey(x+=100)
            break;
        case 'e':case'd':case'c':
            mee.play()
            mekey(x+=100)
            break;

        case 'r':case'f':case'v':
            faa.play()
            fakey(x+=100)
            break;

        case 't':case'g':case'b':
            soll.play()
            solkey(x+=100)
            break;

        case 'y':case'h':case'n':
            laa.play()
            lakey(x+=100)
            break;

        case 'u':case'j':case'm':
            sii.play()
            sekey(x+=100)
            break;
    }

})

