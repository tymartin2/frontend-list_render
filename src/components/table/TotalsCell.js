//Build Component
	export default function TotalsCell({totals}) {
   
        const { points } = totals; 

		return(
			<td id="data-total">
			   <span>{points}</span>
			</td>
		);
	}; 