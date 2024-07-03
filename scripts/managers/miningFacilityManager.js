export const getAllMiningFacilities = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    return await response.json()
}