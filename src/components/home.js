import React, { Component } from 'react';
import Classes from './Login.module.css';

class Home extends Component {
    render() {
        return (
            <div className={Classes.body}>
                <div id="image">
                    <img src="logistics.jpg" alt="truck" width="1363" height="300" />
                    <div id="topnav">
                        <a href="#logout">Logout</a>
                        <a href="#Contact">Contact</a>
                        <a href="#About">About</a>
                        <a href="#Home">Home</a>
                        <div class="rightside">
                            <a href="#User id">User id: 15263695</a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <main>
                    <section>
                        <section id="Home">
                            <h2>Home</h2>
                            <p>Our flagship services, supported by pioneering systems of information technology, are especially designed to handle the unique logistics challenges faced by our customers at every step of the supply chain.
                            Once you opt for our services, our expert professionals will take the utmost care to ensure that your freight forwarding and logistics requirements are fulfilled
                            in an entirely hassle-free manner and within the least turnaround time, thereby providing you the competitive advantage that you desperately need to take your business to another level. </p>
                        </section>
                    </section>
                </main>
                <br />
                <br />
                <br />
                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <div id="table1" />
                    <table style={{"width":"100%"}}>
                        <tr>
                            <th>S.no</th>
                            <th>Supplier Mobile Number</th>
                            <th>Date of Booking</th>
                            <th>Invoice Number</th>
                            <th>Customer Name</th>
                            <th>Invoice Image</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>+91 9848490550</td>
                            <td>22/08/2019</td>
                            <td>102365484</td>
                            <td>Suneel</td>
                            <td><a href="invoice1.jpg">Click here to view </a></td>
                        </tr>
                         <tr>
                            <td>2</td>
                            <td>+91 8019256789</td>
                            <td>14/01/2019</td>
                            <td>14632569</td>
                            <td>Shagun</td>
                            <td><a href="invoice1.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>+91 9290000090</td>
                            <td>29/07/2018</td>
                            <td>15789656</td>
                            <td>Rajesh</td>
                            <td><a href="invoice2.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>+91 8885117522</td>
                            <td>05/05/2020</td>
                            <td>19548636</td>
                            <td>Krishna</td>
                            <td><a href="invoice3.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>+91 9243061739</td>
                            <td>09/12/2019</td>
                            <td>36947856</td>
                            <td>Mohan</td>
                            <td><a href="invoice4.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>+91 9491716126</td>
                            <td>13/04/2020</td>
                            <td>96475289</td>
                            <td>vihas</td>
                            <td><a href="invoice5.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>+91 9491716126</td>
                            <td>15/02/2019</td>
                            <td>96475289</td>
                            <td>vihas</td>
                            <td><a href="invoice5.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>+91 9491716126</td>
                            <td>16/01/2020</td>
                            <td>96475289</td>
                            <td>vihas</td>
                            <td><a href="invoice5.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>+91 9491716126</td>
                            <td>30/10/2019</td>
                            <td>96475289</td>
                            <td>vihas</td>
                            <td><a href="invoice5.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>+91 9491716126</td>
                            <td>19/08/2019</td>
                            <td>96475289</td>
                            <td>vihas</td>
                            <td><a href="invoice5.jpg">Click here to view</a></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>+91 9177610005</td>
                            <td>02/11/2020</td>
                            <td>11136259</td>
                            <td>Abhay</td>
                            <td><a href="invoice6.jpg">Click here to view</a></td>
                         </tr>
                    </table>
                    {/* $(document).ready(function(){
                        $("#myInput").on("keyup", function() {
                            var value = $(this).val().toLowerCase();
                                $("#table1 tr").filter(function() {
                                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                 });
                            })
                        }); */}
                <br/>
                <br/>
                <main>
                    <section>
                        <section id="About">
                            <h2>About us</h2>
                            <p>BlockForTrust (BFT) is revolutionizing business practices and fueling the growth of organizations with Blockchain global solutions. 
                            We are global leaders with extensive experience in creating customized, trusted end-to-end Blockchain solutions and services that help businesses 
                            to create an everlasting impact in this new era of digital transformation. We offer a wide range of innovative Blockchain value added services to 
                            help businesses in the adoption, integration and realization of Blockchain networks.</p>
                        </section>
                    </section>
                </main>
                <br/>
                <br/>
                <br/>
                <main>
                    <section>
                        <section id="Contact">
                            <h2>Contact us</h2>
                            <footer class="footer">
                                <div class="info">
                                    <p> Address: Blockfortrust pvt ltd(BFT) Rd Number 44, <br /> CBI Colony, Jubilee Hills, Hyderabad, Telangana 50003 <br />
                                    Email: team@blockfortrust.com <br/> <br/>
                                    Contact number: Sindhura - +91 9346279815</p>
                                </div>
                                <br/>
                                <br/>
                                <p>&copy; COPYRIGHT 2020 BlockforTrust</p>
                                <p><a href="http://blockfortrust.com/">www.blockfortrust.com</a></p>
                            </footer>
                        </section>
                    </section>
                </main>
            


            </div>
        );
    };
}
export default Home;