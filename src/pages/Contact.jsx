import React from 'react';
import Email_logo from '../images/email_logo.png';
import Phone_logo from '../images/phone_logo.png';
import Add_logo from '../images/address_logo.png';
import insta_logo from '../images/insta_logo.png';
import '../styles/HomeStyle.css'
function Contact() {
    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center contact">Contact Us</h2>

            <div className="row">
                {/* Contact Details */}
                <div className="col-md-6 mb-4">
                    <div className="card p-4 shadow-sm">

                        <p><strong><img src={Phone_logo} /></strong> <a href="tel:+91 7015197637">+91 7015197637</a></p>
                        <p><img src={Email_logo} /><a href="mailto:Sakshamhere13012003@gmail.com">Sakshamhere13012003@gmail.com</a></p>
                        <p><img className='insta' src={insta_logo} /><a href="https://www.instagram.com/jeans_point_?igsh=Y2tveW1zZ3c4ZTVv ">jeans_point_</a></p>
                        <p><img src={Add_logo} />Opposite Delhi Electronics 111, Sadar Bazar, Near Jama Masjid, Sirsa, Haryana 125055</p>
                    </div>
                </div>

                {/* Google Map */}
                <div className="col-md-6">
                    <div className="ratio ratio-4x3">
                        <iframe
                            title='Google Map Location'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.3832634854716!2d75.02688287533607!3d29.534330975184496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114c4cd05a8483%3A0x201133f918419253!2sJeans%20Point!5e0!3m2!1sen!2sin!4v1748356570601!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;