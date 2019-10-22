class _Node {
    constructor(val, next) {
      this.val = val
      this.next = next
    }
  }

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(newItem, beforeItem) {
        if (this.head === null) {
          this.insertFirst(newItem)
          return
        }
        let currNode = this.head
        let prevNode = this.head
    
        while (currNode !== null && currNode.val !== beforeItem) {
          prevNode = currNode
          currNode = currNode.next
        }
    
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
    
        const tempNode = new _Node(newItem, currNode)
    
        prevNode.next = tempNode
      }
    
      insertAfter(newItem, afterItem) {
        if (this.head === null) {
          this.insertFirst(newItem)
          return
        }
    
        let currNode = this.find(afterItem)
    
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
    
        const tempNode = new _Node(newItem, currNode.next)
    
        currNode.next = tempNode
      }
    
      insertAt(item, position) {
        if (this.head === null) {
          this.insertFirst(item)
          return
        }
    
        let currNode = this.head
        let currPosition = 1
    
        while (currPosition < position - 1) {
          currNode = currNode.next
          currPosition++
        }
    
        const tempNode = new _Node(item, currNode.next)
    
        currNode.next = tempNode
      }
    
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.find('Husker')
    SLL.remove('Husker')
    // SLL.insertBefore('Athena', 'Boomer')
    // SLL.insertAfter('Hotdog', 'Helo')
    // SLL.insertAt('Kat', 3)
    // SLL.remove('Tahuida')
  return SLL;
 
}
console.log(main())

const LL = main()

function display(LL) {
    let output = ''
    let currNode = LL.head
    while(currNode !== null) {
        output += currNode.val
        if(currNode.next !== null) {
            output += ' -> '
        }
        currNode = currNode.next
    } 
     return output
}
console.log(display(LL))

function size(LL) {
    let size = 0
    let currNode = LL.head
    while(currNode !== null) {
        size++
        currNode = currNode.next
    }
    return size
}
console.log(size(LL))

const ll = new LinkedList()
function isEmpty(LL) {
    if(LL.head === null) {
        return true
    } else {
        return false
    }
}

console.log(isEmpty(ll))

function findPrevious(item, LL) {
    if(LL.head === null) {
        console.log('linked list is empty')
        return
    } 
    let currNode = LL.head
    let prevNode = LL.head

    while(currNode !== null && currNode.val !== item) {
    prevNode = currNode
    currNode = currNode.next
    }
    if(currNode === null) {
        console.log('item not found')
        return
    }
return console.log(prevNode.val)
}
console.log(findPrevious('Helo', LL))

function findLast(LL) {
    if(LL.head === null) {
        return 'linked list is empty'
    }
    let currNode = LL.head
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode.val
}
console.log(findLast(LL))

function reverseList(LL) {
    let currNode = LL.head
    let prevNode = LL.head
    let nextNode = LL.head

    while(nextNode !== null) {
        if(currNode === prevNode) {
            currNode.next === null
        } else {
            currNode.next = prevNode
        }
        prevNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }
    return prevNode
}
// console.log("reverse", reverseList(LL))

function thirdFromEnd(LL) {
    let fastNode = LL.head
    let slowNode = LL.head
    while (fastNode !== null) {
      fastNode = fastNode.next.next.next
      console.log("fast", fastNode)
      slowNode = slowNode.next.next
      console.log("slow", slowNode)
    }
return slowNode.val
}

console.log("3rd", thirdFromEnd(LL))

function middle(LL) {
    let fastNode = LL.head
    let slowNode = LL.head
  
    while (fastNode !== null) {
      fastNode = fastNode.next.next
      slowNode = slowNode.next
    }
  
    return slowNode.val
  }
  
  console.log("middle", middle(LL))

  const newList = new LinkedList()
  newList.insertFirst('1')
  newList.insertLast('2')
  newList.insertLast('3')
  newList.insertLast('4')

  console.log(newList)

function cycle(LL) {
    let currNode = LL.head
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    currNode.next = LL.head
    return LL
    
}
console.log(cycle(LL))

console.log(display(newList))

