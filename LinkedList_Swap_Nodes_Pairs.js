/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) 
{
    var arr=[];
    var cur=head;
    
    while(cur!=null)
    {
        arr.push(cur.val);
        cur=cur.next
    }
    console.log(arr);
    var i=0;
    while(i<arr.length-1)
    {
        var j=i+1;
        var temp=arr[i]
        arr[i]=arr[j];
        arr[j]=temp;
        i=i+2;
    }
    console.log(arr);
    
    var list=new ListNode(null);
    var newHead=list;
   
    for(var i=0; i<arr.length; i++)
    {
        list.next = new ListNode(arr[i]);
        list=list.next;
    }
    return newHead.next;
};