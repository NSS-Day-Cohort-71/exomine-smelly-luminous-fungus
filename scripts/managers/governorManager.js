export const getAllGovernors = async () => {
    const response = await fetch("http://localhost:8088/Governors")
    return await response.json()
}