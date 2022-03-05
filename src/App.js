import './App.css';
import boy from './img/boy.jpg'
import heart from './img/heart.png'
import blackHeart from './img/heart-black.png'
import { useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState(true);
  const [upNum, setUpNum] = useState(0)
  const [downNum, setDownNum] = useState(0)
  const [text, changeText] = useState('Stranger')
  const [user, checkUser] = useState('waiting')
  // let arr = []
  const [data, setData] = useState([])
  const [login, checkLogin] = useState(false)
  const [signUp, checkSignUp] = useState(false)

  // Similar to componentDidMount and componentDidUpdate:  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target[0].value)
    changeText(`${e.target[0].value}`)
    e.target[0].value = ''
    e.target[0].focus()
  }
  const handleGO = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    const val = data.find(obj => obj.username === e.target[0].value && obj.password === (e.target[1].value))
    console.log(val)
    if (val) {
      checkUser('Valid users')
      e.target[0].value = ''
      e.target[1].value = ''
      checkLogin(false)
    } else {
      checkUser('Invalid Login/ password')
      e.target[0].value = ''
      e.target[1].value = ''
    }

  }
  const handleSignUp = (e) => {
    e.preventDefault()
    console.log(e.target)
    if (e.target[1].value === e.target[2].value) {
      const obj = {}
      checkUser('Login created')
      obj['username'] = e.target[0].value
      obj['password'] = e.target[1].value
      data.push(obj)
      setData(data)
      // arr.push(obj)
      console.log(data)

      checkSignUp(false)
    } else {
      checkUser("Password doesn't match")
    }
  }
  return (
    <>
      <div className="border-top border-primary mt-3">
        <div className="d-flex mt-3 pb-2 border-bottom border-dark">
          <span className="me-auto ps-4">Today</span>
          <span className="pe-3 text-muted">Monday, Jan 17 2022</span>
        </div>
        <section className="">
          <div className="d-flex  mt-3 ms-3">
            <img className="img" src={boy} alt="user" />
            <div className="d-flex flex-column bg-white w-50 rounded ms-3">
              <div className="d-flex p-2">
                <div className="me-2"><img src="https://img.icons8.com/material-rounded/24/000000/--broken-heart.png" /></div>
                <div className="text-dark me-auto">posted by Raghu</div>
                <div className="text-muted">11:11am</div>
              </div>
              <div className="bg-light text-muted p-2 m-3">This is some random text</div>
            </div>
          </div>

          <div className="d-flex mt-3 ms-3">
            <img className="img" src={boy} alt="user" />

            <div className="d-flex flex-column bg-white w-50 rounded ms-3">
              <div className="d-flex p-2">
                <div className="me-2"><img src="https://img.icons8.com/material-rounded/24/000000/--broken-heart.png" /></div>
                <div className="text-dark me-auto">posted by Aasim</div>
                <div className="text-muted">9:11am</div>
              </div>
              <div className="bg-light text-muted p-2 m-3">This is some random text and something to say</div>
            </div>
          </div>
        </section>
        <div className="d-flex mt-3 pb-2 border-bottom border-dark">
          <span className="me-auto ps-4">Yesterday</span>
          <span className="pe-3 text-muted">Sunday, Jan 16 2022</span>
        </div>
        <section className="position-relative">
          <div className="d-flex  mt-3 ms-3">
            <img className="img" src={boy} alt="user" />
            <div className="d-flex flex-column bg-white w-50 rounded ms-3">
              <div className="d-flex p-2">
                <div className="me-2"><img src="https://img.icons8.com/material-rounded/24/000000/--broken-heart.png" /></div>
                <div className="text-dark me-auto">posted by Raghu</div>
                <div className="text-muted">11:11am</div>
              </div>
              <div className="bg-light text-muted p-2 m-3">This is some random text</div>
            </div>
          </div>

          <div className="d-flex mt-3 ms-3">

            <img className="img" src={boy} alt="user" />

            <div className="d-flex flex-column bg-white w-50 rounded ms-3">
              <div className="d-flex p-2">
                <div className="me-2"><img src="https://img.icons8.com/material-rounded/24/000000/--broken-heart.png" /></div>
                <div className="text-dark me-auto">posted by Aasim</div>
                <div className="text-muted">9:11am</div>
              </div>
              <div className="bg-light text-muted p-2 m-3">This is some random text and something to say</div>
            </div>
          </div>
        </section>
      </div>



      <div class="pt-5 pb-5">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex  justify-content-evenly">
                <div className="bg-secondary photo d-block ">
                  Area one
                  {count && <img onClick={() => { setCount(!count) }} src={blackHeart} />}
                  {!count && <img onClick={() => { setCount(!count) }} src={heart} alt="red heart" />}
                </div>
                <div className="bg-secondary photo d-block ">Area 2</div>
                <div className="bg-secondary photo d-block ">Area 3</div>
                {/* <div className="bg-secondary photo d-block ">Area 3</div> */}
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex  justify-content-evenly ">
                <div className="bg-secondary photo d-block ">Area 9</div>
                <div className="bg-secondary photo d-block ">Area 4</div>
                <div className="bg-secondary photo d-block ">Area 5</div>
                {/* <div className="bg-secondary photo d-block ">Area 3</div> */}
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex  justify-content-evenly ">
                <div className="bg-secondary photo d-block ">Area 6</div>
                <div className="bg-secondary photo d-block ">Area 7</div>
                <div className="bg-secondary photo d-block ">Area 8</div>
                {/* <div className="bg-secondary photo d-block ">Area 3</div> */}
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


        <section className="pt-5 mt-3 ms-5">
          {count && <img onClick={() => { setCount(!count) }} src={blackHeart} />}
          {!count && <img onClick={() => { setCount(!count) }} src={heart} alt="red heart" />}
        </section>

        <section className="pt-5 mt-3 ms-5 d-flex flex-column align-items-center">
          <div className="fs-1">{upNum}</div>
          <img className="arrow" onClick={() => { setUpNum(upNum + 1) }} src="https://img.icons8.com/dotty/80/000000/long-arrow-up.png" />
          <img className="arrow" onClick={() => { setDownNum(downNum + 1) }} src="https://img.icons8.com/dotty/80/000000/long-arrow-down.png" />
          <div className="fs-1">{downNum}</div>
        </section>


        <section className="pt-5 mt-3 ms-5">
          <form onSubmit={handleSubmit}>
            <input type="text" list="cities" id="city" name="city"></input>
            <datalist id="cities">
              <option value="New York City"></option>
              <option value="Tokyo"></option>
              <option value="Barcelona"></option>
              <option value="Mexico City"></option>
              <option value="Melbourne"></option>
              <option value="Other"></option>
              <option value="Banglore"></option>
              <option value="Delhi"></option>
              <option value="Haryana"></option>
            </datalist>
            <button>Search</button>
          </form>
          <div> Hello {text}</div>
        </section>
      </div>


      <section className="p-5 mt-3 ms-5">
        <button onClick={() => checkLogin(pre => !pre)} >Login</button>
        <button onClick={() => checkSignUp(pre => !pre)}>SignUp</button>

        {login && <form onSubmit={handleGO}>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button >Login</button>
        </form>}

        {signUp && <form onSubmit={handleSignUp}>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <input type="password" placeholder=" confirm password"></input>
          <button >SignUp</button>
        </form>}
        <span>{user}</span>
      </section>
    </>
  );
}

export default App;
