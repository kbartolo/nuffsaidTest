import React, { Component } from 'react';
import { func } from 'prop-types';
import { styled} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Api from '../api';

const CustomButton = styled(Button)({
  marginRight: '4px !important',
  backgroundColor: '#88FCA3 !important',
  color:'#000000 !important',
  fontWeight: 'bold !important',
});

class MessageList extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    }, () => {
      this.props.handleMessages(messages);
    })
  }

  handleClear(){
    this.api.stop();
    this.setState({messages: []});
    this.props.handleClear(true);
  }

  renderButtons() {
    const isApiStarted = this.api.isStarted()
    return (
      <div>
        <CustomButton
          variant="contained"
          onClick={() => {
            if (isApiStarted) {
              this.api.stop()
            } else {
              this.api.start()
            }
            this.forceUpdate()
          }}
        >
          {isApiStarted ? 'Stop' : 'Start'}
        </CustomButton>
        <CustomButton variant="contained"  onClick={() => {this.handleClear()}}>
          Clear
        </CustomButton>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}

MessageList.propTypes = {
  handleMessages: func,
  handleClear: func,
};

export default MessageList
