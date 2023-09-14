import { useState } from "react"

const useChecked = () => {
    const [inputs, setInputs] = useState(Array.from({ length: 12 }).fill(false))
    return { inputs, setInputs, checked: inputs.every((v) => v) }
}

export default useChecked