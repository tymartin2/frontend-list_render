//Build Component
	export default function TargetsCell({targets}) {
   
        const { target } = targets; 

		return(
			<td id="data-target">
			    <span>{target}%</span>
			</td>
		);
	}; 