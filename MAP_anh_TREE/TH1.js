var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inoder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inoder(node.left);
            }
            if (node.right) {
                this.inoder(node.right);
            }
        }
    };
    BinaryTree.prototype.inset = function (data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode(data);
            var curren = this.root;
            while (curren) {
                if (data < curren.data) {
                    if (!curren.left) {
                        curren.left = node;
                        break;
                    }
                }
                else if (data > curren.left) {
                    if (!curren.right) {
                        curren.right = node;
                        break;
                    }
                }
            }
            this.totalNode++;
            return curren;
        }
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
tree.inset(6);
tree.inset(5);
tree.inset(7);
tree.inset(3);
tree.inset(4);
console.log("The numbers of nodes ".concat(tree.totalNode));
console.log(tree.inoder(tree.root));
