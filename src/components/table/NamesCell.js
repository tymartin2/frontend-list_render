//Build Component
	export default function NamesCell({names}) {
   
        const { name } = names; 

		return(
			<td id="data-name">
			   <a href="/">{name}</a>
			</td>
		);
	}; 