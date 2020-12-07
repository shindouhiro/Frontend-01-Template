let element = document.body


element.addEventListener('mousedown', () => {
    start(event)
    let mousemove = event => {
        move(event)

    }
    let mouseend = event => {
        end(event)
        document.removeEventListener("mousemove", mousemove)
        document.removeEventListener("mouseend", mouseend)
    }
    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseend', mouseend)
})

//tab
//pan - panstart panmove panend
//flick
//press - presstart pressend


element.addEventListener('touchstart', event => {
    for (let touch of event.changedTouches) {
        start(touch)
    }
})

element.addEventListener('touchmove', event => {
    for (let touch of event.changedTouches) {
        move(touch)
    }
})

element.addEventListener('touchend', event => {
    for (let touch of event.changedTouches) {
        end(touch)
    }
})

element.addEventListener('touchcancel', event => {
    for (let touch of event.changedTouches) {
        cancel(touch)
    }
})

let start = (point) => {
    console.log('start');
}

let move = (point) => {
    console.log('move');
}

let end = (point) => {
    console.log('end');
}

let cancel = (point) => {
    console.log('cancel');
}