import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);


type OptionValue = string | number;

type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type Props<T extends OptionValue> = {
    options: Option<T>[];
    value: unknown;
    floatLabel: string;
    onChange: (value: unknown) => void;
};

function CustomSelect<T extends OptionValue>(props: Props<T>) {

    const classes = useStyles();

    function handleOnChange(e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) {
        const selectedOption = e.target.value;
        props.onChange(selectedOption);
    }
    return (
       <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">{props.floatLabel}</InputLabel>
            <Select 
                native
                inputProps={{
                name: 'age',
                id: 'filled-age-native-simple',
                }}
                value={props.value} 
                onChange={handleOnChange}
                >
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
            </Select>
        </FormControl>
    );
}