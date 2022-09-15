import React from "react";
import './signup.css';
import form_content from "../static/form_components";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {Link} from 'react-router-dom'
import userData from '../static/data'

function SignUp(){
    const validationSchema = yup.object().shape(
            {
                full_name: yup.string().required().min(5),
                email: yup.string().required("Please enter a valid email"),
                password: yup.string().required("Please enter a valid password").matches(
                    /^.{8,}$/,
                    "Must contain 8 characters or more"
                ),
            }
        )
    const {
        register,
        handleSubmit,
        formState: {errors}} = useForm({
            resolver: yupResolver(validationSchema),
        });

    const onSubmit = (data) => {
        let user ={
            fullname: data.full_name,
            email: data.email,
            password: data.password,
            user_type: document.getElementById("user_type").value,
        }
        userData.push(user);
        console.log(userData);
        console.log("SignUp Successful");
    }
    return(
        <div className="form_container">
            <h2>Sign up</h2>
            <p>Already have an account? <Link to="/signin">Log in here</Link></p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {form_content.inputs.map((input, key)=>{
                    return(
                        <div key={key} className="input_container">
                            <label htmlFor={input.name} id={input.name}>{input.label}</label>
                            <input type={input.type} name={input.name} {...register(input.name)} />
                            <span className="error">{errors[input.name]?.message}</span>
                        </div>
                    )
                })}
                <div className="input_container">
                    <label htmlFor="user_type">User type</label>
                    <select name="user_type" id="user_type">
                        <option value="developer">Developer</option>
                        <option value="owner">Owner</option>
                    </select>
                </div>
                <input type="submit" value="Sign up"/>
            </form>

            <p className="back_home"><Link to='/'>&laquo; Back home</Link></p>
        </div>
    )
}

export default SignUp
