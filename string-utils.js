export function unwrap(strings, ...expressions) {
    const str = expressions.reduce((s, v, i) => s + v.toString() + strings[i + 1], strings[0]);
    return str.replaceAll(/[\s\n]+/ug, ' ').replaceAll(/(^\s)|(\s$)/g, '');
}
