import { BsSearch } from "react-icons/bs"

import styles from './Search.module.css'

import { useState, KeyboardEvent } from 'react'

type SearchProps ={
    loadUser: (username: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName)
        }
    }
  return (
    <div className={styles.search}>
        <h2>Busque Por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={styles.search_container}>
            <input type="text" 
                placeholder='Digite o nome do Usuário' 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(userName)}> <BsSearch /> </button>
        </div>
    </div>
  )
}

export default Search