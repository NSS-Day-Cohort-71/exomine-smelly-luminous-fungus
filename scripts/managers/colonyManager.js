export const getAllColonies = async () => {
    const response = await fetch("http://localhost:8088/colonies")
    return await response.json()
}