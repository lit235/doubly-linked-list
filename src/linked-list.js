const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this.linkedlist=[];
        this._tail = new Node();
        this._head = new Node();
        this._tail.next = this._head;
        this._head.prev = this._tail;
    }
    append(data) {
        var buff = this._tail;
        buff.data = data;
        this._tail= new Node();
        this._tail.next = buff;
        buff.prev= this._tail;
        ++this.length;

    }

    head() {
        var buff = new Node();
        buff= this._head.prev;
        return buff.data;
        }

    tail() {
        var buff= new Node();
        buff = this._tail.next;
        return buff.data;
    }

    at(index) {
        var buff= new Node();
        buff = this._head.prev;
        for(var i=0;i<index;++i){
            buff = buff.prev;
        }
        return buff.data;
    }

    insertAt(index, data) {
        var buff= new Node();
        buff = this._head.prev;
        for(var i=0;i<index;++i){
            buff = buff.prev;
        }
        var n = new Node(buff.data,buff,buff.next);
        buff.data=data;
        buff.next=n;
        this.length++;
    }

    clear() {
        this.length=0;
        this._tail.next = this._head;
        this._head.prev = this._tail;
    }

    isEmpty() {
        return !this.length;
    }
    
    reverse() {

        var buff= new Node();
        var buff2= new Node();
        buff= this._tail.next;
        buff.prev=this._head;
        this._tail.next=this._head.prev;
        this._head.prev=buff;
        for(var i=0;i<this.length;i++) {
            buff2=buff.next;
            buff.next=buff.prev;
            buff.prev=buff2;
            buff=buff2;
        }

    }
    deleteAt(index) {
        this.length--;
        var buff= new Node();
        buff = this._head.prev;
        for(var i=0;i<index;++i){
            buff = buff.prev;
        }
        var b = new Node();
        b= buff.prev;
        b.next=buff.next;
        b=buff.next;
        b.prev=buff.prev;
    }

    indexOf(data) {
        var buff= new Node();
        buff = this._head.prev;
        for(var i=0;i<this.length;i++){
            if(data==buff.data){
                return i;
            }
            buff = buff.prev;
        }

        return -1;

    }
}

module.exports = LinkedList;
