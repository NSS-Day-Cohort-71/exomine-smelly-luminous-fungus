import { getAllMiningFacilities } from "./managers/miningFacilityManager.js"

const miningFacilities = await getAllMiningFacilities()

export const facilities = async () => {
    
let facilitiesHtml = `
    <div><label for="FacilityList">Choose a Facility</label><select id='facilities'><option disabled selected>Select Mining Facility</option>`
    const facilityOptions = miningFacilities.map(
        (facility) => {
            
            if (facility.isActive === true) {
                return`
                    <option value="${facility.id}">${facility.name}</option>
               `
            }
        }   
    )
    facilitiesHtml += facilityOptions.join()
    facilitiesHtml += "</select></div>"
    
    return facilitiesHtml
}