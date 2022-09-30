import Table from 'react-bootstrap/Table';

export default function TableHead() {
	return(
	   <thead className="header">
	      <td className="header-items"></td>
	      <td className="header-items" id="name">Name</td>	
	      <td className="header-items"></td>

	      <td className="header-items" id="target">Target Score</td>	
	      <td className="header-items" id="actual">Actual Score</td>	
	      <td className="header-items" id="total">Total Points</td>	
	   </thead>
	)
}