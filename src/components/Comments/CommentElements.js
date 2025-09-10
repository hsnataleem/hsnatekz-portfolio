import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  margin: 5rem 0;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  textarea {
    width: 100%;
    min-height: 120px;
    resize: vertical;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
    transition: border 0.3s;

    &:focus {
      border-color: #151418;
    }
  }

  button {
    align-self: flex-start;
  }
`;

export const CommentList = styled.div`
  .comment {
    background: #f9f9f9;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);

    p {
      margin: 0 0 0.5rem;
      font-size: 1rem;
    }

    span {
      font-size: 0.8rem;
      color: gray;
    }
  }
`;
