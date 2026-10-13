import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 100%;
    width: 100%;
    padding: 20px 0;

    @media (max-width: 768px) {
        padding: 10px 0;
    }
`