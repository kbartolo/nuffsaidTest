import React from 'react';
import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const TypographyTitle = styled(Typography)({
    fontWeight: 'bold !important',
    margin: '4 0',
  });

const TitleList = props => {
    const { title } = props;
    return (
        <TypographyTitle variant="h6">{title}</TypographyTitle>
    )
}

export default TitleList;