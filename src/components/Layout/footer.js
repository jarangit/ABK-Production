import React,{Component} from 'react';
import styled from 'styled-components';
import FooterContactItem from './FooterContactItem'


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
