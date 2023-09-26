import { keyframes } from "styled-components";

export const AnimationModal = keyframes`
    from {
        transform: translateX(50px);
        opacity: 0;
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`