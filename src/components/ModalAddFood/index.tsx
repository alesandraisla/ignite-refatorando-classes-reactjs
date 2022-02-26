import { useRef } from "react"
import { FiCheckSquare } from "react-icons/fi";
import { FoodDataType } from "../../Hooks/types"
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";


interface ModalAddFoodProps {
    isOpen: boolean,
    setIsOpen: () => void,
    handleAddFood: (data: FoodDataType) => void;
}
export function ModalAddFood({isOpen, setIsOpen, handleAddFood}: ModalAddFoodProps) {
    const formRef = useRef(null);

    const handleSubmit = async (data: FoodDataType) => {
        handleAddFood(data);
        setIsOpen();
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>novo Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />
                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />
                <Input name="description" placeholder="Descrição"/>
                <button type="submit" data-testid="add-food-button">
                    <p className="text">Adicionar Prato</p>    
                    <div className="icon">
                        <FiCheckSquare size={24}/>
                    </div>
                </button>    
            </Form>
        </Modal>
    )
}