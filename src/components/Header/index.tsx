import { FiPlusSquare } from 'react-icons/fi'
import { Container } from './styles'

export function Header() {
    return(
        <Container>
        <header>
            <img src="" alt="GoRestaurant" />
            <nav>
                <div>
                <button>
                    <div className="text">Novo Prato</div>
                    <div className="icon">
                    <FiPlusSquare size={24} />
                    </div>
                </button>
                </div>
            </nav>
        </header>
        </Container>
    )
}