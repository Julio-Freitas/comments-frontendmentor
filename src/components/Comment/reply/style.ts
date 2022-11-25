import styled from 'styled-components';

export const Reply = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  gap: 1.5rem;
`;
export const Textarea = styled.textarea`
  flex: 1;
  border-radius: 0.7rem;
  border: 0.2rem solid ${({ theme }) => theme.corlors.primary.lightgrayishBlue};
  height: 100px;
  resize: none;
  transition: 0.5s ease;
  outline: none;
  padding: 2rem;
  color: ${({ theme }) => theme.corlors.neutral.grayishBlue};
  :focus,
  :hover {
    border-color: ${({ theme }) => theme.corlors.primary.moderateBlue};
  }
`;
export const Button = styled.button`
  background: ${({ theme }) => theme.corlors.primary.moderateBlue};
  color: ${({ theme }) => theme.corlors.neutral.white};
  font-weight: 800;
  border: none;
  flex: 0.2 1 100px;
  max-width: 110px;
  height: 50px;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.5s ease;

  :hover {
    opacity: 0.65;
  }
`;
