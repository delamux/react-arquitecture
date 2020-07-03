import React from 'react';

import { Employee } from './employee-list.vm';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  employee: Employee;
  onEditEmployee: (id: string) => void;
}

export const EmployeeListTableRowComponent: React.FunctionComponent<Props> = ({
  employee,
  onEditEmployee,
}) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {employee.id}
      </TableCell>
      <TableCell component="th" scope="row">
        {employee.name}
      </TableCell>
      <TableCell>{employee.email}</TableCell>
      <TableCell align="right">
        <Checkbox checked={employee.isActive} disabled />
      </TableCell>
      <TableCell align="center">{employee.lastDateIncurred}</TableCell>
      <TableCell align="center">
        <IconButton onClick={() => onEditEmployee(employee.id)}>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
