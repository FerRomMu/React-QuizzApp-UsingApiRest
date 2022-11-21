import { createContext, useState } from "react";

const DifficultyContext = createContext()
export default DifficultyContext

export const DifficultyProvider = ({ children }) => {
    const [difficulty, setDifficultyContext] = useState(null);

    return (
        <DifficultyContext.Provider value={{ difficulty, setDifficultyContext }}>
            {children}
        </DifficultyContext.Provider>
    )
}