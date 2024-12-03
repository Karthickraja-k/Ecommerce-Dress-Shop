// export  default function Footer (){
//     return (
//         <footer className="py-1">
//             <p className="text-center text-dark mt-1">
//                 Oom Shri Traders - 2023-2024, All Rights Reserved
//             </p>
//         </footer>
//     )
// }

import { Link } from 'react-router-dom';
import FooterImage from '../../images/logo.jpg';


import './Footer.css'

const currentYear = new Date().getFullYear();


export default function Footer() {
    return (
        
            <div className='footer' id='footer'>
                <div className="footer-content">
                    <div className="footer-content-left">
                       {/*  <footer className="py-1"> */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'50px' }}>
                                 <img src={FooterImage} alt='' style={{ height: '200px', width: '500px' }} />
                                {/* <span style={{ color: 'white', marginLeft: '10px' }}>Oom Shri Trader's</span> */}
                            </div>
                        {/* </footer> */}
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li><a href='/' style={{color:'white',textDecoration:'none', marginRight:'10px'}}>Home</a></li>
                            <li><a href='/about' style={{color:'white',textDecoration:'none', marginRight:'10px'}}>About us</a></li>
                            {/* <li>Delivery</li> */}
                            <li><a href='/privacy_policy' style={{color:'white',textDecoration:'none', marginRight:'10px'}}>Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <h5 style={{color:'blue'}}>OOM SHRI TRADERS</h5>
                        <ul>
                            <li>55J, Kalianna Nagar, Anangoor Road,</li>
                            <li>B.Komarapalayam,</li>
                            <li>Namakkal - 638 183.</li>
                            <li>+91 99766 62620</li>
                            <li>+91 99766 52520</li>
                            <li>oomshritraders@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">Copyright {currentYear} © Oom Shri Traders - All Right Reserved.</p>
            </div>       
    );
}