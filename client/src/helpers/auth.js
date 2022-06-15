
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('project-4-footballer-database')
}

export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  
  if (!token) return

  const payload = token.split('.')[1]
  
  // console.log(JSON.parse(atob(payload)))
  return JSON.parse(atob(payload))
}

// ? function that checks that user is authenticated
export const userIsAuthenticated = () => {

  const payload = getPayload()
  if (!payload) return false
  const currentTime = Math.floor(Date.now() / 1000)
  return currentTime < payload.exp
}

export const userIsOwner = (footballer) => {
  // get payload and check it has a value
  // console.log('reviews user owner', reviews.owner._id)
  const payload = getPayload()
  if (!payload) return
  return footballer.owner === payload.sub
}