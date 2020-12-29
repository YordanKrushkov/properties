import styles from './index.module.css'


const Search =() => {
    
        return(
            <div className={styles.card}>
            <header>  
            <h4> Search for Property </h4>
            </header>
            <main>
              <div className={styles.imputs} >
                    <select name="country" id="country" className={styles.location}>
                        <option value="country" >Country</option>
                        <option value="England" >England</option>
                        <option value="Bulgaria" >Bulgaria</option>
                        <option value="Germany" >Germany</option>
                    </select>
                    <select name="town" id="town" className={styles.location}>
                        <option value="tondon" >Town</option>
                        <option value="London" >London</option>
                        <option value="Sofia" >Sofia</option>
                        <option value="Berlin" >Berlin</option>
                    </select>
                </div>
                <div className={styles.type}>
                <select name="type" id="type" className={styles.typeflat}>
                    <option value="typeofproperty">Type of property</option>
                    <option value="onebedroom">One bedroom flat</option>
                    <option value="twobedroom">Two bedroom flat</option>
                    <option value="house">House</option>
                </select>
                </div>
                <div className={styles.radio}>
                <div>
                <label htmlFor="rent">Rent</label>
                    <input type="radio" id="sell"/>
                </div>
                  <div>
                  <label htmlFor="sell">Sell</label>
                    <input type="radio" id="sell"/>
                  </div>
                    
              </div>
            </main>
               <button>SEARCH</button>
            </div>
        )

}
export default Search;