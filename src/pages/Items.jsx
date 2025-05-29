import React from "react";
import '../styles/HomeStyle.css'
import i1 from '../Wears/i1.jpg';
import i2 from '../Wears/i2.jpg';
import i3 from '../Wears/i3.jpg';
import i4 from '../Wears/i4.jpg';
import i5 from '../Wears/i5.jpg';
import i6 from '../Wears/i6.jpg';
import i7 from '../Wears/i7.jpg';
import i8 from '../Wears/i8.jpg';
import i9 from '../Wears/i9.jpg';
import i10 from '../Wears/i10.jpg';
import i11 from '../Wears/i11.jpg';
import i12 from '../Wears/i12.jpg';
import i13 from '../Wears/i13.jpg';
import i14 from '../Wears/i14.jpg';
import i15 from '../Wears/i15.jpg';
import i16 from '../Wears/i16.jpg';
import i17 from '../Wears/i17.jpg';
import i18 from '../Wears/i18.jpg';
import i19 from '../Wears/i19.jpg';
import i20 from '../Wears/i20.jpg';
import i21 from '../Wears/i21.jpg';
import i22 from '../Wears/i22.jpg';
import i23 from '../Wears/i23.jpg';
import i24 from '../Wears/i24.jpg';
import i25 from '../Wears/i25.jpg';
import i26 from '../Wears/i26.jpg';
import i27 from '../Wears/i27.jpg';
import i28 from '../Wears/i28.jpg';
import i29 from '../Wears/i29.jpg';
import i30 from '../Wears/i30.jpg';
import i31 from '../Wears/i31.jpg';
import i32 from '../Wears/i32.jpg';
import i33 from '../Wears/i33.jpg';
import i34 from '../Wears/i34.jpg';
import i35 from '../Wears/i35.jpg';
import i36 from '../Wears/i36.jpg';
import i37 from '../Wears/i37.jpg';
import i38 from '../Wears/i38.jpg';
import i39 from '../Wears/i39.jpg';
import i40 from '../Wears/i40.jpg';
import i41 from '../Wears/i41.jpg';
import i42 from '../Wears/i42.jpg';
import i43 from '../Wears/i43.jpg';
import i44 from '../Wears/i44.jpg';
import i45 from '../Wears/i45.jpg';
import i46 from '../Wears/i46.jpg';
import i47 from '../Wears/i47.jpg';
import i48 from '../Wears/i48.jpg';
import i49 from '../Wears/i49.jpg';
import i50 from '../Wears/i50.jpg';
import i51 from '../Wears/i51.jpg';

function Items() {
    const items = [
        { id: 1, name: "Colar T-shirts", img: i1 },
        { id: 2, name: "Graphic T-shirts", img: i2 },
        { id: 3, name: "Lining T-shirts", img: i3 },
        { id: 4, name: "Round neck T-shirts", img: i4 },
        { id: 5, name: "Plain Colar T-shirts", img: i5 },
        { id: 6, name: "Nightwear T-shirts", img: i6 },
        { id: 7, name: "Trousers", img: i7 },
        { id: 8, name: "Watchler Shirts", img: i8 },
        { id: 9, name: "Cotton T-shirts", img: i9 },
        { id: 10, name: "Colar T-shirts", img: i10 },
        { id: 11, name: "Cargo Pants", img: i11 },
        { id: 12, name: "Tshirts", img: i12 },
        { id: 13, name: "Straight fir jeans with checked Shirt", img: i13 },
        { id: 14, name: "Plain Colar T-shirts", img: i14 },
        { id: 15, name: "Cargo Pants", img: i15 },
        { id: 16, name: "Cotton-matty-T-shirts", img: i16 },
        { id: 17, name: "Shorts with halvsleeves Shirt set", img: i17 },
        { id: 18, name: "Oversized T-shirts", img: i18 },
        { id: 19, name: "Nightwear Shorts", img: i19 },
        { id: 20, name: "Jeans", img: i20 },
        { id: 21, name: "Checked Shirts", img: i21 },
        { id: 22, name: "T-shirts", img: i22 },
        { id: 23, name: "Plain Shirts", img: i23 },
        { id: 24, name: "Puffer Jackets", img: i24 },
        { id: 25, name: "Puffer Jackets for Winter", img: i25 },
        { id: 26, name: "Jeans", img: i26 },
        { id: 27, name: "Lining Shirts", img: i27 },
        { id: 28, name: "Deccon Copper Shirts", img: i28 },
        { id: 29, name: "Jeans", img: i29 },
        { id: 30, name: "Shirts", img: i30 },
        { id: 31, name: "Leather Wallets", img: i31 },
        { id: 32, name: "Di-Colour T-shirts", img: i32 },
        { id: 33, name: "Shirts", img: i33 },
        { id: 34, name: "Straight fit Trousers", img: i34 },
        { id: 35, name: "Jeans", img: i35 },
        { id: 36, name: "Colar T-shirts", img: i36 },
        { id: 37, name: "Round neck T-shirts", img: i37 },
        { id: 38, name: "Prewinters Collection", img: i38 },
        { id: 39, name: "Broad Checked Shirts", img: i39 },
        { id: 40, name: "Shirts", img: i40 },
        { id: 41, name: "Shirts", img: i41 },
        { id: 42, name: "Straight fit Jeans with Shirt", img: i42 },
        { id: 43, name: "T-shirts", img: i43 },
        { id: 44, name: "Halfsleeves shirt with shorts set", img: i44 },
        { id: 45, name: "Trousers", img: i45 },
        { id: 46, name: "Cargo Pants", img: i46 },
        { id: 47, name: "Full sleeves Colar T-shirts", img: i47 },
        { id: 48, name: "Watchler Plain Shirts", img: i48 },
        { id: 49, name: "Denim Trousers", img: i49 },
        { id: 50, name: "Puffer Jackets With cap", img: i50 },
        { id: 51, name: "Trousers", img: i51 },

    ];

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 container my-5 auto-scroll-container">
            <h2 className="text-center mb-4 cardHeading">Our Items</h2>
            <div className="row auto-scroll-content">
                {items.map((item) => (
                    <div className="col-md-4 mb-4 " key={item.id}>
                        <div className="card shadow-sm cardcolour">
                            <img src={item.img} className="card-img-top" alt={item.name} />
                            <div className="card-body text-center">
                                <h3 className="card-title">{item.name}</h3>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Items;
