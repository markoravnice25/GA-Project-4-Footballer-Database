import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useParams, Link } from 'react-router-dom'

const SearchResult = ({ footballers }) => {
  const [filteredFootballers, setFilteredFootballers] = useState([])
  const { term } = useParams()


  useEffect(() => {
    if (footballers.length) {
      const regexSearch = new RegExp(term, 'i')
      const filtered = footballers.filter(footballer => {
        return regexSearch.test(footballer.fullName) ||
          regexSearch.test(footballer.continent) ||
          regexSearch.test(footballer.citizenship) ||
          regexSearch.test(footballer.number) ||
          regexSearch.test(footballer.placeOfBirth) ||
          regexSearch.test(footballer.league) ||
          regexSearch.test(footballer.position)
      })
      setFilteredFootballers(filtered)
    }
  }, [term, footballers])

  return (
    <>
      {filteredFootballers.length ?
        <section className='serchDisplay'>
          <h4>Here is your search result</h4>
          <Container className='mt-5'>
            {filteredFootballers && filteredFootballers.map(footballer => {
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
          </Container>
        </section>
        :
        <p>No results</p>
      }
    </>
  )

}
export default SearchResult