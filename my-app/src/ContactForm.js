import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>First Name</label><br></br>
                <div>
                <Field 
                    name = 'firstName'
                    component = 'input'
                    type = 'text'
                    placeholder = 'First Name'
                />
                </div>
            </div>
            <div>
                <label>Last Name</label><br></br>
                <div>
                    <Field
                        name = 'lastName'
                        component = 'input'
                        type = 'text'
                        placeholder = 'Last Name' 
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field 
                        name = 'email'
                        component = 'input'
                        type = 'email'
                        placeholder = 'Email'
                    />
                </div>
            </div>
            <div>
                <label>Comments</label>
                <div>
                    <Field 
                        name = 'comments' 
                        component = 'textarea'
                        type = 'text'
                        placeholder = 'What would you like to say?'
                    />
                </div>
            </div>
            <div>
                <button type = 'submit' disabled = {pristine || submitting }>Submit</button>
            </div>
        </form>
    )
}

export default reduxForm ({
    form: 'simple',
})(ContactForm);