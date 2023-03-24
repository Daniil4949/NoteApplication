let getTime = (note) => {
    return new Date(note.updated).toLocaleTimeString()
}

let getTitle = (note) => {
    let title = note.body.split("\n")[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

let getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll("\n", " ")
    content = content.replaceAll(title, '')
    if (content.length > 45) {
        return content.slice(0, 45) + "..."
    }
    else {
        return content
    }
}

export {
    getTitle,
    getContent,
    getTime
}