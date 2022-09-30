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
	    		    <NamesCell key={Math.random()} names={client}/>
	    		    <td className="row-items"></td>
	    		    <TargetsCell key={Math.random()} targets={client}/>
	    		    <ActualsCell key={Math.random()} actuals={client}/>
	    		    <TotalsCell key={Math.random()} totals={client}/>
	    		</tr>
	    	);
	    });

		return(
		   <tbody className="table-body">
		      {examiners}
		   </tbody>
		)
	}