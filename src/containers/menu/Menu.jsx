import { useContext, useEffect, useState } from "react"
import { getDifficulty } from "../../api/api"
import Header from "../../componentes/molecules/Header"
import QuestionSection from "../../componentes/molecules/QuestionSection"
import DifficultyContext from "../../context/DifficultyContext"

const Menu = () => {

    const [options, setOptions] = useState([])
    useEffect(() => {
        getDifficulty().then(
            result => setOptions(result)
        )
     }, [])

    const { setDifficultyContext } = useContext(DifficultyContext)
    const callback = (opt) => setDifficultyContext(opt)

    return (
        <>
            <Header title="Dificultad"/>
            <main>
                <QuestionSection subtitle="Elige dificultad" texts={ ["Elige una dificultad para empezar a jugar."] } opts={ options } callback={ callback }/>
            </main>
        </>
    )
}

export default Menu