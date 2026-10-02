/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root, res = []) {
    if(!root) return res;
    res.push(root.val);
    for(let child of root.children){
        preorder(child, res)
    }
    return res;
}