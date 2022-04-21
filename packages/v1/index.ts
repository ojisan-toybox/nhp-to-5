import { HTMLElement, Node, NodeType, parse } from "node-html-parser";

const root = parse('<ul class="list hoge" id="a"><li>Hello World</li></ul>');

root.childNodes.forEach((c) => {
  if (isElement(c)) {
    console.log(c.classNames);
  }
});

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}
