const Dog = ({dog, handleClick}) => {
    return ( 
        <div>
            <button onClick={handleClick}> Fetch 🐕 !</button>
            <img src={dog} alt="dog pic" />
        </div>
    )
}

export default Dog;