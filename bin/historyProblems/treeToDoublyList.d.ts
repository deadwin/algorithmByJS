/**剑指 Offer 36. 二叉搜索树与双向链表
 * 2020年11月16日
 * 思路：实际上用了递归中序遍历
 */
declare class Node {
    val: any;
    left: Node;
    right: Node;
    next: Node;
}
/**
 *
 * @param root
 */
export declare var treeToDoublyList: (root: Node) => Node;
export {};
