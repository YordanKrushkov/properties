import React from 'react'


const SellingPrice=(minOrMax,classNeme)=>{

    return(
        <select name="price" id={minOrMax} className={classNeme}>
<option value="0" selected>Alll</option>
<option value="money">10 000</option>
<option value="money">20 000</option>
<option value="money">30 000</option>
<option value="money">40 000</option>
<option value="money">50 000</option>
<option value="money">60 000</option>
<option value="money">70 000</option>
<option value="money">80 000</option>
<option value="money">90 000</option>
<option value="money">100 000</option>
<option value="money">110 000</option>
<option value="money">120 000</option>
<option value="money">130 000</option>
<option value="money">140 000</option>
<option value="money">150 000</option>
<option value="money">160 000</option>
<option value="money">200 000</option>
<option value="money">210 000</option>
<option value="money">220 000</option>
<option value="money">230 000</option>
<option value="money">240 000</option>
<option value="money">250 000</option>
<option value="money">260 000</option>
<option value="money">270 000</option>
<option value="money">280 000</option>
<option value="money">290 000</option>
<option value="money">350 000</option>
<option value="money">400 000</option>
<option value="money">450 000</option>
<option value="money">500 000</option>
<option value="money">550 000</option>
<option value="money">550 000 +</option>
</select>
    )
}

export default SellingPrice