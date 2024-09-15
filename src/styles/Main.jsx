import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    position: fixed;
    left: 35%;
    width: 400px;
    min-height: 500px;
    margin: 40px auto;
    grid-template-columns: repeat(4,100px);
    grid-template-rows: minmax(120px,auto) repeat(5,100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`;

export const Display = styled.div`
    grid-column: 1/-1;
    background-color: rgba(60,64,67,0.4);
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    text-align:right;
    word-break: break-all;
    border-top-left-radius:10px;
    border-top-right-radius:10px;

`;

export const Previous = styled.div`
    color:rgba(255,255,255,0.75);
    font-size: 1.5rem;
`;

export const Current = styled.div`
    color:white;
    font-size:2.5rem;
`;

export const Button= styled.button`
    cursor: pointer;
    font-size:2rem;
    outline: none;
    border: 1px outset rgba(0,128,128,0.6);
    background-color: rgba(255,255,255,0.3);
    &:hover{
        background-color:rgba(255,255,255,0.9);
    }
    ${function({gridSpan}){
        if(gridSpan){
            return `grid-column: span ${gridSpan}`;
        }
    }}

    ${({opt}) => opt && 'background-color: rgba(60,64,67,0.5); color: white;'};
    ${({control}) => control && 'background-color: rgba(0,128,128,0.6); color: white;'};
    ${({eql}) => eql && 'background-color: rgba(60,64,67,0.5); border-bottom-right-radius: 10px; color: white;'};
    ${({dec}) => dec && 'background-color: rgba(0,128,128,0.6); border-bottom-left-radius: 10px; color: white;'};

`;