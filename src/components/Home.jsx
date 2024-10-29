import './Home.scss';

function Home() {
  return (
    <section className="home">
        <div className="users">
            <div className="user">
                <div className="image">
                    <img src="../persons/teenboy.jpg" alt="" />
                </div>
                <div className="informs">
                    <h1>Beksulton Usmonov</h1>
                    <p>Informatika va Inovatsiyalar vazirligi mukofoti sovrindori</p>
                    <div className="rating">
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="image">
                    <img src="https://www.shutterstock.com/image-photo/young-teacher-near-chalkboard-school-260nw-164697251.jpg" alt="" />
                </div>
                <div className="informs">
                    <h1>Muhtarov Mahmudjon</h1>
                    <p>Andijon Mashinasozlik instetuti Dekani </p>
                    <div className="rating">
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="image">
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQG3kNcdsSC2sQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725689906651?e=2147483647&v=beta&t=TyP-OfZlLS33zUU2Npc2EJvV7zjdF-HvTTCqmWU3N24" alt="" />
                </div>
                <div className="informs">
                    <h1>Alijonov Ismoyil</h1>
                    <p>Andijon Mashinasozlik instetuti ATT yo'nalishi guruhlari tyutori </p>
                    <div className="rating">
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="image">
                    <img src="https://www.shutterstock.com/image-photo/woman-drink-coffee-classroom-teacher-260nw-1486028600.jpg" alt="" />
                </div>
                <div className="informs">
                    <h1>Attahanova Saidaxon</h1>
                    <p>O'quv ishlari bo'yicha dekan o'rin bosari</p>
                    <div className="rating">
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star yes"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
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
        </div>
    </section>
  )
}

export default Home
