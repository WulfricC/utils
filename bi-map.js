export class BiMap {
    constructor() {
        this.kv = new Map();
        this.vk = new Map();
    }
    set(key, value) {
        this.kv.set(key, value);
        this.vk.set(value, key);
        return value;
    }
    getValue(key) {
        return this.kv.get(key);
    }
    getKey(value) {
        return this.vk.get(value);
    }
    deleteKey(key) {
        const value = this.getValue(key);
        this.kv.delete(key);
        this.vk.delete(value);
    }
    deleteValue(value) {
        const key = this.getKey(value);
        this.kv.delete(key);
        this.vk.delete(key, value);
    }
    hasKey(key) {
        return this.kv.has(key);
    }
    hasValue(value) {
        return this.vk.has(value);
    }
    size() {
        return this.kv.size;
    }
}
