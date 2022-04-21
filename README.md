# nhp-to-5

node-html-parser のバージョンを確かめる

## 背景

classNames の型が v1 と v5 で破壊的変更がされている。

## 検証コード

```ts
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
```

## 結果

| v1                 | v5        |
| ------------------ | --------- |
| [ 'list', 'hoge' ] | list hoge |

つまり、v1 で書いたものを v5 にしたければ、出力結果に `c.classNames.split(" ")` を付け加えれば I/F を壊さずに良い。
