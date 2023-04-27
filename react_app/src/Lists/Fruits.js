function Fruits(){
	var fr = ["Apple", "Mango","Banana","Pineapple"]
	return (
		<div>
			<ol>
				{fr.map(item => <li>{item}</li>)}
			</ol>
		</div>
		)
}

export default Fruits