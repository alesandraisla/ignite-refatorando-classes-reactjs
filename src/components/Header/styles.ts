import styled from "styled-components";

export const Container = styled.div`
background-color: #c72828;
padding: 30px 0;

header {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;


    img {
        margin-left: 20px;
    }

    nav {
        margin-right: 20px;
        div {
            button {
                font-weight: 600;
                border-radius: 8px;
                border: 0;
                background: #39b100;
                color: #fff;

                display: flex;
                flex-direction: row;
                align-items: center;

                .text {
                    padding: 16px 24px;
                }

                .icon {
                    display: flex;
                    padding: 16px 16px;
                    background: #41c900;
                    border-radius: 0 8px 8px 0;
                    margin: 0 auto;
                }
            }
        }
    }
}

@media (max-width:768px) {
    header {
        }
        nav {
            margin-right: 40px;
        }
    }
}

@media (max-width:560px) {
    header {
        display: flex;
        justify-content: center;
        padding-bottom: 123px;
        img {
            margin-bottom: 20px;
            margin-left: 0px;
            margin-right: 40px;
        }
        nav {
            margin-right: 0px;
        }
    }
}
@media (max-width: 350px) {
    header {
        img{
            margin-left: 40px;
            margin-right: 40px;
            width: 280px;
        }
    }
}




`