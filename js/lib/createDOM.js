function createDom (element) {
    const parser = new DOMParser();
    const HTML = parser.parseFromString(element, "text/html");
    return HTML.body.firstChild;;
}

export default createDom;