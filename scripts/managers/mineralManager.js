export const getAllMinerals = async () => {
    const response = await fetch("http://localhost:8088/Minerals")
    return await response.json()
}