//Modules and Dependencies
	import clients from '../../data/clients';
	import TableCell from './TableCell';

//Build Component
	export default function TableBody() {
	    
	    const examiners = clients.map(client => {
	    	return(
	    		<tr id="trow">
	    		    <td className="row-items"> </td>
	    		    <td className="row-items">
	    		    	<span> {client.name} </span>
	    		    </td>
	    		    <td className="row-items"></td>
	    		    <td className="row-items">
	    		    	<span> {client.target}% </span>
	    		    </td>
	    		    <td className="row-items">
	    		    	<TableCell />
	    		    </td>
	    		    <td className="row-items">
	    		    	<span> {client.points} </span>
	    		    </td>
	    		</tr>
	    	);
	    });

		return(
		   <tbody className="table-body">
		      {examiners}
		   </tbody>
		)
	}