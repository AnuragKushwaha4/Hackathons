// JSX----Babel---> React.createElement()----->React Element ------> ReactDOM ----->HTML



function Header(){
    return{
        <h1> Welcome</h1>
    }
}


function App(){
    return{
        <Header/>
    }
}