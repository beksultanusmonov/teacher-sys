import { useState } from 'react'
import './Profil.scss'

function Profil() {

  const [edit, setEdit] = useState(false)

  return (
    <section className="profil">
      <div className="main_p">
          <div className="logo_p">
            <img src="../persons/user.jpg" alt="" />
          </div>
          <div className="info_p">
            <h1>Beksulton Usmonov</h1>
            <p><i className='fa-solid fa-address-book'></i> username: beksultonusmonov</p>
            <p><i className='fa-solid fa-envelope'></i> email: beksultonusmonov@gmail.com</p>
            <p><i className='fa-solid fa-comment-dots'></i> bio: Informatika va Inovatsiyalar vazirligi mukofoti sovrindori</p>
            <p><i className="fa-regular fa-window-restore"></i> Yuklanmalar: 3</p>
          </div>
      </div>
      <div className="operation_p">
        <button onClick={() => setEdit(true)}><i className="fa-solid fa-edit"></i> Tahrirlash</button>
      </div>
      {edit &&
      <div className="editform_p">
        <div className="backs">
          <i className="fa-solid fa-xmark" onClick={() => setEdit(false)}></i>
        </div>
        <h1>Malumotlarni tahrirlash:</h1>
        <form>
          <div className="forms">
          <label>
            <span>Ism:</span>
            <input type="text" value="Beksulton" />
          </label>
          <label>
            <span>Familiya:</span>
            <input type="text" value="Usmonov" />
          </label>
          <label>
            <span>username:</span>
            <input type="text" value="beksultonusmonov" />
          </label>
          <label>
            <span>email:</span>
            <input type="email" value="beksultonusmonov@gmail.com" />
          </label>
          <label>
            <span>eski parol:</span>
            <input type="password" placeholder='Parolni kiriting...' />
          </label>
          <label>
            <span>yangi parol:</span>
            <input type="password" placeholder='Parolni kiriting...' />
          </label>
          <label>
            <span>bio:</span>
            <input placeholder='Bio yozing...' value="Informatika va Inovatsiyalar vazirligi mukofoti sovrindori" />
          </label>
          </div>
          <button>Saqlash</button>
        </form>
      </div>
      }
      <div className="posts_p">
        <h1>Barcha Yuklanmalar:</h1>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Nomi</th>
              <th>Operatsiya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Birinchi kurs paytdagi texnologik ishim</td>
              <td>
                <i className="fa-solid fa-trash"></i>
                <i className="fa-solid fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rektorga tayyorlagan telekamunikatsiya ishim</td>
              <td>
                <i className="fa-solid fa-trash"></i>
                <i className="fa-solid fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Elektr energiyasi saqlash to'grisidagi</td>
              <td>
                <i className="fa-solid fa-trash"></i>
                <i className="fa-solid fa-download"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Profil
