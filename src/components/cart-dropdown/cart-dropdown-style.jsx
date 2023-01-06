import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../button/button";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${Button} {
        margin: 0 auto;
    }
`;

export const CartDropdownLink = styled(Link)`
    margin: 0 auto;
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;
