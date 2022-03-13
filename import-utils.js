export async function importByURI(uri) {
    const url = new URL(uri);
    const item = url.hash;
    url.hash = '';
    const module = await import(url);
    return module[item.slice(1)];
}
