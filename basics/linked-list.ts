class ListNode<T> {
    next?: ListNode<T>;
    constructor(public value: T){

    }
}

class LinkedList<T>{
    private root?: ListNode<T>
    private tail?: ListNode<T>
    private length = 0

    add(value: T){
        const node = new ListNode(value)
        if (!this.root || !this.tail){
        this.root = node
        this.tail= node
      }
      else{
        //using tail to add new node to the end of the list
        this.tail.next = node
        // let current = this.root;
        // while (current.next){
        //     current = current.next
      }
      this.length++
      }
}


const numberList = new LinkedList<number>()

const nameList = new LinkedList<string>()