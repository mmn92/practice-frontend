import styled from "styled-components";

import star from "../../assets/star.svg";

export const Card = styled.dl`
  box-sizing: border-box;
  width: 200px;
  box-shadow: 0px 2px 8px #000;
  padding-bottom: var(--gap-med);
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  max-height: 220px;
`;

export const Value = styled.dl`
  text-align: right;
  color: var(--color-green);
  font-size: var(--size-small);
  padding-top: var(--gap-small);
  padding-right: var(--gap-small);
`;

export const StarWrapper = styled.dl`
  padding: 0 var(--gap-small);
`;

export const Star = styled.img.attrs({ src: star })`
  width: 20px;
`;

export const Title = styled.dt`
  color: var(--color-gray-dark);
  font-size: var(--size-regular);
  padding: 0 var(--gap-small);
`;
