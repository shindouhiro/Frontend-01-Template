function create(Cls, attr) {
    console.log(arguments)

    let o = new Cls()
    for (let name in attr) {
        o[name] = attr[name]
    }
    return o
}
class Div {

}

let component = <Div id="a" class="b" />
console.log(component)
