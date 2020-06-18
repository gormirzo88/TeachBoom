import React, { useState, useRef} from 'react';
import { useForm } from 'react-hook-form';
import IntlTelInput from 'react-bootstrap-intl-tel-input'
import {useDispatch} from "react-redux";
import {pushInfo} from "../../store/actions/infoActions";



const CreateForm = () => {
    const [phoneNumber, setCount] = useState(0);
    const {register, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const myFormRef = useRef();

    const onSubmit = (data) => {
        const time = new Date();
        const yearBird = data.age.split('-')[0];
        const age = yearBird < 2020 ? time.getFullYear() - yearBird: '-';

        data.age = age;
        data.phoneNumber = phoneNumber;
        data.id = Date.now();
        dispatch(pushInfo(data));
        myFormRef.current.reset();
        setCount(0);
    };


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Form</h1>
                    <h3 className='text-center text-muted'>Registration Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)} ref={ myFormRef }>
                        <label htmlFor="FirstName">Name</label>
                        <div className="form-row">
                            <div className="form-group col-lg-6">
                                <input type="text"  className="form-control" id="FirstName" name='FirstName' placeholder="First"
                                       ref={register} required/>
                                {errors.password && <p>asdasd</p>}

                            </div>
                            <div className="form-group col-lg-6">
                                <input type="text" className="form-control" id="LastName" name="LastName" placeholder="Last"
                                       ref={register} required/>

                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" className="form-control" id="Email" name="Email"placeholder="Email"
                                   ref={register} required/>
                        </div>


                        <div className="form-group">
                            <label>Phone Number</label>
                            <IntlTelInput preferredCountries={['AM']}
                                          defaultCountry={'AM'}
                                          onChange={ (e)=> setCount(e.intlPhoneNumber)}
                                          />
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Birth data</label>
                            <div className="">
                                <input className="form-control" type="date" id="age"
                                       name='age'
                                       ref={register}
                                       required
                                        />
                            </div>
                        </div>
                        <div className="form-group ">
                            <label >Gender</label>
                            <div className="form-check ">
                                <input className="form-check-input" type="radio" name="gender"
                                       id="exampleRadios1" value="male"
                                       ref={register} required/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Male
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender"
                                       id="exampleRadios2" value="female"
                                       ref={register} required />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                       Female
                                    </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary col-lg-12">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default CreateForm;
