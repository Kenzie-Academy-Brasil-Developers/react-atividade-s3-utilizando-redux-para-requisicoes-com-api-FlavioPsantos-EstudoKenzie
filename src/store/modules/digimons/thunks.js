import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError, setIsloading) => (dispatch) => {
    setIsloading(true)
axios
.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
.then(response => {
    dispatch(addDigimon(response.data[0].name))
    setIsloading(false)
})
.catch(err => {
setError(true)
setIsloading(false)
})
 
}
export default addDigimonsThunk;