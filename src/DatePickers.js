import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";

const useStyles = makeStyles((theme) => ({
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
   }))

var setValue=function(a,b){
    return a-b
}

export default function DatePickers() {
    const [currentTime, onClick] = useState(new Date());
    const year=setValue(currentTime.getFullYear(),1911)
    console.log(year)
  
    const classes = useStyles();
    return (
      <div> 
        <form className={classes.container} noValidate>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
          <KeyboardDatePicker
            variant="inline"
            label="阿公店開店日選擇"
            value={currentTime}
            onChange={onClick}
            format={"民國"+year+"年"+"-M月-d號"}
            autoOk = "true"
            InputLabelProps={{
              shrink: true,
            }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        </form>
      </div>
    );
}