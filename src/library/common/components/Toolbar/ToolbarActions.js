import { CHANGE_SEARCH_NAME_INPUT } from "./ToolbarConstants"

const changeSearchName = (newState) => {
    return {type :CHANGE_SEARCH_NAME_INPUT , newState}
}
 export{changeSearchName }