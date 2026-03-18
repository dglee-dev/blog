import styled, { keyframes } from "styled-components/macro";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #e0e0e0;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
