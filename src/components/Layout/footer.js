import React,{Component} from 'react';
import styled from 'styled-components';
import FooterContactItem from './footerContactItem'


const FooterCopy = styled.div`
    width: 100%;
    text-align: center;
    background-color: #3333;
    color: #20cbd4;
    clear: both;
    padding: 15px 0;
    font-weight: 200;
    font-size: 14px;
`
const Link = styled.a`
    text-decoration: none;
    color: #20cbd4;
`
const FooterCtn = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    background: #00181a;
    /* height: 50px; */
    flex-shrink: 0;

    /* left: 0;
    bottom: 0; */
    /* position: fixed; */

`
const FooterItem = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    max-width:1064px;
    height: auto;
    margin: 0 auto;
    padding: 20px 0 20px 0;
    color: #20cbd4; 
    
    div{
        width: 300px;
        /* display:flex; */
    }
`
const BlogIcon = styled.div`
    ul{
        display:flex;
        padding:0;
        li{
            list-style:none;
            img{
                width:35px;
                margin: 0 5px;
            }            
        }
    }
`

class Footer extends Component {

    render(){
        return(
            <FooterCtn>
              <FooterItem>
                  <div>
                        <h2> CONTACT INFO </h2>
                        <FooterContactItem/>
                  </div>
                  <div>
                      <h2> LOCATION </h2>
                      <p>
                            ที่อยู่: ตำบล ลำไทร อำเภอลำลูกกา ปทุมธานี 12150
                            ชั่วโมง: 
                            ปิด ⋅ เปิด 06:00 ส.
                            โทรศัพท์: 088 001 7988
                      </p>
                      <BlogIcon>
                      <ul>
                            <li>
                                <a href = "https://line.me/R/ti/p/%40426ovedm" target="_blank" >
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/line.png" />
                                </a>
                            </li>
                            <li>
                                <a href = "https://www.facebook.com/Jaranservice" target="_blank">
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/Facebook.png" />
                               </a>
                            </li>
                            <li>
                                <a href="mailto: abk.contactus@gmail.com" >
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/icon-mail.png" />
                                </a>
                            </li>
                            <li>
                                <a href ="tel:0895937868" >
                                <img src="https://api.abk-store.com/wp-content/uploads/2020/05/tel.png" />
                                </a>
                            </li>
                        </ul>
                      </BlogIcon>
                  </div>
              </FooterItem>
                <FooterCopy>
                    <div>
                        Copyright By <Link href ="#">ABK</Link>
                    </div>
                </FooterCopy>
            </FooterCtn>
        )
    }
}

export default Footer;
