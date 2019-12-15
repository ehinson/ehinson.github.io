import { keyframes } from "styled-components";

export const slideUpAndFadeIn = keyframes`
    from {
        transform: translateY(5vh);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const slideLeftAndFadeIn = keyframes`
    from {
        transform: translateX(5vh);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const slideRightAndFadeIn = keyframes`
    from {
        transform: translateX(-5vh);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
