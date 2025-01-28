import PropertyListItem from "./PropertyListItem"
import './PropertyList.css'


function PropertyList({properties}) {

    return(
        <div className="PropertyList">
            {/* Gives you access to the data, use another component to use the data */}
            {properties.map((property)=> 
            
            <PropertyListItem
            key={property.id}
            name={property.name}
            rating={property.rating}
            price={property.price}
            ></PropertyListItem>

        
        )
            
            
            }
        </div>
    )
}

export default PropertyList