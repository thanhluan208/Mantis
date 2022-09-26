import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/CommonIcons';

import { ListItemButton, ListItemIcon, Collapse, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    expandIcon: {
      position: 'absolute',
      right: '10px',
    },
    buttonExpanded: {
      color: `${theme.custom.colors.darkblue} !important`,
    },
    buttonActive: {
      background: `${theme.custom.colors.lightblue} !important`,
      borderRight: `solid 2px ${theme.custom.colors.darkblue} !important`,
    },
    listItem: {
      '&:hover': {
        background: `${theme.custom.colors.lightblue} !important`,
      },
    },
  };
});

const LeftMenuItem = (props) => {
  //! State
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, level } = props;
  const [open, setOpen] = React.useState([]);
  const navigate = useNavigate();
  //! Function
  const handleExpand = (elm, index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
    {
      elm.path && navigate(elm.path);
    }
  };

  useEffect(() => {
    setOpen(data.map(() => false));
  }, []);

  //! Render
  return (
    <Fragment>
      {data.map((elm, index) => {
        return (
          <Fragment key={index}>
            <ListItemButton
              onClick={() => handleExpand(elm, index)}
              sx={{ pl: elm.icon ? level * 2 : level * 4 }}
              className={
                classes.listItem +
                ' ' +
                (open[index] ? classes.buttonExpanded : '') +
                ' ' +
                (!elm.children ? (open[index] ? classes.buttonActive : '') : '')
              }
            >
              {elm.icon && (
                <ListItemIcon sx={{ minWidth: '30px' }} className={open[index] ? classes.buttonExpanded : null}>
                  <elm.icon sx={{ fontSize: '18px' }} />
                </ListItemIcon>
              )}
              <CommonStyles.Typography variant="h6">{elm.label}</CommonStyles.Typography>
              {elm.children ? (
                open[index] ? (
                  <CommonIcons.ExpandLess className={classes.expandIcon} />
                ) : (
                  <CommonIcons.ExpandMore className={classes.expandIcon} />
                )
              ) : null}
              {elm.chip && <Chip label={elm.chip} className={classes.chip} />}
            </ListItemButton>
            {elm.children && (
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                {<LeftMenuItem data={elm.children} level={level + 1} />}
              </Collapse>
            )}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default LeftMenuItem;
