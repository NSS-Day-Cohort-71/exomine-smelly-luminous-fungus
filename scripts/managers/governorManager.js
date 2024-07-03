export const getAllGovernors = async () => {
    const response = await fetch("http://localhost:8088/governors?_expand=colony")
    return await response.json()
}