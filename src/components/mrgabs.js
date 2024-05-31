import React, { useState,useEffect } from 'react'
import { Typography, Table, TableBody, Container, TableCell, TableContainer, TableRow, Paper, Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
// import { postRequest } from '../../serverconfiguration/requestcomp';
//   -import {REPORTS} from '../../serverconfiguration/controllers'
function Masterroll() {

    // const [rolldata,setRolldata]=useState([])
    // useEffect(()=>{
    //     async function getData()
    //      {
    //     return await postRequest(ServerConfig.url,REPORTS,{
    //         "query": "SELECT emp_code,emp_name,(select dateofbirth from paym_employee where employeecode=emp_code)as dob,(select father_name from paym_employee_profile1 where pn_employeeid=(select pn_employeeid from paym_employee where employeecode=emp_code)) as father_name, COUNT(CASE WHEN status = 'P' THEN 1 END) AS total_P,COUNT(CASE WHEN status = 'A' THEN 1 END) AS total_A, COUNT(CASE WHEN status = 'L' THEN 1 END) AS total_L, coUNT (CASE WHEN status='H' THEN 1 END) AS total_H,MAX(CASE WHEN DAY(dates) = 1 THEN status END) AS day_1, MAX(CASE WHEN DAY(dates) = 2 THEN status END) AS day_2,MAX(CASE WHEN DAY(dates) = 3 THEN status END) AS day_3, MAX(CASE WHEN DAY(dates) = 4 THEN status END) AS day_4, MAX(CASE WHEN DAY(dates) = 5 THEN status END) AS day_5, MAX(CASE WHEN DAY(dates) = 6 THEN status END) AS day_6, MAX(CASE WHEN DAY(dates) = 7 THEN status END) AS day_7, MAX(CASE WHEN DAY(dates) = 8 THEN status END) AS day_8,  MAX(CASE WHEN DAY(dates) = 9 THEN status END) AS day_9,MAX(CASE WHEN DAY(dates) = 10 THEN status END) AS day_10,MAX(CASE WHEN DAY(dates) = 11 THEN status END) AS day_11,MAX(CASE WHEN DAY(dates) = 12 THEN status END) AS day_12, MAX(CASE WHEN DAY(dates) = 13 THEN status END) AS day_13,MAX(CASE WHEN DAY(dates) = 14 THEN status END) AS day_14, MAX(CASE WHEN DAY(dates) = 15 THEN status END) AS day_15,MAX(CASE WHEN DAY(dates) = 16 THEN status END) AS day_16, MAX(CASE WHEN DAY(dates) = 17 THEN status END) AS day_17,MAX(CASE WHEN DAY(dates) = 18 THEN status END) AS day_18, MAX(CASE WHEN DAY(dates) = 19 THEN status END) AS day_19, MAX(CASE WHEN DAY(dates) = 20 THEN status END) AS day_20, MAX(CASE WHEN DAY(dates) = 21 THEN status END) AS day_21, MAX(CASE WHEN DAY(dates) = 22 THEN status END) AS day_22, MAX(CASE WHEN DAY(dates) = 23 THEN status END) AS day_23, MAX(CASE WHEN DAY(dates) = 24 THEN status END) AS day_24,MAX(CASE WHEN DAY(dates) = 25 THEN status END) AS day_25, MAX(CASE WHEN DAY(dates) = 26 THEN status END) AS day_26,MAX(CASE WHEN DAY(dates) = 27 THEN status END) AS day_27,MAX(CASE WHEN DAY(dates) = 28 THEN status END) AS day_28, MAX(CASE WHEN DAY(dates) = 29 THEN status END) AS day_29,MAX(CASE WHEN DAY(dates) = 30 THEN status END) AS day_30, MAX(CASE WHEN DAY(dates) = 31 THEN status END) AS day_31 FROM time_card where MONTH(dates)=MONTH(GetDate()) GROUP BY emp_code,emp_name"
    //       })
    //      }
         

    //      getData().then((e)=>setRolldata(e.data))

    // },[])
  return (
   
<div style={{ textAlign: 'center', margin: '20px' , }}>
<Container maxWidth="xxl">
      <Grid container direction="column" spacing={2}>
    <Typography  variant="h4"  gutterBottom   style={{textAlign:'center'}}>
      Master Roll
    </Typography>
  </Grid>

 <Grid  display="inline-flex">
      <Grid item xs={3}>
      <Typography style={{ textAlign: 'left', }}>
          name & address<br />
          of the factory
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography style={{ textAlign: 'center '}}>
          Hesperus Automation Pvt Ltd <br/>
          16, chakrabani Road guindy,<br/>
          chennai-600 042
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography style={{ textAlign: 'center'}}>
         Form No: 25 <br/>
         (Prescribed under rule 103 of the Madras Factory Rules 1950 & under G. O. No. 2759 of 1959)<br/>
          chennai-600 042
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography style={{ textAlign: 'right', paddingRight: '100px' }}>
        Register Number:
        </Typography>
      </Grid>
    </Grid>
<Grid>
  <Typography variant='h6'>
  Register of Muster Roll for the month of February 2010
  </Typography>
</Grid>

<Grid item >
<TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto',maxWidth:'1550px'}}>
            <Table>
              <TableBody>
                <TableRow sx={{ border: 1, borderColor: 'black.300',textAlign:'center' }}>
                  <TableCell sx={{ border: 1, borderColor: 'black.300',  padding: '5px'}}>s.no</TableCell>
                  <TableCell sx={{ border: 1,textAlign:'center', borderColor: 'black.300', padding: '5px', width:"60px"}}>name of the worker</TableCell>
                  <TableCell sx={{ border: 1,textAlign:'center' , borderColor: 'black.300', padding: '5px' }}>Father name</TableCell>
                  <TableCell sx={{ border: 1,textAlign:'center' , borderColor: 'black.300', padding: '5px' }}>Designation<br></br>nature of worker</TableCell>
                  <TableCell sx={{ border: 1, textAlign:'center' ,borderColor: 'black.300', padding: '5px'  }}>date of birth to be supported by extra from birth register</TableCell>
                  <TableCell sx={{ border: 1,textAlign:'center' , borderColor: 'black.300', padding: '5px' }}>place of employeement</TableCell>
                  <TableCell sx={{ border: 1,textAlign:'center' , borderColor: 'black.300', padding: '5px'}}>Grp N</TableCell>
                  <TableCell sx={{ border: 1,textAlign:'center' , borderColor: 'black.300',  padding: '5px' }}>Grp N</TableCell>
                  
                  <TableCell sx={{ border: 1, borderColor: 'black.300',  padding: '1px'}}>Relay no.</TableCell>
                  <TableCell colSpan={31} sx={{   textAlign:'center', borderColor: 'black.300'}}>
                    <Table><tr><td>For the Period Ending Days</td></tr><tr><td> 
                      {[...Array(31).keys()].map((day) => (
                  
                  <TableCell key={day + 1} sx={{ border: 1, borderColor: 'black.300', padding: '5px'}}>{day + 1}</TableCell>
                ))}</td></tr></Table></TableCell>

                  <TableCell sx={{ border: 1, borderColor: 'black.300',  padding: '1px'}}>Dwrkd</TableCell>
                  <TableCell sx={{ border: 1, borderColor: 'black.300', padding: '0'  }}>Nlgw</TableCell>
                  <TableCell sx={{ border: 1, borderColor: 'black.300', padding: '0'  }}>ndabs</TableCell>
                  <TableCell sx={{ border: 1, borderColor: 'black.300',  padding: '0' }}>Ndcw</TableCell>
                  <TableCell sx={{ border: 1, borderColor: 'black.300',  padding: '1px'}}>remarks</TableCell>
                </TableRow>
                <TableRow>
                {
                // rolldata.map((e)=><TableRow><TableCell>{1}</TableCell></TableRow>)
                }
             <TableCell>
               
                {
                // rolldata.map((e)=><TableRow><TableCell>{e.emp_name}</TableCell></TableRow>)
                }
                
                </TableCell>
                <TableCell>
                {
                // rolldata.map((e)=><TableRow><TableCell>{JSON.stringify(e.father_name).replace(/"/g,'')}</TableCell></TableRow>)
                }
                  </TableCell>  
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
</Grid>


</Container>

</div>

  )
}



export default Masterroll;