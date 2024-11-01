import { useNavigate, useParams } from 'react-router-dom'
import './Home.scss'
import { useState } from 'react';

function User() {

    const navigate = useNavigate();
    const [edit, setEdit] = useState(false) 
    const params = useParams();
    

  return (
    <section className="profil">
    <div className="return_u">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate('/main/')}></i>
    </div>
      <div className="main_p">
          <div className="logo_p">
            <img src="../../persons/user.jpg" alt="" />
          </div>
          <div className="info_p">
            <h1>Beksulton Usmonov</h1>
            <p><i className='fa-solid fa-address-book'></i> username: beksultonusmonov</p>
            <p><i className='fa-solid fa-comment-dots'></i> bio: Informatika va Inovatsiyalar vazirligi mukofoti sovrindori</p>
          </div>
      </div>
      <div className="posts_p">
        <h1>Barcha Yuklanmalar:</h1>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Nomi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Rektorga tayyorlagan telekamunikatsiya ishim</td>
              <td>
                {/* <a><i className="fa-solid fa-download"></i></a> */}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Elektr energiyasi saqlash to'grisidagi</td>
              <td>
                {/* <a><i className="fa-solid fa-download"></i></a> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default User
