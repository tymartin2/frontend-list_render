//Modules and Dependencies
	import { Container, Table } from 'react-bootstrap'; 
	import TableHead from '../components/table/TableHead'; 


//Build Component
	export default function TableDisplay() {
		return(
			<Container>
			    <Table responsive id="table">
					<TableHead />
				</Table>
			</Container>
		); 
	}