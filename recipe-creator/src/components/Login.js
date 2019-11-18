import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Login({ values, errors, touched, status }) {
    const [login, setLogin] = useState([]);

    useEffect(() => {
        status && setLogin(login => [...login, status])
    }, [status]);

    return (
        <div className='login-form'>
            <Form>
                <Field type='text' name='email' placeholder='Email' />
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='password' name='password' placeholder='Password' />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='checkbox' name='terms' checked={values.terms}/>
                {touched.terms && errors.terms && <p>{errors.terms}</p>}
                <button type='submit'>Submit!</button>
            </Form>
            {/* {login.map(user => (
                <div key={user.id}>
                    <p>email: {user.email}</p>
                    <p>password: {user.password}</p>
                </div>
            ))} */}
        </div>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({ email, password, terms }) {
        return {
            email: email || '',
            password: password || '',
            terms: terms || false
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Not a valid email address. Check your spelling, poindexter.')
            .required('Your email address is required. Expect tons of spam.'),
        password: Yup.string()
            .min(6, 'Whoa buddy, that is not very secure. Make your password at least 6 characters long.')
            .max(16, 'We understand you love security, but that password is way too long.')
            .required('A password is required. Please refrain from using your birthday.'),
        terms: Yup.bool()
            .oneOf([true], 'Must Accept Terms of Service, even if you do not read them.')
    }),

    handleSubmit(values, { setStatus, resetForm}) {
        axios
            .post('', values)
            .then(response => {
                console.log(response.data);
                setStatus(response.data);
                resetForm();
            })
            .catch(error => {
                console.log('Ya done goofed, kiddo.', error);
            })
    }
})(Login);

export default FormikLogin;