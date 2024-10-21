import { CustomArrowProps } from 'react-slick';
import styled from 'styled-components';

export const ArrowWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['currentSlide', 'slideCount'].includes(prop),
})<CustomArrowProps>`
  font-size: 1rem;

  color: ${({ theme }) => theme.textMain};

  &:before {
    display: none;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.textMain};
  }
`;
