import React from 'react';
import {TableCell} from "@material-ui/core/TableCell";
import {TableHead} from "@material-ui/core/TableHead";
import {TableRow} from "@material-ui/core/TableRow";
import {TableSortLabel} from "@material-ui/core/TableSortLabel";

export default function TableHeader(props){

    const {valueToOrderBy, orderDirection, handleRequestSort} = props
    const createSortHandler = (property) => (event) => {

        handleRequestSort(event, property)
    }

    return(
      <>

          <TableHead>
              <TableRow>
                  <TableCell key="name">
                      <TableSortLabel active={valueToOrderBy === "name"} direction={valueToOrder == "name" ? orderDirection: 'asc'}
                                      onClick={createSortHandler("name")}>
                          Name
                      </TableSortLabel>
                  </TableCell>
                  <TableCell key="age">
                      <TableSortLabel active={valueToOrderBy === "age"} direction={valueToOrder == "name" ? orderDirection: 'desc'}
                                      onClick={createSortHandler("age")}>
                          Age
                      </TableSortLabel>
                  </TableCell>
              </TableRow>
          </TableHead>
      </>
    );
}
