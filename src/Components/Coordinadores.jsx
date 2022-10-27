import "/src/styles/Coor.css"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridLinkOperator } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from 'axios'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  'Campus_1',
  'Campus_2',
  'Campus_3',
  'Campus_4',
  'Campus_5',
  'Campus_6',
  'Campus_7',
  'Campus_8',
];

const columns = [
  { field: 'id', headerName: 'Matricula', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
    {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'campus',
    headerName: 'Campus',
    width: 170,
  },
];


export default function Settings() {
  const [isRows, setIsRows] = useState([]);

  useEffect(() => {
    axios.get("https://prepanet-366500.wl.r.appspot.com/api/coordinadores/")
      .then(res => {
        console.log(res)
        setIsRows(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  const [personName, setPersonName] = React.useState([]);
  

  return (
    <div className="Back">
      <div className="TopBar"></div>
      <div className="tableSett">
        <div className="title_coor">
          <b>Buscar Coordinador</b>
        </div>
        <div className="InfoStats">
          <p> Buscar <strong> Campus</strong> del <strong> Coordinador </strong> </p>
        </div>

        <div className="forma">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="grouped-native-select">Campus</InputLabel>
            <Select 
              defaultValue="" 
              id="grouped-select" 
              label="Grouping">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>{name} </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="buttonforma">
          <Button variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              console.log("hola")
            }}>
            Send
          </Button>
        </div>
      </div>

      <div className="tableStats">
        <Box sx={{ pt: 4, pl: 3, height: '90%', width: '95%' }}>
          <DataGrid
            rows={isRows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>
    </div>
  )
}