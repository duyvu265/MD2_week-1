class TreeNode<T> {
    data: T;
    public left: TreeNode<T> | null;
    public right: TreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }


}

interface Tree<T> {
    inset(data: T): TreeNode<T>;

    inoder(node: TreeNode<T>): void;

    getSize(): number;
}

class BinaryTree<T> implements Tree<T> {

    root: TreeNode<T> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode;

    }

    inoder(node: TreeNode<T>): void {
        if (node) {
            console.log(node.data)
            if (node.left){
                this.inoder(node.left);
            }
            if (node.right) {
                this.inoder(node.right)
            }
        }


    }

    inset(data: T): TreeNode<T> {
        if (!this.root) {
            this.root = new TreeNode<T>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode(data);
            let curren = this.root;
            while (curren) {
                if (data < curren.data) {
                    if (!curren.left) {
                        curren.left = node;
                        break;
                    }
                } else if (data > curren.left) {
                    if (!curren.right) {
                        curren.right = node;
                        break;
                    }
                }

            }
            this.totalNode++;
            return curren;
        }

    }

}

let tree = new BinaryTree<number>();
tree.inset(6);
tree.inset(5);
tree.inset(7);
tree.inset(3);
tree.inset(4);

console.log(`The numbers of nodes ${tree.totalNode}`)
console.log(tree.inoder(tree.root))
