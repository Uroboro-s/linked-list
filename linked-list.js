import Node from "./node.js";

export default class LinkedList {
    
    constructor() {
        this.listHead = null;
    }

    prepend(value) {
        let currentListHead = null;
        if(this.listHead != null ) currentListHead = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = currentListHead;
    }

    append(value) {
        if (this.listHead == null) this.prepend(value);
        else {
          let currentNode = this.listHead;
          while (currentNode.nextNode != null) currentNode = currentNode.nextNode;
          currentNode.nextNode = new Node(value);
        }
      }
    
      size() {
        let currentNode = this.listHead;
        let counter = 0;
        while (currentNode != null) {
          counter++;
          currentNode = currentNode.nextNode;
        }
        return counter;
      }
    
      head() {
        return this.listHead;
      }
    
      tail() {
        let currentNode = this.listHead;
        while (currentNode.nextNode != null) currentNode = currentNode.nextNode;
        return currentNode;
      }
    
      at(index) {
        let currentNode = this.listHead;
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.nextNode;
          if (currentNode == null) return "There is no item for this index";
        }
        return currentNode;
      }
    
      pop() {
        let cur = this.listHead;
        let prev = null;
        while (cur.nextNode != null) {
          prev = cur;
          cur = cur.nextNode;
        }
        prev.nextNode = null;
      }
    
      contains(value) {
        let currentNode = this.listHead;
        while (currentNode != null) {
          if (currentNode.value === value) return true;
          currentNode = currentNode.nextNode;
        }
        return false;
      }
    
      find(value) {
        let currentNode = this.listHead;
        let index = 0;
        while (currentNode != null) {
          if (currentNode.value === value) return index;
          currentNode = currentNode.nextNode;
          index++;
        }
        return null;
      }
    
      toString() {
        let currentNode = this.listHead;
        let stringList = "";
        while (currentNode != null) {
          stringList += `(${currentNode.value}) -> `;
          currentNode = currentNode.nextNode;
        }
        return (stringList += "null");
      }
    
      insertAt(value, index) {
        if (this.listHead == null) this.prepend(value);
        else {
          let cur = this.listHead;
          let prev = null;
          for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.nextNode;
            if (cur == null) break; // if index is bigger than end of list, add node at end of list
          }
          const currentNode = new Node(value);
          prev.nextNode = currentNode;
          currentNode.nextNode = cur;
        }
      }
    
      removeAt(index) {
        if (this.listHead == null) return "List is already empty";
    
        let cur = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
          prev = cur;
          cur = cur.nextNode;
          if (cur == null) return "There is no item for this index";
        }
        prev.nextNode = cur.nextNode;
      }

    }




