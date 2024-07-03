export const getAllColonyMinerals = async () => {
    const response = await fetch("http://localhost:8088/colonyMinerals?_expand=colony&&_expand=mineral")
    return await response.json()
}

export const updateColonyMinerals = async (index, object) => {
    const response = await fetch(`http://localhost:8088/colonyMinerals/${index + 1}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(object)
    })

}

export const createNewColonyMineral = async (object) => {
    const response = await fetch("http://localhost:8088/colonyMinerals", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}