import Autosuggest from "react-autosuggest";
import React from "react";
import './autosuggest.css';

class ByAutosuggest extends React.Component{
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    }

    // Filter logic
    getSuggestions = async (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const requestOptions = {
            method: 'POST'};
        let response = await fetch("http://demo3672321.mockable.io/by",requestOptions);
        let data = await response.json()
        console.log("data");
        console.log(data);
        debugger;
         return inputLength < 3 ? [] : data.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );

    };
    renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );
    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.Title;

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.getSuggestions(value)
            .then(data => {
                if (data.Error) {
                    this.setState({
                        suggestions: []
                    });
                } else {
                    this.setState({
                        suggestions: data
                    });
                }
            })
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        // Option props
        const inputProps = {
            placeholder: 'Type item name',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }


}

export default ByAutosuggest;