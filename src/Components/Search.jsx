import styles from '../sass/components/search/Search.module.scss';

function Search({setSearchKeyword, searchBrewery}) {
    return (
        <div className={styles.inputWrapper}>
            <input onKeyUp={(e) =>{
                //If enter key presed, Search
                if(e.key === 'Enter'){
                    searchBrewery()
                }
            }} onChange={(e) => { setSearchKeyword(e.target.value) }} className={styles.search} type='text' placeholder='Ex: Google' />
        </div>
    );
}

export default Search;
