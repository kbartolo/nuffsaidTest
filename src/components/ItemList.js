import React, { useState } from 'react';
import { styled} from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ArrowRight from '@material-ui/icons/ArrowRight';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
  
  const CustomListItem = styled(ListItem)({
    borderRadius: 4,
    margin: '4px 0',
  });
  
  const CustomListItemAvatar = styled(ListItemAvatar)({
    minWidth:'10px !important',
  });

const ItemList = ({ item, backgroundColor, onClick }) => {

  const removeItem = (item) => {
    onClick(item);
  }

  return (
      <CustomListItem style={{ backgroundColor }}>
          <CustomListItemAvatar>
              <ArrowRight />
          </CustomListItemAvatar>
          <ListItemText primary={item} />
          <ListItemSecondaryAction  onClick={() => {
            removeItem(item);
          }}>
          <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
          </IconButton>
          </ListItemSecondaryAction>
      </CustomListItem>
  );
};

ItemList.propTypes = {
  onClick: () => {},
};

export default ItemList