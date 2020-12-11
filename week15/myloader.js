const parser = require('./parser')
module.exports = function (source, map) {
    let tree = parser.parseHTML(source)

    let template = null
    let script = null;

    for (let node of tree.children) {
        if (node.tagName === "template") {
            template = node
        }
        if (node.tagName === "script") {
            script = node
        }
    }
    let visit = (node) => {
        if (node.type === "text") {
            return JSON.stringify(node.content)
        }
        let children = node.children.map(node => visit(node))

        let attrs = {}
        for (let attribute of node.attributes) {
            attrs[attribute.name] = attribute.value
        }
        return `createElement("${node.tagName}",${JSON.stringify(attrs)},${children})`
    }

    // console.log(scirpt, 'scirpt')
    let r = `
    import {createElement, Text, Wrapper} from "./createElement.js"
    export class Carousel {
      setAttribute(name, value) {
        this[name] = value;
      }
      render() {
        return ${visit(template)}
      }
      mountTo(parent) {
        this.render().mountTo(parent);
      }
    }
    `
    return r
}