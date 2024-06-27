export const getAllColonies = async () => {
    const response = await fetch("http://localhost:8088/Colonies")
    return await response.json()
}