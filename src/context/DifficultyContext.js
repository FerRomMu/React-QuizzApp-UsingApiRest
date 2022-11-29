import { createContext, useState } from "react";

/**Contexto que provee la dificultad elegida si la hay.
 * Ademas provee dos setters:
 * setDifficultyContext: Settea la dificultad dada.
 * resetDifficultyContext: Vuelve la dificultad a null.
 */
const DifficultyContext = createContext()
export default DifficultyContext

export const DifficultyProvider = ({ children }) => {
    const [difficulty, setDifficultyContext] = useState(null);

    const resetDifficultyContext = () => setDifficultyContext(null)
    return (
        <DifficultyContext.Provider value={{ difficulty, setDifficultyContext, resetDifficultyContext }}>
            {children}
        </DifficultyContext.Provider>
    )
}