import React from 'react'


const Price=(minOrMax,classNeme)=>{

    return(
        <select name="price" id={minOrMax} className={classNeme}>
<option value="0" selected>Alll</option>
<option value="money">100</option>
<option value="money">200</option>
<option value="money">300</option>
<option value="money">400</option>
<option value="money">500</option>
<option value="money">600</option>
<option value="money">700</option>
<option value="money">800</option>
<option value="money">900</option>
<option value="money">1000</option>
<option value="money">1100</option>
<option value="money">1200</option>
<option value="money">1300</option>
<option value="money">1400</option>
<option value="money">1500</option>
<option value="money">1600</option>
<option value="money">2000</option>
<option value="money">2100</option>
<option value="money">2200</option>
<option value="money">2300</option>
<option value="money">2400</option>
<option value="money">2500</option>
<option value="money">2600</option>
<option value="money">2700</option>
<option value="money">2800</option>
<option value="money">2900</option>
<option value="money">3000</option>
</select>
    )
}

export default Price