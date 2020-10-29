import React, { Component } from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import axios from 'axios';

export class Confirm extends Component {
  state={
  user:null
  }
componentDidMount(){
    const { user } = this.props;
    axios.get(`/users/${user.id}`).then(response => { this.setState({
      user:response.data.user
    })
      }
        )
}
 
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };


  back = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  
  render() {
    if (this.state.user) {

    return (
        <>
        
           <List>
              <ListItem>
                <ListItemText primary="Prenom et Nom" secondary={this.state.user.name}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Sexe" secondary={this.state.user.sexe} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date De Naissance" secondary={this.state.user.date_of_birth} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={this.state.user.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Numero De Tel" secondary={this.state.user.mobile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Piece"  />
              </ListItem>
                <ListItem>
                <ListItemText primary="Adresse" secondary={this.state.user.adresse} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Numero D'urgence" secondary={this.state.user.urgence} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Edit</Button>

          
       
        </>
 
    );
    } else {
      return null
    }

  }
}

const mapStateToPropos=(state) =>{
  return{
    ...state.auth
  }
}
export default connect(mapStateToPropos) (Confirm);