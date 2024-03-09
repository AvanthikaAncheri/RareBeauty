import React from 'react'
import './Style.css'

function Main() {
  return (
    <div>
        <div className="main-section">
            <div className="content1">
                <img src="/images/selena.webp" alt="" width={"600px"} height={"700px"} style={{position:"relative"}}/>
            </div>
            <div className="content2">
                <div className="image2">
                    <img src="/images/image2.webp" alt="" width={"250px"} height={"320px"} style={{position:"relative"}}/>
                </div>
                <div className="content2-inner">
                    <div className="c2-head">Comfy Hoodie &amp; Sweatpants</div>
                    <div className="new">New</div>
                    <div className="para1" style={{fontWeight:400,lineHeight:"30px",marginTop:"20px"}}>Super soft inside and out, this is the ’fit you’re gonna want to cozy up in all year round (sold separately).</div>
                    <div className="btn-1">Shop Now</div>
                </div>
            </div>
            <div className="content1">
                <img src="/images/bag-img.webp" alt="" width={"600px"} height={"700px"} style={{position:"relative",marginLeft:"200px"}}/>
            </div>
            <div className="content2" style={{marginTop:"50px"}}>
                <div className="content2-inner">
                    <div className="c2-head">#RareReminder Mini Desktop Calendar</div>
                    <div className="para1" style={{fontWeight:400,lineHeight:"30px",marginTop:"20px"}}>Uplift your day with empowering affirmations from the Rare Beauty community– including some of Selena’s faves!</div>
                    <div className="btn-1">Shop Now</div>
                </div>
            </div>
            <div className="content1">
                <img src="/images/makeup-img.webp" alt="" width={"600px"} height={"700px"} style={{position:"relative",marginLeft:"200px"}}/>
            </div>
            <div className="content2" style={{marginTop:"50px"}}>
                <div className="content2-inner">
                    <div className="new" style={{marginLeft:"250px"}}>AWARD WINNER</div>
                    <div className="c2-head">Positive Light Silky Touch Highlighter</div>
                    <div className="para1" style={{fontWeight:400,lineHeight:"30px",marginTop:"20px"}}>Now an Allure Best of Beauty 2023 winner! Get an instant glass-like sheen that lasts and lasts.</div>
                    <div className="btn-1">Shop Now</div>
                </div>
            </div>
            <div className="content1">
                <img src="/images/lipstick.webp" alt="" width={"600px"} height={"700px"} style={{position:"relative",marginLeft:"200px"}}/>
            </div>
            <div className="content2" style={{marginTop:"50px"}}>
                <div className="content2-inner">
                    <div className="new" style={{marginLeft:"150px"}}>New</div>
                    <div className="c2-head">Blush, Bronze, &amp; Luminize Custom Set</div>
                    <div className="para1" style={{fontWeight:400,lineHeight:"30px",marginTop:"20px"}}>Save 20% when you bundle our bestselling cheek essentials in your shades of choice—that’s 3 full-size faves for $59 ($74 value)!</div>
                    <div className="btn-1">Shop Now</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main