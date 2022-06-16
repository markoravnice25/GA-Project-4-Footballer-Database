import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useNavigate, useParams, Link } from 'react-router-dom'

import Button from 'react-bootstrap/esm/Button'

import { userIsAuthenticated, getTokenFromLocalStorage, getPayload } from '../../helpers/auth'

import FootballersCarousel from '../Home/FootballersCarousel'

const AccountProfile = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [errors, setErrors] = useState(false)

  const payload = getPayload()
  const id = payload.sub

  useEffect(() => {
    !userIsAuthenticated() && navigate('/login')

    const getAccount = async () => {
      try {
        const { data } = await axios.get(`/api/auth/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        setAccount(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getAccount()

  }, [])
  console.log(account)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-3"><p>username: {account.username}</p></div>
          <div className="col-md-4"><p>email: {account.email}</p></div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-3"><p>First Name: {account.first_name}</p></div>
          <div className="col-md-4"><p>Last Name: {account.last_name}</p></div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-3"><p>Profile Image: {account.profile_image}</p></div>
          <div className="col-md-4"><p>Nationality: {account.nationality}</p></div>
        </div>
      </div>
      <div className="owner-buttons mb-4">
        {/* <Button variant="danger">Delete Footballer</Button> */}
        <Link className='btn btn-primary' to={'/footballer/add'}>Add Footballer</Link>
      </div>
      <div>{account && account.footballers && account.footballers.map(footballer => {
        console.log(footballer)
        return (
          <div key={footballer.id}>
            <Link to={`/footballer/${footballer.id}`}>
              <div className="image-wrapper">
                <img src={footballer.profileImage} />
              </div>
              <div className='card-body-home'>
                <div className='card-title'>
                  <h4>{footballer.fullName}</h4>
                </div>
                <div className='player-age'>
                  <h5>{footballer.age}</h5>
                </div>
                <h4 className="player-citizenship">{footballer.citizenship}</h4>
              </div>
            </Link>
          </div>
        )
      })}
      </div>

    </>

  )
}

export default AccountProfile