import { useContext, useEffect, useState } from "react"
import { getDifficulty } from "../api/api"
import Header from "../componentes/molecules/Header"
import MainSection from "../componentes/molecules/MainSection"
import DifficultyContext from "../context/DifficultyContext"

const Menu = () => {

    const [options, setOptions] = useState([])
    const [notAvailable, setToNotAvailable] = useState(true)
    const [status, setStatus] = useState("")
    useEffect(() => {
        setStatus("Loading...")
        setToNotAvailable(true)
        getDifficulty().then(
            result => {
                setOptions(result)
                setStatus("")
                setToNotAvailable(false)
            }
        ).catch( e => setStatus("An unexpected error has ocurred. Try to reload the page."))
     }, [])

    const { setDifficultyContext } = useContext(DifficultyContext)
    const callback = (opt) => setDifficultyContext(opt)

    return (
        <>
            <Header title="DIFFICULTY"/>
            <main>
                { notAvailable?
                    <MainSection subtitle={ status }/> :
                    <MainSection subtitle="Choose a difficulty" texts={ ["Choose a difficulty to start the game."] } opts={ options } callback={ callback }/>
                }
            </main>
        </>
    )
}

export default Menu