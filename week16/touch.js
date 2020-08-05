let element = document.body
let contexts = Object.create(null)
let MOUSE_SYMBOL = Symbol("mouse")
console.log(element )
if(document.ontouchstart !==null )
    element.addEventListener("mousedown",event=> {
        contexts[MOUSE_SYMBOL] = Object.create(null)
    
        start(event,contexts[MOUSE_SYMBOL])
        let mousemove = event => {
            move(event,contexts[MOUSE_SYMBOL])
            console.log(event.clientX,event.clientY)
        }
        let mouseend = event => {
            end(event,contexts[MOUSE_SYMBOL])
        document.removeEventListener("mousemove",mousemove)
        document.removeEventListener("mouseend",mouseend)
        }
        document.addEventListener("mousemove",mousemove)
        document.addEventListener("mouseend",mouseend)
    })



element.addEventListener("touchstart", event => {
    for(touch of event.changedTouches) {
        contexts[touch.identifier] = Object.create(null)
        start(touch, contexts[touch.identifier])
    }
})
element.addEventListener("touchmove", event => {
    for(touch of event.changedTouches) {
        contexts[touch.identifier] = Object.create(null)
        move(touch, contexts[touch.identifier])
    }

})
element.addEventListener("touchend", event => {
    for(touch of event.changedTouches) {
        contexts[touch.identifier] = Object.create(null)
        end(touch, contexts[touch.identifier])
        // delete contexts[touch.identifier]
    }
})
element.addEventListener("touchcancel", event => {
    for(touch of event.changedTouches) {
       
    }
})

let start = (point, context) => {
    console.log(point,'point')
    console.log(context,'context')
}

let move = (point, context) => {}

let end = (point,context) => {}

let cancel = (point,context) => {}