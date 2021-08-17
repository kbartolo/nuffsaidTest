import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';

import { styled } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import ErrorList from './components/ErrorList';
import WarningList from './components/WarningList';
import InfoList from './components/InfoList';
import AlertBar from './components/AlertBar';
import MessageList from './components/MessageList';

const FlexContainer = styled(Container)({
  flexGrow: 1,
  display:'flex  !important',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop:'5em'
});

const Wrapper = () => {

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [clear, setClear] = useState(false);

  const handleMessages = (messages) => {
    if(!isEmpty(messages)){
      const lastMessage = messages[messages.length - 1];
      setVisible(lastMessage);
      setData(lastMessage);
    }
  }

  const handleClear = (clear) => {
    setClear(clear);
  }

  return (
    <div>
      {visible && <AlertBar data={data} /> }
      <FlexContainer>
          <MessageList handleMessages={handleMessages} handleClear={handleClear}/>
      </FlexContainer>
        <FlexContainer>
          <ErrorList sentMessage={data.priority===1 ? data.message:''} clear={clear}/>
          <WarningList sentMessage={data.priority===2 ? data.message:''} clear={clear}/>
          <InfoList sentMessage={data.priority===3 ? data.message:''} clear={clear}/>
        </FlexContainer>
    </div>
  );
};

export default Wrapper;

ReactDOM.render(<Wrapper />, document.getElementById('root') || document.createElement('div'));