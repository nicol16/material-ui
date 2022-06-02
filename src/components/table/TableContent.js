import React from 'react';
import TableHeader from "@material-ui/core/TableHeader";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import {TableContainer} from "@material-ui/core";
import * as assert from "assert";




const rowInformation = [
    {"name": "Bob johnson", "age": 69},
    {"name": "Jenny Johnson", "age": 25}
]

function descendingComparator(a, b, orderBy) {

    if(b[orderBy] < a[orderBy]){
        return -1
}

if(b[orderBy] > a[orderBy]){
    return 1
}
    return 0

}

function getComparator(order, orderBy){
    return order === "desc" ? (a,b) => descendingComparator(a,b, orderBy) : (a,b) => descendingComparator(a,b, orderBy)

}


export default function TableContent(){

    const [orderDirection, setOrderDirection] = React.useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = React.useState('name')
    const [name, setName] = React.useState(0)
    const [rowsPerPage, setRowsPage] = React.useState(1)


    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    const sortedRowInformation = (rowArray, comparator) => {
        const stabilizedRowArray = rowArray.map((el, index) => [el, index])
        stabilizedRowArray.sort((a,b) => {
            const order = comparator(a[0], b[0])
            if (order !== 0 ) return order
            return a[1] - b[1]
        })
        return stabilizedRowArray.map((el) => el[0])
    }

}

const handleChangePage = (event, newPage) => {
    setPage(newPage)
}

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value), 10)
    setPage(0)
}

    return(


      <div>


          <TableContainer>
              <Table>
                  <TableHeader valueToOrderBy={valueToOrderBy} orderDirection={orderDirection}
                               handleRequestSort={handleRequestSort}/>
                  {
                      sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy))
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((person, index) => (

                       <TableRow key={index}>

                        <TableCell>
                         {person.name}
                      </TableCell>

                      <TableCell>
                       {person.age}
                      </TableCell>

                      </TableRow>
                      ))
              </Table>
          </TableContainer>
                      <TablePagination rowsPerPageOptions={[1,2]} component="div" count={rowInformation.length}
                      rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}/>

      </div>

    );
}
