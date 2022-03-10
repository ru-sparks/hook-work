import { useState } from "react";

const useInputState = (initialVal) => {
    const [value,  setValue] = useState(initialVal);

    const handleChange = e => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue(initialVal);
    }

    return [value, handleChange, reset];
}

export default useInputState;