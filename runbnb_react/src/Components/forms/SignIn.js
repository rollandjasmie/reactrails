import React, { Component } from 'react';
import axios from '../../axios'
import Navbarin from './Navbar/Navbarin';
import { connect } from 'react-redux';
import { userLoginAttempt } from '../../redux/Auth/auth.action';

class SignIn extends Component {
      
    constructor(props) {
        super(props);
        this.state = { 
          name:'',
          first_name: '',
          email: '',
          mobile:'',
          date_of_birth:'',
          password: '',
          erros:null
        };
    }

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };
    
    handleSubmit = (event) => {
        event.preventDefault()
      axios.post('/users',this.state)
      .then(response => {
        if (response.data.email === "Email déjà existé") {
            this.setState({
              erros:response.data.email
            })
        }else{
          const values = {
            email: this.state.email,
            password:this.state.password 
          }
           this.props.userLoginAttempt(values)
           
          }
      })
    };

    render() {
      const today = new Date();
        const {first_name,name,date_of_birth, email, password,mobile} = this.state
    return (
      
        <>
           <Navbarin/>
            <div className="flex bg-white">
              <div className=" flex w-4/6 py-40 px-10">
                <h1 className="text-5xl w-4/6  font-bold ">Inscrivez votre <span className="text-orange-500">hébergement</span> sur Runbnb.com</h1>
              </div>
            
              <div className="  w-2/6 py-10 ">
                <div className=" w-11/12 bg-gray-100 border rounded ">
                
                    <form onSubmit={this.handleSubmit} className=" px-10">
                      <h1 className="block tracking-wide text-gray-700 text-xl font-bold mb-2 my-5">Créer un profil partenaire</h1>
                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-2" for="grid-city" >
                         Nom
                        </label>
                        <input required className=" w-full  appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nom"onChange={this.handleChange}   name="name" value={name}/>

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city" >
                       Prénom
                        </label>
                        <input required className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Prénom "onChange={this.handleChange}    name="first_name"  value = {first_name}/>

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                         Adresse e-mail
                        </label>
                        <input required type="email" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Adresse e-mail "onChange={this.handleChange}   name="email" value={email}/>
                         <label className="block tracking-wide text-gray-500 text-xs my-3 " for="grid-city">
                         Entrez une adresse e-mail valide
                        </label>
                        <label  className="block tracking-wide text-red-500 text-xs my-3 " for="grid-city">
                         {this.state.erros}
                        </label>
                        <label  className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city" >
                        Numéro de téléphone
                        </label>
                        <input required type="tel" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Téléphone "onChange={this.handleChange}   name="mobile" value={mobile} />
                           <label className="block tracking-wide text-gray-500 text-xs my-3 " for="grid-city">
                           Entrez une numéro de téléphone valide
                        </label>

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                        Date de naissance 
                        </label>
                        <input required type="date" min="1940-01-01" max="2022-01-02" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Date de naissance "onChange={this.handleChange}    name="date_of_birth" value={date_of_birth} />

                        <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 my-8" for="grid-city">
                        Mot de passe 
                        </label>
                        <input required  type="password" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                         px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={this.handleChange}  placeholder=" Mot de passe  " name="password" value={password}/>                                                                                  

                        <button className="w-full appearance-none block  bg-orange-500 text-white rounded py-3
                         px-4 my-10 leading-tight focus:outline-none hover:font-bold" > Commencer </button> 

                         <p className="text-xs flex text-center my-5">Vous  avez déja un compte ? Cliquez ici pour poursuivre l’inscription</p> 
                    </form>
                </div>
              </div>
              
            </div>        
      </>
    );
  }
}
 const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginAttempt: (email,password) => {dispatch(userLoginAttempt(email,password))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);