import React from 'react';
import { Employee } from './employee-list.vm';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EmployeeListTableRowComponent } from './employee-list-table-row.component';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
  employees: Employee[];
  onEditEmployee: (id: string) => void;
}

export const EmployeeListComponent: React.FunctionComponent<Props> = ({
  employees,
  onEditEmployee,
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="center">Last date incurred</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(employee => (
            <EmployeeListTableRowComponent
              key={employee.id}
              employee={employee}
              onEditEmployee={onEditEmployee}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
