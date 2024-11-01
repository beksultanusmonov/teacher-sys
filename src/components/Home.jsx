import { useEffect, useState } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {

    const user = +localStorage.getItem('user')
    const [AllUsers, setAllUsers] = useState([])
    const [userData, setUserData] = useState({})

    const getData = () => {
        if(user == 0){
            navigate('/')
        } else{
            const alluser = JSON.parse(localStorage.getItem('alluser'));
            setAllUsers(alluser)
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
    <section className="home">
        <div className="users">
            {AllUsers != [] &&
                AllUsers.map(item => {
                    return <div className="user" key={item.id}>
                        {item.img == '' ?
                            <div className="image">
                                <img src="../persons/user.jpg" alt="" />
                            </div>
                            :
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                        }
                        <div className="informs">
                            <h1>{`${item.name} ${item.lastname}`}</h1>
                            <p>{item.bio}</p>
                            <div className="rating">
                                <i>rating: {item.rating}</i>
                                {/* <i className="fa-solid fa-star yes"></i>
                                <i className="fa-solid fa-star yes"></i>
                                <i className="fa-solid fa-star yes"></i>
                                <i className="fa-solid fa-star yes"></i>
                                <i className="fa-solid fa-star yes"></i> */}
                            </div>
                        </div>
                    </div>
                })
            }
            {/* <Link to={'/main/user/'+145}>
            <div className="user">
                <div className="image">
                    <img src="https://t3.ftcdn.net/jpg/03/92/77/16/360_F_392771624_dcSMFCBGzM0qvCZZX6foAbsy70Y7llQE.jpg" alt="" />
                </div>
                <div className="informs">
                    <h1>Sultonova Feruza</h1>
                    <p>Fizika fanidan labaratoriya o'qituvchisi</p>
                    <div className="rating">
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            </Link> */}
        </div>
    </section>
  )
}

export default Home
