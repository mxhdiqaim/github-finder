import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please Enter Something', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { showClear, clearUsers } = this.props;
        const { text } = this.state;

        return (
            <div>
                <form className='form' onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        placeholder='Search Users...'
                        name='text'
                        value={text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className='btn btn-block btn-dark'
                    />
                </form>
                {showClear && <button
                    className="btn btn-block btn-light"
                    onClick={clearUsers}
                >
                    Clear
                </button>}

            </div>
        );
    }
}

export default Search;