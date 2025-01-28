

function PropertyListItem({name, rating, price}) {
    
    return (
        <div className="PropertyItem">
        
        <h2>{name}</h2>
        <h3> ${price} a night</h3>
        <h4> {rating} stars</h4>
        
        </div>
        
    )
}

export default PropertyListItem