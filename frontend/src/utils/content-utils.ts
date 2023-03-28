import Note from "../model";

let getTime = (note: Note) => {
    return new Date(note.updated).toLocaleTimeString();
}

let getTitle = (note: Note) => {
    let title: string = note.body.split("\n")[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

let getContent = (note: Note) => {
    let title: string = getTitle(note);
    let content = note.body.replaceAll(title, '')
    if (content.length > 45) {
        return content.slice(0, 45) + "..."
    } else {
        return content
    }
}

export {
    getTitle,
    getTime,
    getContent
}