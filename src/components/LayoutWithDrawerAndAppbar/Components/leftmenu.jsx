import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/CommonIcons';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Fragment } from 'react';
import LeftMenuItem from './LeftMenuItem';

const useStyles = makeStyles((theme) => {
  return {};
});

const LeftMenu = (props) => {
  //! State
  const classes = useStyles();
  const { t } = useTranslation();
  const { leftMenu } = props;

  //! Function

  //! Render
  return (
    <Fragment>
      {leftMenu.map((part, index) => {
        return (
          <List
            key={index}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {Object.keys(part)[0] || ''}
              </ListSubheader>
            }
          >
            <LeftMenuItem key={index} data={part[Object.keys(part)[0]]} level={1} />
          </List>
        );
      })}
    </Fragment>
  );
};

export default LeftMenu;
