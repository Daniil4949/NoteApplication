export default class Notes {
    getAllNotes = async () => {
        const res = await fetch(`/api/v0/notes/`,
            {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
        if (!res.ok) {
            throw new Error(`Could not fetch url`)
        }
        return await res.json();
    }

    getDefiniteNote = async (id) => {
        const res = await fetch(`/api/v0/notes/${id}/`)
        if (!res.ok) {
            throw new Error(`Could not fetch url`)
        }
        return await res.json()
    }
    deleteDefiniteBook = async (id) => {
        const res = fetch(`/api/v0/notes/${id}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        return (await res).status
    }
    updateDefiniteBook = async (id, note) => {
        const res = fetch(`/api/v0/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        return (await res).json()
    }


    createNote = async (note) => {
        const res = fetch(`/api/v0/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)

        })
        return (await res).json()
    }
}
