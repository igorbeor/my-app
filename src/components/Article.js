import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    state = {
        visible: false,
    };
    handleReadMoreClick = (e) => {
        e.preventDefault();
        this.setState({ visible: true });
    };
    render() {
        const { author, text, bigText } = this.props.data;
        const { visible } = this.state;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                { !visible && <a onClick={this.handleReadMoreClick} href="#" className="news__readmore">Подробнее</a> }
                { visible && <p className="news__big-text">{bigText}</p> }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};

export { Article };