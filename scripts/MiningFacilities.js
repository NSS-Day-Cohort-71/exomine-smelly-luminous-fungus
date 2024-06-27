const miningFacilities = getMiningFacilities()

export const facilities = async () => {
    
let facilitiesHtml = `<div><h2>Facility Minerals for ${facility.name}</h2></div>
    <div><select id='facilities'><option disabled selected>Select Mining Facility</option>`
    const facilityOptions = miningFacilities.map(
        (facility) => {
            
            if (facility.isActive === "true") {
                return`
                    <option value="${facility.id}">${facility.name}</option>
                `
            }
            return facilityOptions

        
        }
    )

    facilitiesHtml += facilityOptions.join()
    facilitiesHtml += "</select></div>"
    

    return facilitiesHtml
}