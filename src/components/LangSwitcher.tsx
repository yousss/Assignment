import React from 'react';
import Switch from '@material-ui/core/Switch';
import { createStyles, FormControlLabel, makeStyles, Theme } from '@material-ui/core';
import { useLanguage, useUpdateLanguage } from '../context/GlobalContext';


const useStyles = makeStyles((theme: Theme)=> createStyles({
        langSwitcherWrapper: {
            margin:theme.spacing(0),
            background: 'transparent',
            display:'flex'
        },
    })
);


export default function LangSwitcher () {

    const styles = useStyles();

    const lang = useLanguage();
    const toggleLanguage  = useUpdateLanguage();

    const switchLabel = () => {
        if (lang) return 'English';
        return 'Khmer'
    }

    return (
        <div className={styles.langSwitcherWrapper}>
            <FormControlLabel
                control={
                <Switch
                    checked={lang}
                    onChange={toggleLanguage}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />}
                label={switchLabel()}
            />
        </div>
    );
}
