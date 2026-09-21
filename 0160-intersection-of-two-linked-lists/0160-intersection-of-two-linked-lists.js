/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    lista = headA;
    listb = headB;
    while(lista !== listb){
        lista = lista ? lista.next : headB;
        listb = listb ? listb.next : headA;
    }
    return lista;
};