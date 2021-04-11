import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import categories from '../data/category';

import { createMuiTheme, ThemeProvider, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        width: 220,
        paddingLeft: 10,
        paddingRight: 5
    },
    fullList: {
        width: 'auto',
    },
});

export default function HamburgerDrawer({ setCategory }) {
    const classes = useStyles();
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createMuiTheme({
            palette: {
                type: prefersDarkMode ? "dark" : "light",
            },
            }),
        [prefersDarkMode]
    );

    const list = (anchor) => (
            <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            >
        <List>
            <ListItem>Categories</ListItem>
        </List>
        <Divider />
        <List>
        {categories.map((text) => (
            <ListItem 
                button 
                onClick={() => setCategory(text)}
                key={text}
                style={{
                    height: 40,
                    borderRadius: 3
                }}
            >
                <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </Button>
                <ThemeProvider theme={theme}>
                    <Drawer 
                        anchor={'left'} 
                        open={state['left']} 
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </ThemeProvider>
            </React.Fragment>
        </div>
    );
}
