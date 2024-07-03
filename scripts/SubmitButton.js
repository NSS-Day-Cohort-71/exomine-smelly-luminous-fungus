import { getState, purchaseMineral, setSelectedMineralId } from "./TransientState.js"

export const SubmitButton = () => {
    const currentState = getState()
    if(currentState.selectedMineralId === 0) {
        return `<button type="submit" name="purchase" class="submit-button">Nothing in Cart</button>`
    } else {
        return `<button type="submit" name="purchase" class="submit-button">Purchase Mineral</button>`
    }

}

const handleSubmit = async (event) => {
    if (event.target.name === "purchase") {
        event.preventDefault()
        const state = getState()
        purchaseMineral(state.selectedMineralId, state.facilityId, state.colonyId)
        setSelectedMineralId(0)
    }
}
document.addEventListener("click", handleSubmit)