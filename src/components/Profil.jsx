import './Profil.scss'
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

function Profil() {
  const [errMes, setErrMes] = useState('');
  const [sucMes, setSucMes] = useState('');
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate();
  const user = +localStorage.getItem('user');
  const [userData, setUserData] = useState({});
  const [refresh, setRefresh] = useState(0)
  const [editForm, setEditForm] = useState({name: '', lastname: '', username: '', email: '', oldpass: '', newpass: '', img: '', bio: ''})
  const [post, setPost] = useState({id: 1, name: ''})
  const [myposts, setMyposts] = useState(false);
  const numRegEx = /^[0-9]$/;

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
  
  const getData = () => {
    if(user == 0){
      navigate('/')
    } else{
      const alluser = JSON.parse(localStorage.getItem('alluser'));
      alluser.forEach(data => {
        if(data.id == user){
          setUserData(data);
          setMyposts(data.posts)
          setEditForm({name: data.name,
            lastname: data.lastname,
            email: data.email,
            username: data.username,
            bio: data.bio,
            oldpass: '', newpass: '', img: ''})
        }
      })
    }
  }

  
  const handleInput = (e) => {
    editForm[e.target.name] = e.target.value;
    setEditForm(editForm);
  }
  
  

  const EditForm = (e) => {
    e.preventDefault();
    if(editForm.oldpass.length != 0){
      if(editForm.oldpass == userData.pass){
        if(editForm.newpass.length == 0){
          MessageInterface('error', "Yangi parol kiritmadingiz")
        } else{
          if(editForm.email.length == 0){
            const formData = {
              id: userData.id,
              name: editForm.name,
              lastname: editForm.lastname,
              email: editForm.email == '' ? userData.email : editForm.email,
              username: editForm.username,
              bio: editForm.bio,
              pass: editForm.newpass == '' ? userData.pass : editForm.newpass,
              img: editForm.img == '' ? userData.img : editForm.img,
              posts: userData.posts,
              rating: userData.rating,
            }
            const oldusers = JSON.parse(localStorage.getItem('alluser'));
            let newusers = [];
            oldusers.forEach((item) => {
              if(item.id == userData.id){
                newusers.push(formData)
              } else{
                newusers.push(item)
              }
            })
            localStorage.setItem('alluser', JSON.stringify(newusers))
            MessageInterface('success', "Malumot yangilandi !")
            setRefresh(refresh + 1)
          } else{
            console.log(editForm.email);
          }
        }
      } else{
        MessageInterface('error', "eski parol xato")
      }
    } else if(editForm.email.length != 0){
      if(editForm.email == userData.email){
        const formData = {
          id: userData.id,
          name: editForm.name,
          lastname: editForm.lastname,
          email: editForm.email == '' ? userData.email : editForm.email,
          username: editForm.username,
          bio: editForm.bio,
          pass: editForm.newpass == '' ? userData.pass : editForm.newpass,
          img: editForm.img == '' ? userData.img : editForm.img,
          posts: userData.posts,
          rating: userData.rating,
        }
        const oldusers = JSON.parse(localStorage.getItem('alluser'));
        let newusers = [];
        oldusers.forEach((item) => {
          if(item.id == userData.id){
            newusers.push(formData)
          } else{
            newusers.push(item)
          }
        })
        localStorage.setItem('alluser', JSON.stringify(newusers))
        MessageInterface('success', "Malumot yangilandi !")
        setRefresh(refresh + 1)
      } else{
        const allusers = JSON.parse(localStorage.getItem('alluser'))
        let check = 0;
        allusers.forEach((item) => {
          if(item.email == editForm.email){
            check = 1
          }
        })
        if(check == 1){
          MessageInterface('error', "Bu email band !")
        } else{
          const formData = {
            id: userData.id,
            name: editForm.name,
            lastname: editForm.lastname,
            email: editForm.email == '' ? userData.email : editForm.email,
            username: editForm.username,
            bio: editForm.bio,
            pass: editForm.newpass == '' ? userData.pass : editForm.newpass,
            img: editForm.img == '' ? userData.img : editForm.img,
            posts: userData.posts,
            rating: userData.rating,
          }
          const oldusers = JSON.parse(localStorage.getItem('alluser'));
          let newusers = [];
          oldusers.forEach((item) => {
            if(item.id == userData.id){
              newusers.push(formData)
            } else{
              newusers.push(item)
            }
          })
          localStorage.setItem('alluser', JSON.stringify(newusers))
          MessageInterface('success', "Malumot yangilandi !")
          setRefresh(refresh + 1)
        }
      }
    } else{
      const formData = {
        id: userData.id,
        name: editForm.name,
        lastname: editForm.lastname,
        email: editForm.email == '' ? userData.email : editForm.email,
        username: editForm.username,
        bio: editForm.bio,
        pass: editForm.newpass == '' ? userData.pass : editForm.newpass,
        img: editForm.img == '' ? userData.img : editForm.img,
        posts: userData.posts,
        rating: userData.rating,
      }
      const oldusers = JSON.parse(localStorage.getItem('alluser'));
      let newusers = [];
      oldusers.forEach((item) => {
        if(item.id == userData.id){
          newusers.push(formData)
        } else{
          newusers.push(item)
        }
      })
      localStorage.setItem('alluser', JSON.stringify(newusers))
      MessageInterface('success', "Malumot yangilandi !")
      setRefresh(refresh + 1)
    }

  }

  const handleImage = (e) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const formData = {
        id: userData.id,
        name: editForm.name,
        lastname: editForm.lastname,
        email: editForm.email == '' ? userData.email : editForm.email,
        username: editForm.username,
        bio: editForm.bio,
        pass: editForm.newpass == '' ? userData.pass : editForm.newpass,
        img: reader.result,
        posts: userData.posts,
        rating: userData.rating,
      }
      const oldusers = JSON.parse(localStorage.getItem('alluser'));
      let newusers = [];
      oldusers.forEach((item) => {
        if(item.id == userData.id){
          newusers.push(formData)
        } else{
          newusers.push(item)
        }
      })
      localStorage.setItem('alluser', JSON.stringify(newusers))
      MessageInterface('success', "Malumot yangilandi !")
      setRefresh(refresh + 1)
    })

    reader.readAsDataURL(e.target.files[0])
  
  }

  const handlePost = (e) => {
    setPost({id: 1, name: e.target.value});
  }
  
  const uploadPost = (e) => {
    e.preventDefault()
    const oldusers = JSON.parse(localStorage.getItem('alluser'));
    const updateUsers = []
    if(userData.posts.length == 0){
      userData['posts'] = [post];
      oldusers.forEach((item) => {
        if(item.id == userData.id){
          updateUsers.push(userData)
        } else{
          updateUsers.push(item)
        }
      })
      localStorage.setItem('alluser', JSON.stringify(updateUsers))
      MessageInterface('success', "Malumot yangilandi !")
      post_up.reset()
      getData()
    } else {
      const newPost = userData.posts
      const formData = {
        id: userData.posts[userData.posts.length - 1].id + 1,
        name: post.name,
      }
      newPost.push(formData)
      userData['posts'] = newPost;
      oldusers.forEach(item => {
        if(item.id == userData.id){
          updateUsers.push(userData)
        } else{
          updateUsers.push(item)
        }
      })
      localStorage.setItem('alluser', JSON.stringify(updateUsers))
      MessageInterface('success', "Malumot yangilandi !")
      post_up.reset()
      getData()
    }
  }
  
  const deletePost = (id) => {
    const oldusers = JSON.parse(localStorage.getItem('alluser'));
    const updateUsers = []
    let uploadposts = [];
    userData.posts.forEach(item => {
      if(item.id != id){
        uploadposts.push(item)
      }
    })
    userData['posts'] = uploadposts;
    oldusers.forEach(item => {
      if(item.id == userData.id){
        updateUsers.push(userData)
      } else{
        updateUsers.push(item)
      }
    })
    localStorage.setItem('alluser', JSON.stringify(updateUsers))
    MessageInterface('success', "Malumot yangilandi !")
    getData()
  }
  
  useEffect(() => {
    getData();
  }, [refresh])

  return (
    <section className="profil">
      <div className="main_p">
        {userData.img == '' ?
          <div className="logo_p">
            <img src="../persons/user.jpg" alt="" />
          </div>
          :
          <div className="logo_p">
            <img src={userData.img} alt="" />
          </div>
        }
          <div className="info_p">
            <h1>{`${userData.lastname} ${userData.name}`}</h1>
            <p><i className='fa-solid fa-address-book'></i> username: {userData.username}</p>
            <p><i className="fa-regular fa-id-card"></i> Shaxsiy raqam: {userData.id}</p>
            <p><i className='fa-solid fa-envelope'></i> email: {userData.email == '' ? <span>Email kiritilmagan !</span> : userData.email}</p>
            <p><i className='fa-solid fa-comment-dots'></i> bio: {userData.email == '' ? <span>Bio yozilmagan !</span> : userData.bio}</p>
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
        {errMes && <div className="error_mes">{errMes}</div>}
        {sucMes && <div className="succes_mes">{sucMes}</div>}
        <form method='post' onSubmit={EditForm}>
          <div className="forms">
          <label>
            <span>Ism:</span>
            <input type="text" name='name' defaultValue={editForm.name} onChange={handleInput}/>
          </label>
          <label>
            <span>Familiya:</span>
            <input type="text" name='lastname' defaultValue={editForm.lastname} onChange={handleInput}/>
          </label>
          <label>
            <span>username:</span>
            <input type="text" name='username' defaultValue={editForm.username} onChange={handleInput} readOnly/>
          </label>
          {editForm.email == '' ?
            <label>
              <span>email:</span>
              <input type="email" name='email' defaultValue={editForm.email} onChange={handleInput}/>
            </label>
            :
            <label>
              <span>email:</span>
              <input type="email" name='email' defaultValue={editForm.email} onChange={handleInput} readOnly/>
            </label>

          }
          <label>
            <span>eski parol:</span>
            <input type="password" placeholder='eski parolni kiriting...' name='oldpass' defaultValue={editForm.oldpass} onChange={handleInput}/>
          </label>
          <label>
            <span>yangi parol:</span>
            <input type="password" placeholder='yangi parolni kiriting...' name='newpass' defaultValue={editForm.newpass} onChange={handleInput}/>
          </label>
          <label>
            <span>bio:</span>
            <input placeholder='Bio yozing...' name='bio' defaultValue={editForm.bio} onChange={handleInput}/>
          </label>
          <label>
            <span>Rasm:</span>
            <div className="input">
              <input type='file' accept='image/jpeg, image/jpg, image/png' onChange={handleImage}/>
              <span>Rasm tanlang</span>
            </div>
          </label>
          </div>
          <button>Saqlash</button>
        </form>
      </div>
      }
      <div className="upload_p">
        <h1>Post Yuklash</h1>
        {errMes && <div className="error_mes">{errMes}</div>}
        {sucMes && <div className="succes_mes">{sucMes}</div>}
        <form method='post' onSubmit={uploadPost} name='post_up'>
          <label>
            <span>Post nomi:</span>
            <input type="text" placeholder='Post nomi kiriting...' onChange={handlePost} required/>
          </label>
          <label>
            <span>Post tanlang:</span>
            <div className="input">
              <input type="file" accept='.pdf, .doc, .docx' required/>
              <span>Faylni tanlang</span>
            </div>
          </label>
          <button>Saqlash</button>
        </form>
      </div>
      <div className="posts_p">
        <h1>Barcha Yuklanmalar:</h1>
        {errMes && <div className="error_mes">{errMes}</div>}
        {sucMes && <div className="succes_mes">{sucMes}</div>}
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Nomi</th>
              <th>Operatsiya</th>
            </tr>
          </thead>
          <tbody>
            {myposts &&
              myposts.map(item => {
                return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <i className="fa-solid fa-trash" onClick={() => deletePost(item.id)}></i>
                      {/* <a><i className="fa-solid fa-download"></i></a> */}
                    </td> 
                </tr>

              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Profil
