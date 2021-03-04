const Cat = ({cats}) => {
    return ( 
        <div>
            <div>Cat World</div>
            {cats.map(cat => {
               return  <div>
                   <p>{cat.name}</p>
                    <img src={cat.image?.url} alt="cat picture" />
                </div>
            })}
        </div>
    )
}

export default Cat;