import styled from "styled-components";

export const Wrapper = styled.nav`
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 40vw;

    // Nur auf Desktop - auf Mobile übernimmt der Hamburger/Zurück-Button die Navigation
    @media (max-width: 768px) {
        display: none;
    }
`

export const Crumb = styled.a`
    font-family: IBM Plex Mono, monospace;
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--color-text-primary);
    text-decoration: none;
    white-space: nowrap;

    &:hover {
        text-decoration: underline;
    }
`

export const CurrentCrumb = styled.span`
    font-family: IBM Plex Mono, monospace;
    font-size: 0.85rem;
    text-transform: uppercase;
    color: var(--color-text-primary);
    opacity: 0.6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const Separator = styled.span`
    font-family: IBM Plex Mono, monospace;
    font-size: 0.85rem;
    color: var(--color-text-primary);
    opacity: 0.6;
`