const TreeNode = require('./TreeNode')

class BinarySearchTree {
    constructor() {
        this.root = null
        this.size = 0
    }


    add(value) {
        const newNode = new TreeNode(value)
        if (this.size === 0) {
            this.root = newNode
            this.size += 1
            return newNode
        }

        const { found, parent } = this.findNodeAndParent(value)
        if (found) {
            found.multiplicity = (found.multiplicity || 1) + 1
            this.size += 1
        } else {
            if (value > parent.value) {
                newNode.parent = parent
                parent.setRight(newNode)
            }
            else {
                if (value < parent.value) {
                    newNode.parent = parent
                    parent.setLeft(newNode)
                }
            }
            this.size += 1

        }

        return newNode
    }

    remove(value) {
        const { found, parent } = this.findNodeAndParent(value)
        const isLeaf = found.getRight() === null && found.getLeft() === null
        const isRoot = found === this.root

        if (found.multiplicity && found.multiplicity > 1) {
            found.multiplicity -= 1
            this.size -= 1
            return true
        }
            if (isRoot) {
                const leftSubtree = found.getLeft()
                const newRoot = found.getRight()

                let minInRightSubtree = this.root.getRight()

                while (minInRightSubtree.getLeft()) {
                    minInRightSubtree = minInRightSubtree.getLeft()
                }

                minInRightSubtree.setLeft(leftSubtree)
                this.root = newRoot
                this.size -= 1
                return true
            }
            if (isLeaf) {
                if (found.value > parent.value) {
                    parent.setRight(null)
                }
                if (found.value < parent.value) {
                    parent.setLeft(null)
                }

                this.size -= 1
                return true
            }

            const rightChild = found.getRight()
            const leftChild = found.getLeft()

            rightChild.setLeft(leftChild)


            if (found.value > parent.value) {
                parent.setRight(rightChild)
            }
            if (found.value < parent.value) {
                parent.setLeft(leftChild)
            }

            this.size -= 1
            return true

    }


    findNodeAndParent(value) {
        let node = this.root
        let parent = null

        while (node) {
            if (node.value === value) {
                break
            }
            parent = node
            if (value > node.value) {
                node = node.getRight()
            }
            else {
                node = node.getLeft()
            }
        }


        return { found: node, parent }
    }

}


module.exports = BinarySearchTree