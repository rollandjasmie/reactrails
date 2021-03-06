import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';

class Equipement extends React.Component {
  render() {
    return (
   <Formik
              initialValues={this.props.formValue.title}
              onSubmit={values => {
                 let { formValue, setFormValue } = this.props;
                 formValue = {...formValue, title: values};
                 setFormValue(formValue);

                 this.props.nextStep();
                 console.log(formValue)
              }}
          >
         {({ values, errors,handleSubmit, touched, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <div className="w-1/3  mt-5 pl-10 ml-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10 ">
                <p className="text-2ml font-bold  mb-10 ">Quels équipements proposez-vous ?</p>
                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="Bar"/>
                  Bar
                </label><br></br>


                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="Sauna"/>
                  Sauna
                </label><br></br>



                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="jardin" />
                  Jardin
                </label><br></br>


                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="Terrasse" />
                  Terrasse
                </label><br></br>


                <label>
                  <Field className="mr-1" type="checkbox" name="title"  value="Bain amous /jacuzzi"/>
                  Bain amous /jacuzzi
                </label><br></br>
                
                <label>
                  <Field className="mr-1" type="checkbox" name="title"  value="Connexion wifi gratuit"/>
                  Connexion wifi gratuit  
                </label><br></br>

                <label>
                  <Field className="mr-1" type="checkbox" name="title"  value="Climatisation"/>
                  Climatisation
                </label><br></br>

                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="plage" />
                  Plage
                </label><br></br>

                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="Borne de recharge pour voiture électrique" />
                  Borne de recharge pour voiture électrique
                </label><br></br>

                <label>
                  <Field className="mr-1" type="checkbox" name="title" value="Piscine" />
                  Piscine
                </label><br></br>
                
                <label>
                  <Field className="mr-1"  type="checkbox" name="title" value="Parking" />
                  Parking
                </label><br></br>


                <div className="flex items-end justify-end">
                  <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={this.props.previousStep}>Précedent</button>
                  <button  class="bg-orange-500 hover:bg-orange-700 text-white pl-6 pr-6 font-bold py-2 px-4 rounded" type="submit">Suivant</button>
              </div>
              </div> 
           

            </Form>
         )}
     </Formik>
    )
  }
}

export default Equipement;