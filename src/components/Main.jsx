import { useState } from 'react';
import './Main.scss';
import { Link, Outlet } from 'react-router-dom';

function Main() {
  const [hide, setHide] = useState(false)


  return (
    <main className="main">
      <header className="head">
        <div className={hide ? "ver-menu hide" : "ver-menu"}>
          <div className={hide ? "logo hide" : "logo"}>
            <i className="fa-solid fa-book"></i>
            <h1>Uztozlar Tizimi</h1>
          </div>
            <i className='fa-solid fa-xmark back' onClick={() => setHide(false)}></i>
          <nav className={hide ? 'hide' : ''}>
            <Link to='/main/'>
              <i className="fa-solid fa-home"></i>
              <span>Reyting bo'lim</span>
            </Link>
            <Link to='/main/profil'>
              <i className="fa-solid fa-user"></i>
              <span>Profil</span>
            </Link>
          </nav>
        </div>
        <div className={hide ? "menu active" : "menu"}>
          <div className="bars" onClick={() => hide ? setHide(false) : setHide(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link to="/main/profil" className="profil">
            <i className='fa-solid fa-circle-user'></i>
            <span>Usmonov B.</span>
          </Link>
        </div>
      </header>
      <div className={hide ? "info active" : "info"}>
        <Outlet />
      </div>
    </main>
  )
}

export default Main
