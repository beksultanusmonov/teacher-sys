import './Main.scss';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

function Main() {
  const [hide, setHide] = useState(false)
  const navigate = useNavigate();
  const user = +localStorage.getItem('user');
  const [userData, setUserData] = useState({});
  const numRegEx = /^[0-9]$/;
  
  const getData = () => {
    if(user == 0){
      navigate('/')
    } else{
      const alluser = JSON.parse(localStorage.getItem('alluser'));
      alluser.forEach(data => {
        if(data.id == user){
          setUserData(data);
        }
      })  
    }
  }

  useEffect(() => {
    getData();
  }, [])

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
          <Link className={hide ? "back_m hide" : "back_m"} to="/">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Chiqish</span>
          </Link>
        </div>
        <div className={hide ? "menu active" : "menu"}>
          <div className="bars" onClick={() => hide ? setHide(false) : setHide(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link to="/main/profil" className="profil">
            <i className='fa-solid fa-circle-user'></i>
            <span>{`${userData.lastname} ${userData.name}`}</span>
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
