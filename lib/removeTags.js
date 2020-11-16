function removeTags (str) {
    return str.replace( /(<([^>]+)>)/ig, '')
}

export default removeTags;