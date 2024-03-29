import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--primary);

  height: 265px;
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 2rem 1rem 12rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);

    border-radius: 0.25rem;

    background-color: var(--primary-light);
    padding: 0 2rem;
    height: 3rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
