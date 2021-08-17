import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { styled} from '@material-ui/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import TitleList from './TitleList';
import ItemList from './ItemList';
  
const MyGrid = styled(Grid)({
    padding:'0.4em'
});
  
const InfoList = ({ sentMessage, clear }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(!isEmpty(sentMessage)){
            setMessages([...messages.slice(),sentMessage])
        }
      }, [sentMessage]);

    useEffect(() => {
        if(clear){
            setMessages([]);
        }
    }, [clear]);

    const removeMessage = (elm) => {
        messages.splice(elm, 1);
    }

    return (
        <MyGrid item xs={12} md={3}>
            <TitleList title="Info Type 3"></TitleList>
            <span>Count {!isEmpty(messages)  && messages.length}</span>
            <div>
                {!isEmpty(messages)  && (
                    <List>
                        {messages.map((elm, i) => {
                            return <ItemList key={i} item={elm} onClick={() => { removeMessage(i)}} backgroundColor="#88FCA3"/>;
                        })}
                    </List>
                )}
                {isEmpty(messages)  && (
                    <p>No Info messages</p>
                )}
            </div>
        </MyGrid>
    );
};
        
export default InfoList;