import "../App.css"

const Cat = ({cats}) => {
    return ( 
        <div>
            <h1>Cat World</h1>
        <div className="cat-container">
            {cats.map(cat => {
               return (
               <div className="cat-box">
                    <p className="cat-name">{cat.name}</p>
                    <img className="cat-img" src={cat.image?.url} alt="cat" />
                </div>)
            })}
        </div>
        </div>
    )
}

export default Cat;