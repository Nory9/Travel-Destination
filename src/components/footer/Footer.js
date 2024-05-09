import './Footer.css'
import React from 'react';
// import { CDBFooter } from 'cdbreact';
import { CDBBtn, CDBIcon,CDBBox } from 'cdbreact';
function Footer(props){
    return(
         <CDBBox className="shadow footer">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        background-color="#f3f3f3"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center" className=''>
          <a href="https://github.com/Nory9" className="d-flex align-items-center p-0 text-dark">
            <span className="ms-4 h5 mb-0 font-weight-bold">NoorMisk</span>
          </a>
          <small className="ms-2">&copy; Misk, 2024. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
     </CDBBox>
    //    <div class="Footer">
    //     <ul>
    //         <li><a href='https://github.com/Nory9'>developed by noor</a></li>
    //         <li> &copy; CopyRights</li>
    //     </ul>
    //     <div></div>
    //    </div>
    );
}

export default Footer;