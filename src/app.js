import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">search</button>
        </form>
    )
}

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <img src={item}></img>
        ))}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <p>{props.description}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Items items={props.items}/>
    </section>
)

const App = () => {
    const appTitle = 'MyPokedex'
    const description = 'Pokemon that catched'
    const items = [
         "PicPokemon/Pokemon001.png",
         "PicPokemon/Pokemon002.png",
         "PicPokemon/Pokemon003.png",
         "PicPokemon/Pokemon004.png",
         "PicPokemon/Pokemon005.png",
         "PicPokemon/Pokemon006.png",
         "PicPokemon/Pokemon007.png"
    ]
    return (
        <section>
            <Header title={appTitle} />
            <Content description={description}
                     items={items}/>
        </section>
    ) 
}

const element = document.getElementById('app')
ReactDOM.render(<App />,element)
