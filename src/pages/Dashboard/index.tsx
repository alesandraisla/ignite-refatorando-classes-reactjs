import { Food } from "../../components/Food";
import { Header } from "../../components/Header";
import { ModalAddFood } from "../../components/ModalAddFood";
import { ModalEditFood } from "../../components/ModalEditFood";
import { FoodsContainer } from "./styles";


export function Dashboard() {
    return(
        <>
            <Header/>
            <ModalAddFood/>
            <ModalEditFood/>
            <FoodsContainer >
                <Food/>
            </FoodsContainer>
        </>
    )
}