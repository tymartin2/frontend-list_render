//Modules and Dependencies
	import clients from '../../data/clients';
	import ActualsCell from './ActualsCell';
	import TargetsCell from './TargetsCell';
	import TotalsCell from './TotalsCell';
	import NamesCell from './NamesCell';

//Build Component
	export default function TableBody() {
	    
	    const examiners = clients.map(client => {
	    	return(
	    		<tr id="trow">
	    		    <td className="row-items"> </td>
	    		    <NamesCell />
	    		    <td className="row-items"></td>
	    		    <TargetsCell key={client.name} targets={client}/>
	    		    <ActualsCell key={client.name} actuals={client}/>
	    		    <TotalsCell key={client.name} totals={client}/>
	    		</tr>
	    	);
	    });

		return(
		   <tbody className="table-body">
		      {examiners}
		   </tbody>
		)
	}