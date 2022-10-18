import jsTPS_Transaction from "../common/jsTPS.js"

export default class MoveSong_Transaction extends jsTPS_Transaction {
    constructor(store, oldIndex, newIndex) {
        super();
        this.store = store;
        this.oldIndex = oldIndex;
        this.newIndex = newIndex;
    }

    doTransaction() {
        this.store.moveSong(this.oldIndex, this.newIndex);
    }
    
    undoTransaction() {
        this.store.moveSong(this.newIndex, this.oldIndex);
    }
}