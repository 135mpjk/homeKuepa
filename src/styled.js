import styled from 'styled-components';


export const Call = styled.div`
    width: 26em;
    padding: 5px;
    height: auto;
    background-color: ${({ blue}) => blue ? '#DFE7FB' : 'white'};
`;

export const Circle = styled.div`
    width: 18px;
    height: 18px;
    background-color: ${({ empty}) => empty ? '#EBEBEB' : '#F5701D'};
    border-radius: 50%;
`;