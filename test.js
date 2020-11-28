const BinarySearchTree = require('./BinarySearchTree')
const TreeNode = require('./TreeNode')

const tree = new BinarySearchTree()


let node = new TreeNode(100)


tree.add(100)
tree.add(200)
tree.add(50)
tree.add(30)
tree.add(70)
tree.add(150)
tree.add(300)

console.log(tree.root.value)
console.log('           ', tree.root.getLeft().getRight().value)
console.log('                           ', tree.root.getLeft().getLeft().value)
console.log('===============================================================')
tree.remove(100)

console.log(tree.root.value)
console.log(tree.root.getLeft().value)
console.log(tree.root.getLeft().getLeft().value)
console.log(tree.root.getLeft().getLeft().getLeft().value)