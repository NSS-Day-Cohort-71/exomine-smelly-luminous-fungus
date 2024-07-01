export const getAllFacilityMinerals = async () => {
    const response = await fetch("http://localhost:8088/facilityMinerals?_expand=mineral&&_expand=facility")
    return await response.json()
}

export const updateFacilityMinerals = async (index, object) => {
    const response = await fetch(`http://localhost:8088/facilityMinerals/${index + 1}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(object)
    })

}