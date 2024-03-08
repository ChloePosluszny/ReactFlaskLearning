import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function PinnedSubheaderList({list, heading}) {

  const getItem = (item) => {
    return `• ${item}`
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
        <li>
            <ul>
            <ListSubheader>{heading}</ListSubheader>
            {list.map((item) => (
                <ListItem key={item}>
                <ListItemText primary= {getItem(item)} />
                </ListItem>
            ))}
            </ul>
        </li>
    </List>
  );
}