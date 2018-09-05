import Link from 'gatsby-link'
import styled from 'styled-components'

export const PrimaryButton = styled(Link)`
  height: 40px;
  width: 200px;
  border-radius: 3px;
  background: #66c3cc;
  border: 2px solid #66c3cc;
  padding: 13px 20px;
  color: #223264;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  box-shadow: 0 2px 5px 0 rgba(34, 67, 111, 0.14);
  font-weight: bold;

  &:hover {
    background: #e9eef3;
    color: #66c3cc;
    cursor: pointer;
  }
`
