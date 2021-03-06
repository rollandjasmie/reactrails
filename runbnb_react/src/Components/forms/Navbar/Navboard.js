import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';

export default class Navboard extends Component {
    render() {
        return (
            <>
                <header className="text-gray-700 bg-white">
                  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-3 md:mb-0">
                      <img className="w-40" src="./images/logo.jpg"></img>
                 
                    </NavLink>
                      <button className="  bg-orange-500 rounded-lg hover:bg-orange-700 hover:text-white
                       text-white px-3 py-1  mx-5">Accueil du groupe</button>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <div className="flex">
                      <a href='/AjoutHebergements' className="no-underline border-2 border-blue-500  rounded-xl hover:bg-blue-500 hover:text-white
                       text-blue-500  px-4 mx-3">Ajouter un hébergement</a>
                 
                   <button className=" border-2 border-orange-500 rounded-xl hover:bg-orange-500 hover:text-white
                    text-orange-500  px-4 mx-3">Changer d'hébergement</button>
                     
                    </div>
                      </nav>
              
                  </div>
                </header>
            </>
        )
    }
}