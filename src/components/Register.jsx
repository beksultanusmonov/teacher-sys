import { useState } from 'react';
import './Register.scss';

function Register() {
    const [menu, setMenu] = useState('login');
    const [errMes, setErrMes] = useState('');
    const [sucMes, setSucMes] = useState('');
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
                    <form action="#">
                        <h1 className="title">Hisobga kirish !</h1>
                        <label>
                            <span>username:</span>
                            <div className="input">
                                <input type="text" placeholder='usernamemingizni kiriting...' required/>
                                <i className="fa-solid fa-circle-user"></i>
                            </div>
                        </label>
                        <label>
                            <span>Parol:</span>
                            <div className="input">
                                <input type="password" placeholder='Parolingizni kiriting...' required/>
                                <i className="fa-solid fa-lock"></i>
                            </div>
                        </label>
                        <button>Davom etish</button>
                        <span>Sizda accaunt yo'qmi? <a href="#" onClick={() => setMenu('login')}>Yaratish</a></span>
                    </form>
                }
                {menu == 'login' &&
                    <form action="#">
                        <h1 className="title">Ro'yxatdan o'tish</h1>
                        <label>
                            <span>Ismingiz:</span>
                            <div className="input">
                                <input type="text" placeholder='Ismingini kiriting...' required/>
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </label>
                        <label>
                            <span>Familiyangiz:</span>
                            <div className="input">
                                <input type="text" placeholder='Familiyangizni kiriting...' required/>
                                <i className="fa-solid fa-id-badge"></i>
                            </div>
                        </label>
                        <label>
                            <span>username:</span>
                            <div className="input">
                                <input type="text" placeholder='username o`ylab kiriting...' required/>
                                <i className="fa-solid fa-circle-user"></i>
                            </div>
                        </label>
                        <label>
                            <span>Parol:</span>
                            <div className="input">
                                <input type="password" placeholder='Parol o`ylab kiriting...' required/>
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
