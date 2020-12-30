import React from 'react'


const Price=(minOrMax,classNeme)=>{

    return(
        <select name="price" id={minOrMax} className={classNeme}>
<option value="0" selected>Alll</option>
<option>100</option>
<option>200</option>
<option>300</option>
<option>400</option>
<option>500</option>
<option>600</option>
<option>700</option>
<option>800</option>
<option>900</option>
<option>1000</option>
<option>1100</option>
<option>1200</option>
<option>1300</option>
<option>1400</option>
<option>1500</option>
<option>1600</option>
<option>2000</option>
<option>2100</option>
<option>2200</option>
<option>2300</option>
<option>2400</option>
<option>2500</option>
<option>2600</option>
<option>2700</option>
<option>2800</option>
<option>2900</option>
<option>3000</option>
</select>
    )
}

export default Price