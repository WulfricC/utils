export function bufferString(arrayBuffer) {
    return [...new Uint8Array(arrayBuffer)].map(v => /*v.toString().padStart(3,'0') + */ v > 32 && v < 127 ? v >= 127 ? '-' : String.fromCharCode(v) : '_').join('');
}
