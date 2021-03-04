import "../App.css"

const Dog = ({dog, handleClick}) => {
    return ( 
        <div>
            <h1>Dogs</h1>
            <div className="dog-container">
                <button className="dog-button" onClick={handleClick}> Fetch 🐕 !</button>
                <img className="dog-pic" src={dog} alt="dog" />
            </div>
        </div>
    )
}

export default Dog;