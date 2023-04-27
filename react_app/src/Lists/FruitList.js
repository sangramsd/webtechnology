import {useState} from "react"

function FruitList(){
	const [fruitName , setFruitName] = useState("")
	const [fruits,setFruits] = useState([])

	var handleChange = function(event){
		setFruitName(event.target.value)
	}

	var handleClick = function(){
		//fruits.push(fruitName)
		//var arr = [...fruits, fruitName]
		setFruits([...fruits, fruitName])
	}

	return <div>
		<input type="text" value={fruitName} onChange={handleChange}/>
		<button onClick={handleClick}>Add to List</button>
		<ol>
			{fruits.map(item => <li>{item}</li>)}
		</ol>
	</div>
}

export default FruitList