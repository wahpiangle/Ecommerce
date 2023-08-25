const SearchButton = ({ handleSearch, isWideScreen }) => {
    return (
        <>
                <button className="text-white bg-secondaryText rounded-lg px-3 py-2 hover:brightness-90" onClick={handleSearch}>
                    Close
                </button>
        </>
    )
}

export default SearchButton