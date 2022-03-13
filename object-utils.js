export function objectFollowPath(object, path) {
    let o = object;
    for (const key of path) {
        o = o[key];
        if (o === undefined)
            return o;
    }
    return o;
}
