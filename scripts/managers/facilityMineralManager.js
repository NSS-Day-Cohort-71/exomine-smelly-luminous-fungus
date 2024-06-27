export const getAllFacilityMinerals = async () => {
    const response = await fetch("http://localhost:8088/Facility_Minerals")
    return await response.json()
}