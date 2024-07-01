import { getState } from "./TransientState.js"


//export a function that creates a submit button
export const SubmitButton = () => {
    const currentState = getState()
    if(currentState.mineralId === 0) {
        return `<button type="submit" name="purchase" class="submit-button">Nothing in Cart</button>`
    } else {
        return `<button type="submit" name="purchase" class="submit-button">Purchase Mineral</button>`
    }

}
    //should return a "nothing in cart" button if no mineral is selected
    //should return a "purchase mineral" button if mineral is selected


//need an event listener

//need a button clicked handler that invokes purchase mineral from transient state
    //when submit button is clicked, need to increase colony inventory by 1, and decrease facility inventory by 1.

const handleSubmit = async (event) => {
    if (event.target.name === "purchase") {
        event.preventDefault()
        const state = getState()
        
    }
}