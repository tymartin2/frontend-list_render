//Modules and Dependencies
	import { Container, Table } from 'react-bootstrap'; 
	import TableHead from '../components/table/TableHead'; 


//Build Component
	export default function TableDisplay() {
		return(
			<Container>
			    <Table id="table">
					<TableHead />
				</Table>
			</Container>
		); 
	}