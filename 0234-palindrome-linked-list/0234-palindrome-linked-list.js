/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    function middle(head){
        let slow = head, fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    function reverse(head){
        let curr = head, prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    if(!head.next) return true;
    let mid = middle(head);
    let partialReversed = reverse(mid);
    let curr = head;
    let reverseCurr = partialReversed;
    while(reverseCurr){
        if(reverseCurr.val !== curr.val) return false;
        curr = curr.next;
        reverseCurr = reverseCurr.next;
    }
    return true;
};