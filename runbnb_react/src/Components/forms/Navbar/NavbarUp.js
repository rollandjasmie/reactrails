import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';

export default class NavbarUp extends Component {
    render() {
        return (
            <>
                <header className="text-gray-700 body-font">
                  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                      <img className="w-40" src="./images/logo.jpg"></img>
                    </NavLink>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className="mr-5 hover:text-gray-900">Déjà partenaire ?</a>
                    </nav>
                    <form>
                    <div className="flex">
                   <button className="bg-white border-2 border-orange-500
                      rounded hover:bg-orange-500 hover:text-white text-orange-500 rounded shadow-lg px-4 py-2">Se connecter</button>
                      
                    </div>
                    
                    </form>
                  </div>
                </header>
            </>
        )
    }
}