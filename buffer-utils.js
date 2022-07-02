export function bufferString(arrayBuffer) {
    return [...new Uint8Array(arrayBuffer)].map(v => v > 32 && v < 127 ? String.fromCharCode(v) : '_').join('');
}
