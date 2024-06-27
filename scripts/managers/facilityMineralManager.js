export const getAllFacilityMinerals = async () => {
    const response = await fetch("http://localhost:8088/facilityMinerals?_expand=mineral&&_expand=facility")
    return await response.json()
}