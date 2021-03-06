import React from 'react';

/*import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';*/
import InformationLogements from '../Logements/InformationLogements';
import Localisation from '../Logements/Localisation';
import Chambres from '../Logements/Chambres';
import Regle from '../Logements/Regle';
import MapContainers from '../Logements/MapContainers'
// import Map from '../Logements/Map';
import StepProgress from './components/StepProgress';
import Equipement from '../Logements/Equipement';
import CalendrierContainer from '../Logements/CalendrierContainer';
import Conditions from '../Logements/Conditions'
import axios from '../../axios'

import ShowUser from '../Logements/ShowUser'


import Uploadphoto from "../Logements/Uploadphoto";
import InformationHeb from "../Logements/InformationHeb";
import InfoRunbnb from '../Logements/InfoRunbnb';
import PageCharte from '../Logements/PageCharte';
import history from '../../history';


export default function CustomizedSteppers() {


  const [activeStep, setActiveStep] = React.useState(0);



  const [formValue, setFormValue] = React.useState({
    hebergement: {
      name: '',
      types: '',
      categorie: '',
    },
    localisation:{
      pays: 'La Réunion',
      ville: '',
      adresse:'',
      code: '',
    },
    map:{
      longitude:55.53817922704148,
      latitude:-21.121661209928707
    },
  
    canapes: {
      canapes: [
        {
          checked: false,
          quantite: 0,
          name: " Canapés"
        },
        {
          checked: false,
          quantite: 0,
          name: "Canapés lits"
        }

      ]
    },
    autres: {
      autres: [
        {
          checked: false,
          quantite: 0,
          name: "Lit Simple"
        },
        {
          checked: false,
          quantite: 0,
          name: "Lit Double"
        },
        {
          checked: false,
          quantite: 0,
          name: "Lit Famille"
        }
      ]
    },

    title: {},
    
    photo:{},
    regles: {
        regle: [],
        arrive1:'',
        arrive2:'',
        depart1:'',
        depart2:'',
      },
    date:{
       startDate:"",
       endDate:"",
    },
    conditions: {},
    Lits:
    {
      Lits: [
        {
          checked: false,
          quantite: 0,
          name: "Lit Double"
        },
        {
          checked: false,
          quantite: 0,
          name: "Lit Simple"
        },
        {
          checked: false,
          quantite: 0,
          name: "Lit King-size"
        },
        {
          checked: false,
          quantite: 0,
          name: "Lit Superposé"
        },
        {
          checked: false,
          quantite: 0,
          name: "Canapé lit"
        },
        {
          checked: false,
          quantite: 0,
          name: "Canapé lit double"
        },
        {
          checked: false,
          quantite: 0,
          name: "Futon"
        }

      ]
    }

  
  });

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  

  const previousStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let adresse1 = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 8);
  };
  let nom1 = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 9);
  };
  let map1 = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 7);
  };
  // let li1 = null;
  // let li2 = null;
  // let lit3 = null;
  // let lit = Object.values(formValue.Lits.Lits).map((el,id) => {
  //   id ++
  //   li1 = el
  // })
  // console.log(li1);
  // formValue.Lits.map((index) => console.log(index.name)) 
  const saveHebergement = () => {
    // // [formValue, setFormValue]

    
    // console.log(formValue.photo);

    
    // let images = new FormData(formValue.photo);
    // images.append('photo', formValue.photo);
   
    const form = {
       hebergement: formValue.hebergement,
      localisation: formValue.localisation,
      map: formValue.map,
      Lits: formValue.Lits.Lits,
      canapes: formValue.canapes.canapes,
      autres: formValue.autres.autres,
      equipement: formValue.title,
      regles: formValue.regles,
      conditions: formValue.conditions,
      date: formValue.date,
     }
    axios.post('/logements',form).then(response => {
      history.push('/Dashboard')
    })
  }

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <InformationLogements 
                  nextStep={nextStep}
                  formValue={formValue}
                  setFormValue={setFormValue}/>;
      case 1:
        return <Localisation
                  previousStep={previousStep}
                  nextStep={nextStep}
                  formValue={formValue}
                  setFormValue={setFormValue}/>;
      case 2:
        return <MapContainers 
                previousStep={previousStep}
                nextStep={nextStep}
                formValue={formValue}
                setFormValue={setFormValue}
                   />;
       
     
      case 3:  
              return  <Chambres
                  previousStep={previousStep}
                  nextStep={nextStep}
                  formValue={formValue}
                  setFormValue={setFormValue}
                  /> 
       

      case 4:
        return <Equipement
        previousStep={previousStep}
        nextStep={nextStep}
        formValue={formValue}
        setFormValue={setFormValue}/>

        case 5:
              return   <Regle
              previousStep={previousStep}
              nextStep={nextStep}
              formValue={formValue}
              setFormValue={setFormValue}
              />;    
        case 6:
              return  (<Uploadphoto
              previousStep={previousStep}
              nextStep={nextStep}
              formValue={formValue}
              setFormValue={setFormValue} />) ;
      
        
        case 7:
              return <Conditions
              previousStep={previousStep}
              nextStep={nextStep}
              formValue={formValue}
              setFormValue={setFormValue}
              />
        case 8:
            return <CalendrierContainer
            previousStep={previousStep}
            nextStep={nextStep}
            formValue={formValue}
            setFormValue={setFormValue}/>    
        case 9:
              return <InformationHeb
            previousStep={previousStep}
            nextStep={nextStep}
            formValue={formValue}
            adresse1={adresse1}
            nom1={nom1}
            map1={map1}
                />
        
        case 10:
             return <InfoRunbnb
             previousStep={previousStep}
            nextStep={nextStep}/>
        
       case 11:
              return <PageCharte
              saveHebergement = {saveHebergement}
              />     

    }
  }

  const stepList = [
  
    {
      title: 'Nom et emplacement',
      sections: [{
        step: 0
      }, {
        step: 1
      }, {
        step: 2
      }]
    }, 
    
    {
  
      title: "Configuration de l'hébergement",

      sections: [{
        step: 3
      }, {
        step: 4
      }, {
        step: 5
      }]
    },

     {
  
      title: "Photos",

      sections: [{
        step: 6
      }]
    },
    
    {
     title: "tarifs et calendrier",
        sections: [{
          step: 7
        },
        {
        step: 8
      }]
    },
    {
  
      title: "Révision et finalisation",

      sections: [{
        step: 9
      },{
        step: 10
      },{
        step: 11
      }]
    }

    
  
  


    
  
  ]

  return (
    <>
      <StepProgress stepList={stepList} activeStep={activeStep} />
      { getStepContent() }
    </>
  );
}


