export async function importByURI (uri) {
    const url = new URL(uri);
    const item = url.hash;
    url.hash = '';
    const module = await import(url);
    return module[item.slice(1)];
}

export function objectFollowPath(object, path) {
    let o = object;
    for(const key of path) {
        o = o[key];
        if (o === undefined) return o;
    }
    return o;
}

export class BiMap {
    constructor () {
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

export function randomInt (bound = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * bound);
}

export function bufferString(arrayBuffer) {
    return [...new Uint8Array(arrayBuffer)].map(v => /*v.toString().padStart(3,'0') + */v > 32 && v < 127 ? v >= 127 ? '-': String.fromCharCode(v) : '_').join('')
}

export function unwrap (strings, ...expressions) {
    const str = expressions.reduce((s,v,i) => s + v.toString() + strings[i+1], strings[0]);
    return str.replaceAll(/[\s\n]+/ug, ' ').replaceAll(/(^\s)|(\s$)/g, '');
}