import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState('login');
    const [errMes, setErrMes] = useState('');
    const [sucMes, setSucMes] = useState('');
    const [form, setForm] = useState({name: '', lastname: '', username: '', pass: '', cpass: ''})
    const [login, setLogin] = useState({username: '', pass: ''});
    localStorage.setItem('user', '')
    

    const MessageInterface = (type, message) => {
        setSucMes('')
        setErrMes('')
        if(type == 'success'){
            setSucMes(message)
            setInterval(() => {
                setSucMes('')
            }, 4000)
        } else if(type == 'error'){
            setErrMes(message)
            setInterval(() => {
                setErrMes('')
            }, 4000)
        }
    }

    const EnterForm = (e) => {
        e.preventDefault()  
        const users = JSON.parse(localStorage.getItem('alluser'))
        let logins = '';
        if(users == null){
            MessageInterface('error', "Hali hech qanday foydalanuvchi yo'q")
        } else{
            users.forEach((data) => {
                if(data.username == login.username && data.pass == login.pass){
                    logins = data;
                }
            })
            if(logins == ''){
                MessageInterface('error', "username yoki parol xato !")
            } else{
                MessageInterface('success', "kiridingiz")
                localStorage.setItem('user', JSON.stringify(logins.id))
                navigate('/main/')
            }
        }
    }

    const handleInput = (e) => {
        form[e.target.name] = e.target.value;
        setForm(form)
    }

    const handleLogin = (e) => {
        login[e.target.name] = e.target.value;
        setLogin(login);
    }
    


    const SubmitForm = (e) => {
        e.preventDefault();
        if(form['cpass'] != form['pass']){
            MessageInterface('error', "Tasdiq parol xato !")
        } else{
            const lastUsers = localStorage.getItem('alluser');
            if(lastUsers == null){
                let users = [];
                const createForm = {
                    id: 101,
                    name: form['name'],
                    lastname: form['lastname'],
                    username: form['username'],
                    pass: form['pass'],
                    img: '',
                    posts: [],
                    bio: '',
                    email: '',
                    rating: 0,
                }
                users.push(createForm)
                localStorage.setItem('alluser', JSON.stringify(users));
                create.reset();
                MessageInterface('success', "Accaunt yaratildi !")
            } else{
                const oldUsers = JSON.parse(localStorage.getItem('alluser'));                
                let check = oldUsers.filter((data) => {
                    if(data.username == form['username']){
                        return 'yes'
                    }
                })
                if(check.length == 0){
                    const createForm = {
                        id: 100 + (oldUsers.length + 1),
                        name: form['name'],
                        lastname: form['lastname'],
                        username: form['username'],
                        pass: form['pass'],
                        img: '',
                        posts: [],
                        bio: '',
                        email: '',
                        rating: 0,
                    }
                    oldUsers.push(createForm);
                    localStorage.setItem('alluser', JSON.stringify(oldUsers));
                    create.reset();
                    MessageInterface('success', "Accaunt yaratildi !")
                } else{
                    MessageInterface('error', "Bu username band !")
                }
            }
        }
    }





  return (
    <div className="register">
        <div className="form">
            <div className="info">
                {sucMes && 
                    <div className="succes_mes">{sucMes}</div>
                }
                {errMes && 
                    <div className="error_mes">{errMes}</div>
                }
                {menu == 'signin' && 
                    <form onSubmit={EnterForm} method='post'>
                        <h1 className="title">Hisobga kirish !</h1>
                        <label>
                            <span>username:</span>
                            <div className="input">
                                <input type="text" placeholder='username kiriting...' name='username' onChange={handleLogin} required />
                                <i className="fa-solid fa-circle-user"></i>
                            </div>
                        </label>
                        <label>
                            <span>Parol:</span>
                            <div className="input">
                                <input type="password" placeholder='Parol kiriting...' name='pass' onChange={handleLogin} required />
                                <i className="fa-solid fa-lock"></i>
                            </div>
                        </label>
                        <button>Davom etish</button>
                        <span>Sizda accaunt yo'qmi? <a href="#" onClick={() => setMenu('login')}>Yaratish</a></span>
                    </form>
                }
                {menu == 'login' &&
                    <form onSubmit={SubmitForm} name='create' method='post'>
                        <h1 className="title">Ro'yxatdan o'tish</h1>
                        <label>
                            <span>Ismingiz:</span>
                            <div className="input">
                                <input type="text" placeholder='Ismingini kiriting...' name='name' onChange={handleInput} required/>
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </label>
                        <label>
                            <span>Familiyangiz:</span>
                            <div className="input">
                                <input type="text" placeholder='Familiyangizni kiriting...' name='lastname' onChange={handleInput} required/>
                                <i className="fa-solid fa-id-badge"></i>
                            </div>
                        </label>
                        <label>
                            <span>username:</span>
                            <div className="input">
                                <input type="text" placeholder='username o`ylab kiriting...' name='username' onChange={handleInput} required/>
                                <i className="fa-solid fa-circle-user"></i>
                            </div>
                        </label>
                        <label>
                            <span>Parol:</span>
                            <div className="input">
                                <input type="password" placeholder='Parol o`ylab kiriting...' name='pass' onChange={handleInput} required/>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                        </label>
                        <label>
                            <span>Tasdiq Parol:</span>
                            <div className="input">
                                <input type="password" placeholder='Parolni takrorlanng...' name='cpass' onChange={handleInput} required/>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                        </label>
                        <button>Davom etish</button>
                        <span>Sizda accaunt bormi? <a href="#" onClick={() => setMenu('signin')}>Kirish</a></span>
                    </form>
                }
            </div>
            <div className="image">
                <img src="./illustration/register.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Register
