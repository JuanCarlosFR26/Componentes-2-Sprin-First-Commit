import React from 'react';
import Title from '../Title/Title';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Enlaces from '../components/Enlaces';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import './Form.css';

const Form = ()=>{

    return(
        <div className='form'>
            <Title />
            <div className='email'>
                <Label text='Email'/>
            </div>
            
            <Input 
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'email',
                placeholder: 'Introduce tu correo'
            }}
            />
            <div className='pass'>
                <Label text='Contraseña'/>
            </div>
            <Input
            attribute={{
                id: 'password',
                name: 'password',
                type: 'password',
                placeholder: 'Introduce tu contraseña'
            }} 
            />
            <Input
            attribute={{
                id: 'check',
                name:'check',
                type:'checkbox',
                placeholder: 'none'
            }}
            />
            <span className='chk'>
                <Label text='Recuérdame'/>
            </span>
            
            <Enlaces/>
            <Button />
            <div className='footer'>
                <Footer/>
            </div>
            
        </div>
    )
};

export default Form;