import styled from "styled-components";

export const Container = styled.div`
background: rgba(25, 21, 11, 0.7);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;
input{
    width: 80%;
    border: none;
    border-radius: 5px;
    height: 3vh;
    font-weight: bold;
    font-size: 20px;
    font-variant: small-caps;
}
button{
    margin-top: 10px;
    background-color: blue;
    color: white;
    width: 80%;
    border: none;
    border-radius: 5px;
    height: 3vh;
    font-weight: bold;
    font-size: 20px;
    font-variant: small-caps;
    :hover{
        color: blue;
        background-color: white;
        transition: 0.5s
    }
   
}
p{
        font-size: 10px;
        color: white;
}
ul{
    text-align: center;
    list-style-type: none;
    >li{
        text-align:center;
        color:white;
        font-weight: bold;
        font-size: 20px;
    }
}
`