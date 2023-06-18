import React, { Component } from "react";
import './about.css'
import shop from '../../assets/shop.jpg'
import Img1 from '../../assets/20.jpg'
import Img2 from '../../assets/21.jpg'
import Img3 from '../../assets/23.jpg'
import Img4 from '../../assets/24.jpg'
import Img5 from '../../assets/25.jpg'
import Img6 from '../../assets/26.jpg'
import Img7 from '../../assets/27.jpg'
import Img8 from '../../assets/28.jpg'
import Img9 from '../../assets/29.jpg'
import Img10 from '../../assets/30.jpg'




const About = () => {
    return (
        <section id="about">
            <div className="about">
                <h1>Nirmal Toys</h1>
                <h2 className='tags'>History</h2>
                <hr />
                <p> 
                    &nbsp;&nbsp;&nbsp;<b>Nirmal Art</b>, encompassing a 400-year-old tradition of making soft wood toys and paintings, occupies a place of pride in the world of <b>handicrafts</b>. 
                    The finely carved figures and dainty paintings are still being used to decorate drawing rooms in thousands of homes across the country. <b>Nirmal district</b> in Telangana 
                    was once famous as a production centre of as diverse things as cannons and toys. While the foundry supplied heavy artillery to the army of the Nizam of Hyderabad, the Naqqash craftsmen 
                    and artists brought out exquisite <b>wooden toys and duco paintings</b> under the name of Nirmal Art. The foundry was closed soon after Hyderabad's accession, but the art form has survived many ups and downs, 
                    the most impacting being the loss of its patron, the Nizam. Elegant toys and paintings continue to be produced by the Naqqash artisans at this town located just 4 km off the 
                    new four lane National Highway No. 44 about 220 km from Hyderabad. Though no records pertaining to their origins exist now, it is believed the <b>Naqqash</b> families were brought here from Rajasthan in the 17th century by <b>Neema Naik</b> 
                    (or Nimma Naidu according to another version), the local chieftain after whom the town itself is named. Many changes have since been incorporated in their art form obviously to suit the taste of the patrons of the time<br/><br/>
                    &nbsp;&nbsp;&nbsp;<b>Nirmal wooden toys</b> and Nirmal Paintings are famous all over the world and representing India's rich <b>cultural heritage</b>,
                    these  have for centuries made a significant contribution to the country's progression the field of trade and
                    these <b></b> have for centuries made a significant contribution to the country's progression the field of trade and
                    commerce through their extensive appeal. From the rustic ethos to the royal environment, from flora to fauna, an explicit
                    array of expressions is portrayed in myriad colours and forms on <b>Nirmal Toys</b>.<br /><br />
                    &nbsp;&nbsp;&nbsp;Nirmal Art is 400-year-old rich tradition that encompasses soft wood toys and attractive paintings as well as furniture,
                    occupying its pride and place in the larger world of handicrafts.The beginning of this craft can be traced back to the 14th
                    century when Rajas of the Deccen patronised wood carving and engraving.<br /><br />
                    &nbsp;&nbsp;&nbsp;In the 17th century, by seeing the bundantly available wood in the forests, a chieftain by name <b>Nimma naidu</b> has taken the
                    initiative and decided to call artisans of various trades (<b>naqqash artisans</b> who are emerged from Rajasthan, blacksmiths,
                    wood carvers and others ) from the <b>telangana region</b> to make artifacts and figurines in wood.<br /><br />
                    <img className='images' src={shop} alt="shop image" />
                    <div className="desc">Nirmal Toys and Arts Industrial Office</div>
                </p>
                <h2 className="tags">Description</h2>
                <hr />
                <p>
                    &nbsp;&nbsp;&nbsp;The "<b>Nirmal Industry</b>" has been growing ever since its inception in 1951 at , Hyderabad, which developed nirmal paintings
                    and toys, which are now popular even in international market.<b>Nirmal Toys Industrial Cooperative Society</b>, in Nirmal town,
                    was established in 1955 housing about 60 artisansis the main toy making unit while the <b>Hyderabad branch</b> manufactures
                    furniture and miniature paintings.<br /><br />
                    &nbsp;&nbsp;&nbsp;Nirmal toys are world famous traditional wooden toys that are exclusively made in the town of Nirmal in <b>Nirmal</b> district of
                    <b>Telangana</b>, India. The reason for this extraordinary art getting evolved in this town and its surrounding villages is abundant
                    availability of <b>soft light weight wood(poniki)</b> and colour yeilding gums and stones in the surrounding <b>forests</b>.<br /><br />
                    &nbsp;&nbsp;&nbsp;The artisans are doyens at producing articles of high artistic content and features reflecting the local life and
                    environment. The products not only include ornament boxes, trays, screen in traditional styles in rich colours but also
                    models of animals, birds, fruit and vegetables, models of deities and human occupations. These finely carved figures,
                    Elegant toys and dainty paintings are being used to decorate rooms in thousands of homes across the world.
                </p>
                <div className="album">
                    <img src={Img1} alt="imges" className="Images"></img>
                    <img src={Img2} alt="imges" className="Images"></img>
                    <img src={Img3} alt="imges" className="Images"></img>
                    <img src={Img4} alt="imges" className="Images"></img>
                    <img src={Img10} alt="imges" className="Images"></img>
                    <img src={Img5} alt="imges" className="Images"></img>
                    <img src={Img6} alt="imges" className="Images"></img>
                    {/* <img src={Img7} alt="imges" className="Images"></img> */}
                    <img src={Img8} alt="imges" className="Images"></img>
                    <img src={Img9} alt="imges" className="Images"></img>
                </div>   
            </div>
        </section>
    )
}

export default About