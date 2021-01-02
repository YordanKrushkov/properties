import React from 'react'


export default {


    SellingPrice(minOrMax, classNeme, f) {

        return (
            <select name="price" id={ minOrMax }  className={ classNeme } onChange={f}>
                <option value="0" selected>Alll</option>
                <option value="10 000">10 000</option>
                <option value="20 000">20 000</option>
                <option value="30 000">30 000</option>
                <option value="40 000">40 000</option>
                <option value="50 000">50 000</option>
                <option value="60 000">60 000</option>
                <option value="70 000">70 000</option>
                <option value="80 000">80 000</option>
                <option value="90 000">90 000</option>
                <option value="100 000">100 00</option>
                <option value="110 000">110 00</option>
                <option value="120 000">120 00</option>
                <option value="130 000">130 00</option>
                <option value="140 000">140 00</option>
                <option value="150 000">150 00</option>
                <option value="160 000">160 00</option>
                <option value="200 000">200 00</option>
                <option value="210 000">210 00</option>
                <option value="220 000">220 00</option>
                <option value="230 000">230 00</option>
                <option value="240 000">240 00</option>
                <option value="250 000">250 00</option>
                <option value="260 000">260 00</option>
                <option value="270 000">270 00</option>
                <option value="280 000">280 00</option>
                <option value="290 000">290 00</option>
                <option value="350 000">350 00</option>
                <option value="400 000">400 00</option>
                <option value="450 000">450 00</option>
                <option value="500 000">500 00</option>
                <option value="550 000">550 00</option>
                <option value="550 000+">550 00+</option>
            </select>
        )
    },
    RentingPrice(minOrMax, classNeme, f) {

        return (
            <select name="price" id={ minOrMax } className={ classNeme } onChange={f}>
                <option value="0" selected>Alll</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
                <option value="1000">1000</option>
                <option value="1100">1100</option>
                <option value="1200">1200</option>
                <option value="1300">1300</option>
                <option value="1400">1400</option>
                <option value="1500">1500</option>
                <option value="1600">1600</option>
                <option value="2000">2000</option>
                <option value="2100">2100</option>
                <option value="2200">2200</option>
                <option value="2300">2300</option>
                <option value="2400">2400</option>
                <option value="2500">2500</option>
                <option value="2600">2600</option>
                <option value="2700">2700</option>
                <option value="2800">2800</option>
                <option value="2900">2900</option>
                <option value="3000">3000</option>
            </select>
        )
    }

}

