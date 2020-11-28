// left < parent < right


const LEFT = 0
const RIGHT = 1
class TreeNode{
    constructor(value){
        this.value = value
        this.children = []
        this.parent = null
        this.multiplicity = 1
    }

    setLeft(node){
        this.children[LEFT] = node
        if(node !== null){  
            node.parent = this
        }
    }

    setRight(node){
        this.children[RIGHT] = node
        if(node !== null){
            node.parent = this
        }
    }

    getLeft(){
        return this.children[LEFT]
    }
    getRight(){
        return this.children[RIGHT]
    }
}


module.exports = TreeNode