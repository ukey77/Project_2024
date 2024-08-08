class DoublyLinkedList {
  constructor() {
    this.head = null; // 리스트의 시작
    this.tail = null; // 리스트의 끝
    this.length = 0; // 리스트의 길이
  }

  // 리스트의 끝에 노드 추가
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      // 리스트가 비어있으면, 새 노드를 헤드와 테일로 설정
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 리스트에 노드가 이미 있으면, 새 노드를 리스트의 끝에 추가
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // 리스트의 시작에서 노드 제거
  removeFirst() {
    if (this.head === null) return null; // 리스트가 비어있으면 null 반환

    const removedData = this.head.data;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      // 리스트가 비어있게 되면, 테일도 null로 설정
      this.tail = null;
    }
    this.length--;
    return removedData;
  }

  // 리스트의 끝에서 노드 제거
  removeLast() {
    if (this.tail === null) return null; // 리스트가 비어있으면 null 반환

    const removedData = this.tail.data;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      // 리스트가 비어있게 되면, 헤드도 null로 설정
      this.head = null;
    }
    this.length--;
    return removedData;
  }

  // 리스트의 첫 번째 노드 가져오기
  getFirst() {
    return this.head ? this.head.data : null;
  }

  // 리스트의 마지막 노드 가져오기
  getLast() {
    return this.tail ? this.tail.data : null;
  }
}
