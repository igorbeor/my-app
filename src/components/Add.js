import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Add extends Component {
    state = {
        author: '',
        text: '',
        bigText: '',
        agree: false
    };
    onTextFieldChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({
            [id]: value
        })
    };
    onCheckRulesChange = (e) => {
        this.setState({
            agree: e.currentTarget.checked
        })
    };
    onBtnClickHandler = (e) => {
        e.preventDefault();
        const { author, text, bigText } = this.state;
        this.props.onAddNews({ id: +new Date(), author, text, bigText });
    };
    validate = () => {
        const { author, text, bigText, agree } = this.state;
        return !!(author.trim() && text.trim() && bigText.trim() && agree);
    };
    render() {
        const { author, text, bigText, agree } = this.state;
        return (
            <form className="add">
                <input
                    id="author"
                    type="text"
                    className="add__author"
                    placeholder="Автор"
                    value={author}
                    onChange={this.onTextFieldChange}
                />
                <textarea
                    id="text"
                    className="add__text"
                    placeholder="Текст новости"
                    value={text}
                    onChange={this.onTextFieldChange}
                >
                        </textarea>
                <textarea
                    id="bigText"
                    className="add__text"
                    placeholder="Полный текст новости"
                    value={bigText}
                    onChange={this.onTextFieldChange}
                >
                        </textarea>
                <label className="add__checkrule">
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={this.onCheckRulesChange}
                    /> Я согласен с правилами
                </label>
                <button
                    onClick={this.onBtnClickHandler}
                    className="add__btn"
                    disabled={!this.validate()}
                >Добавить новость</button>
            </form>
        )
    }
}
Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
};

export { Add };