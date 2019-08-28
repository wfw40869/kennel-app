const remoteURL = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`).then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    addAnimal(newAnimal) {
        return fetch(`${remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        }).then(data => data.json())
    }
}