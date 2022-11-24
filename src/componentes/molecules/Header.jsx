import Title from "../atoms/Title"

const Header = ( { title }) => {
    return (
        <header>
            <Title title={ title }/>
        </header>
    )
}

export default Header