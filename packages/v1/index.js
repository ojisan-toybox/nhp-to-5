"use strict";
exports.__esModule = true;
var node_html_parser_1 = require("node-html-parser");
var root = node_html_parser_1.parse('<ul class="list hoge" id="a"><li>Hello World</li></ul>');
root.childNodes.forEach(function (c) {
    if (isElement(c)) {
        console.log(c.classNames);
    }
});
function isElement(node) {
    return node.nodeType === node_html_parser_1.NodeType.ELEMENT_NODE;
}
