import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Signup: React.FC = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [password2, setPassword2] = useState('')
    //let [redirect, setRedirect] = useState(false)

    let handleName = (e) => {
        setName(e.target.value)
    }

    let handleEmail = (e) => {
      setEmail(e.target.value)
    }

    let handlePassword = (e) => {
      setPassword(e.target.value)
    }

    let handlePassword2 = (e) => {
      setPassword2(e.target.value)
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        // check if both passwords entered are the same
        if (password === password2) {
          const newUser = {
            name: name,
            email: email,
            password: password,
          }

        axios.post(`http://localhost:3001/users/register`, newUser)
            .then(res => {
              console.log('route hit ✅')
                // redirect user to Login
                //setRedirect(true)
            })
            .catch(error => {
                console.log(error + 'route hit 🤬')
            })
        }
      
    }

    // if (redirect) return <Redirect to='/login' />

    return (
        <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Signup</h2>
            {/* <form method="POST" onSubmit={handleSubmit} action="/"> */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" value={password2} onChange={handlePassword2} className="form-control" />
              </div>
              <button onClick={handleSubmit} className="btn btn-primary float-right">
                <Link href="/">
                  <a >Submit</a>
                </Link>
              </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    )
}

export default Signup