import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background: var(--container-bg);
  color: var(--text-color);
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
  text-align: center;

  body.dark-theme & {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.9rem;
`;
