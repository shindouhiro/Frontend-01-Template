function create(Cls, attr) {
    let o = new Cls()
    for (let name in attr) {
        o[name] = attr[name]
    }
    return o
    // console.log(arguments)
}
class Div {

}

let component = <Div id="a" class="b" />
console.log(component)
