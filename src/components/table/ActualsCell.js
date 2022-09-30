//Modules and Dependencies
	import Badge from 'react-bootstrap/Badge';

//Build Component
	export default function ActualsCell({actuals}) {
   
        const { target, actual } = actuals; 

		return(
			<td id="data-actual">
			   { (actual < target) ? 
			   	   <Badge id="actual-fail">{actual}%</Badge> : 
			   	   <Badge id="actual-pass">{actual}%</Badge> 
			   	}
			</td>
		);
	}; 