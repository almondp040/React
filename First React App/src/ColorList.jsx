//Make a component that will return li's with the corresponding colors from App.jsx: 

function ColorList({colors}) {
const lis = colors.map(color => <li style={{color: color}}>{color}</li>)

    return (
        
        <div>
            <p>Color List</p>
          <ul>{lis}</ul>
        </div>
      
    )
}

export default ColorList