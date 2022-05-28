// comment will added soon 

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0 
    }
    //add element 
    add(element){
        let node = new Node(element)
        let curr 
        if(this.head == null)
         this.head = node
         else{
             curr = this.head
             while(curr.next){
                 curr = curr.next
             }
             curr.next = node
         }
            this.size++
         return "element added successfully "
    }
    // insertAt(element, location)
     insertAt(element, index){
 
         let node = new Node(element)
         if(index < 0 || index > this.size){
             return "please enter the vaild position"
         }else{
                     let curr = this.head, prev, it = 0 
             // add element in 1st position 
             if(index == 0){
                 node.next = this.head  // 
                 this.head = node
             }else{
                 while(it < index){ // 1< 1
                     it++ // 1
                     prev = curr   //  prev =10
                     curr = curr.next     //  curr =20
                 }
                 node.next = curr
                 prev.next = node  // 10|N = 34
                 
             }
             this.size++
         }
         return "element added successfully "
         
     }
    // removeFrom(location)
    removeFrom(index){
        let curr = this.head, prev, it = 0 
        if(index < 0 || index >this.size){
            return "delete index not found"
        }else{
            if(index == 0 ){
                this.head = curr.next
            }else{
                while(it < index){  // 0 < 1 
                    it++     // 1 
                    prev = curr //  34
                    curr = curr.next  //10
                }
                 prev.next  = curr.next
            }
            this.size--
            return curr.data
        }
        return "element deleted"
        
    }
    // removeElement(element)
     removeElement(data){
           let curr = this.head , prev =null
           while(curr != null){
               if(curr.data == data){ //true 
            //if element remove from 1st position 
                  if(prev == null){ //true
                      this.head = curr.next // 10 => 20
                  }else{
                //if element remove from the mid of the list  
                      prev.next = curr.next  //  10 => 30
                  }
                  this.size-- 
                  return curr.data
               }
                 //if element remove from the end position in list 
               prev = curr
               curr = curr.next
           }
            return "delete element not found "
       
      
     }
 
    // Helper Methods
    // isEmpty
    isEmpty(){
        return this.size == 0  ? 'list is empty' : `list is not empty the size of the list ${this.size}`
    }
    // size_Of_List
    size_Of_List(){
        return this.size 
    }
    //print element
    print(){
           let curr = this.head , str =""
        if(this.head == null)return "nothing to display"
        else{
         
            while(curr){
                str += curr.data + " "
                curr = curr.next
            }
        }
        return str
    }
}
let li = new linkedList()
console.log(li.print())
console.log(li.add(10))
console.log(li.add(20))
console.log(li.add(30))
console.log(li.print())
console.log(li.removeElement(70))
console.log(li.print())
console.log(li.size_Of_List())
console.log(li.isEmpty())
console.log(li.insertAt(34,0))
console.log(li.print())
console.log(li.insertAt(1,5))
console.log(li.print())
console.log(li.removeFrom(1))
console.log(li.print())
// console.log(li.removeFrom(0))
// console.log(li.print())
// console.log(li.removeFrom(0))
// console.log(li.print())
// console.log(li.removeFrom(0))
// console.log(li.print())
// console.log(li.removeElement(10))
// console.log(li.print())





