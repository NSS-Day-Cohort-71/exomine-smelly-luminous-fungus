export const getAllMiningFacilities = async () => {
    const response = await fetch("http://localhost:8088/MiningFacilities")
    return await response.json()
}