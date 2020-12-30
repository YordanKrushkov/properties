import styles from './index.module.css'
import SearchOpions from '../searchInputs'
import AllCities from '../searchInputs/cities'
import Price from '../searchInputs/price'
const Search = () => {

    return (
        <div className={ styles.card }>
            <header>
                <h4 className={styles.searchCardTitle}> Search for Property </h4>
            </header>
            <main className={styles.main}>
                <div className={ styles.imputs } >
                    <label htmlFor="town">Town</label>
                    { AllCities(styles.options) }
                </div>
                <div className={ styles.imputs } >
                    <label htmlFor="price">Min.Price</label>
                    { Price("minPrice", styles.options) }
                </div>
                <div className={ styles.imputs } >
                    <label htmlFor="price">Max.Price</label>
                    { Price("maxPrice", styles.options) }
                </div>
                <div className={styles.typeContainer}>
                <div className={ styles.type }>
                    <label htmlFor="type">Bedroom</label>
                    <select name="type" id="type" className={ styles.typeflat }>
                        { SearchOpions('bedrooms', 'studio', 'Studio') }
                        { SearchOpions('bedrooms', 'one', '1 bed') }
                        { SearchOpions('bedrooms', 'two', '2 bed') }
                        { SearchOpions('bedrooms', 'three', '3 bed') }
                        { SearchOpions('bedrooms', 'four', '4 bed+') }
                    </select>
                </div>
                <div className={ styles.type }>
                    <label htmlFor="type">Property Type</label>
                    <select name="type" id="type" className={ styles.typeflat }>
                        { SearchOpions('type', 'flat', 'Flat') }
                        { SearchOpions('type', 'house', 'Hause') }
                        { SearchOpions('type', 'cottage', 'Cottage') }
                        { SearchOpions('type', 'land', 'Land') }
                    </select>
                </div>
                </div>
                
            </main>
            <button>SEARCH</button>
        </div>
    )

}
export default Search;