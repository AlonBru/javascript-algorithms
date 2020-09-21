import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.data = []
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.data.length===0;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[0];
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    this.data.push(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    // const removedHead = this.linkedList.deleteHead();
    return this.isEmpty()? null : this.data.shift();
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback=x=>x) {
    // Return string representation of the queue's linked list.
    return this.data.map(callback).toString()
  }
}
