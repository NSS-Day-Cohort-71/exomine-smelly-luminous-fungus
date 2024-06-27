export const getAllColonyMinerals = async () => {
    const response = await fetch("http://localhost:8088/colonyMinerals?_expand=colony&&_expand=mineral")
    return await response.json()
}