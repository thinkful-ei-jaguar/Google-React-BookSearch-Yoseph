import React, { Component }from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    
    state = {
        searchInput: ''
    }

    handleSearchInput = ( searchEvent ) => {
        this.setState({
          searchInput: searchEvent.target.value
        });
    }
    render() {
        const { handleSearchSubmit } = this.props;
        const { searchInput } = this.state;
        return (
            <>
                <div className="searchbar_container">
                    <form 
                        className="searchbar_form"
                        onSubmit={ submitEvent => handleSearchSubmit(submitEvent, searchInput) }>
                        <h3> Search:
                        <input 
                            className="searchbar_input" 
                            type="text" 
                            name="search" 
                            onChange={ this.handleSearchInput } />
                        <button type="submit">Search</button>
                        </h3>
                    </form>
                </div>
            </>
        );
    }
}
