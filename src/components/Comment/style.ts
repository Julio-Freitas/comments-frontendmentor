import styled from 'styled-components';

export const WrapperComment = styled.div`
  width: 727px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.corlors.neutral.white};
  color: ${({ theme }) => theme.corlors.neutral.grayishBlue};
  box-shadow: 0px 3px 7px 0px ${({ theme }) => theme.corlors.neutral.lightgray};
  max-width: 800px;
  padding: 25px;
  margin: 15px 0 0 0;
  display: flex;
  gap: 15px;
`;

export const Score = styled.div`
  max-width:35px;
  min-width: 35px;
  height: 95px;
  flex 1;
  border: 0;
  background: ${({ theme }) => theme.corlors.neutral.lightgray};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  transition: 0.3s ease-in-out;
  border: none;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.corlors.primary.moderateBlue};
  }

  :hover img {
    filter: drop-shadow(
      1px 1px 0px ${({ theme }) => theme.corlors.neutral.lightgray}
    );
  }
`;

export const ScoreValue = styled.p`
  color: ${({ theme }) => theme.corlors.primary.moderateBlue};
  font-size: 1.6rem;
  font-weight: 800;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  p {
    font-size: 1.6rem;
    ${({ theme }) => theme.corlors.primary.lightgrayishBlue};
    font-weight: 800;
    margin-right: 6px;
  }
  .createdAt {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.corlors.neutral.grayishBlue};
    letter-spacing: 0.5px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ActionReply = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.corlors.primary.moderateBlue};
  font-weight: 800;
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  gap: 5px;

  ::before {
    content: '';
    display: inline-flex;
    background-image: url('/images/icon-reply.svg');
    width: 16px;
    height: 10px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  :hover {
    opacity: 0.65;
  }
`;
export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 23px;
  letter-spacing: 0.56px;
`;

export const ContainerReplys = styled.div`
  margin-left: 50px;
  position: relative;

  ::before {
    position: absolute;
    content: '';
    width: 1px;
    height: calc(100% - 25px);
    display: block;
    background: ${({ theme }) => theme.corlors.neutral.darkBlue};
    left: -25px;
    top: 25px;
    opacity: 0.2;
  }
`;
