import React from 'react'
import { Field, reduxForm } from 'redux-form'

 function LogIn(props) {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
             <Field name="email"  component="input" type="text" label="E-MAIL" />
        </form>
    )
}

export default reduxForm({
    form:'login',
})(LogIn)