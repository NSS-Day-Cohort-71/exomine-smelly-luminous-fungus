export const getAllColonyMinerals = async () => {
    const response = await fetch("http://localhost:8088/Colony_Minerals")
    return await response.json()
}