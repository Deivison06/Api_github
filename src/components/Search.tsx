import { BsSearch } from "react-icons/bs"

type SearchProps ={
    loadUser: (username: string) => Promise<void>
}

const Search = ({loadUser}: SearchProps) => {
  return (
    <div>
        <h2>Busque Por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div>
            <input type="text" placeholder='Digite o nome do Usuário' />
            <button> <BsSearch /> </button>
        </div>
    </div>
  )
}

export default Search