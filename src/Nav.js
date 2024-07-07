import styled from 'styled-components';
import { Link } from 'react-router-dom';
import links from './providers/links';

export default () =>
  /* bg-[#d9eaff] border-b border-[#b0bcc6]*/
  <div className="h-20 w-full  bg-transparent
                  flex justify-end items-center text-xl">
    {
      links.map((l, i) => <L link={l} key={i} />)
    }
  </div>

const L = ({ link }, key) =>
  <LStyled key={key} to={'/' + link.t} className="h-full">
    <div className="h-full w-36
                    flex items-center justify-center
                    text-[#ffa07a]">
      {
        link.t
      }
    </div>
  </LStyled>

const LStyled = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;

  :hover {
    color:  #6495ed;
    font-size: 1.375rem;
    border-radius: 1rem;
    background-color: #d9eaff;
    box-shadow:         inset 0 0 10px #000000;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    box-shadow: inset 0 2px 10px 0 rgba(0, 0, 0, 0.24);
  }

  :first-child {
    margin: 0 auto 0 0;
    border-top-right-radius: 1rem;
  }
  :first-child:hover {
    background-color: #d9eaff;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  
  :last-child {
    margin-right: 0;
  }
`;