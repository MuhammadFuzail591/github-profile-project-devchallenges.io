import React from 'react'

export const GitHubContext = React.createContext()

export const GitHubProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [userData, setUserData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [showSearchCard, setShowSearchCard] = React.useState(true)
  const [userRepos, setUserRepos] = React.useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    if (!searchTerm) return

    setIsLoading(true)
    setIsError(false)

    try {
      const res = await fetch(`https://api.github.com/users/${searchTerm}`)
      const data = await res.json()
      setUserData(data)
      setShowSearchCard(true)
    } catch (err) {
      console.log(err)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }


    try {
      const res2 = await fetch(`https://api.github.com/users/${searchTerm}/repos`)
      const data2 = await res2.json()
      console.log(data2)
      setUserRepos(data2)
    } catch (err) {
      console.log(err)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }


  }

  return (
    <GitHubContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        userData,
        userRepos,
        isLoading,
        isError,
        showSearchCard,
        setShowSearchCard,
        handleSubmit
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}
