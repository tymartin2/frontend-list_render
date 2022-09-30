//Modules and Dependencies
	import { Container, Table } from 'react-bootstrap'; 
	import TableHead from '../components/table/TableHead'; 
	import TableBody from '../components/table/TableBody'; 


//Build Component
	export default function TableDisplay() {
		return(
			<Container>
			    <Table hover responsive id="table">
					<TableHead />
					<TableBody />
				</Table>
			</Container>
		); 
	}