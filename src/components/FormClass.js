import React, {Component} from "react"


const options = [
    {label: "Apple", value: "apple",},
    {label: "Mango", value: "mango",},
    {label: "Banana", value: "banana",},
    {label: "Pineapple", value: "pineapple"},
];

class FormClass extends Component {
    state = {
        name: "",
        lastname: "",
        street: '',
        subject: "",
        city: "",
        fruit: "",
        meal: []
    }

    handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }
    handleChangeSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value.split(', '));
        let values = value
        this.setState({meal: values});
    }

    render() {

        return (<>
            <h1>Form Class component</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center"

            }}>
                <label>Name
                    <input name="name"
                           id="name"
                           placeholder="...text"
                           type="text"
                           value={this.state.name}
                           onChange={this.handleChange}
                    /></label>
                <label>Last name
                    <input name="lastname"
                           placeholder="...text"
                           type="text"
                           value={this.state.lastname}
                           onChange={(e) => {
                               this.setState({lastname: e.target.value})
                           }}
                    /></label>
                <label>Street
                    <input name="street"
                           placeholder="...text"
                           type="text"
                           value={this.state.street}
                           onChange={this.handleChange}
                    /></label>
                <label>Subject
                    <input name="subject"
                           placeholder="...text"
                           type="text"
                           value={this.state.subject}
                           onChange={this.handleChange}
                    /></label>
                <label>City:
                    <select value={this.state.city}
                            onChange={(e) => {
                                this.setState({city: e.target.value})
                            }}>
                        <option>Warszawa</option>
                        <option>Sosnowiec</option>
                        <option>Inne</option>
                    </select></label>
                <label>Favorite fruit:
                    <select
                        value={this.state.fruit}
                        name="fruit"
                        onChange={this.handleChange}>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </label>
                <label>Meal:
                    <select
                        multiple="multiple"
                        name="meal"
                        onChange={this.handleChangeSelect}
                    >
                        <option value="1">Breakfast</option>
                        <option value="2">Lunch</option>
                        <option value="3">Dinner</option>
                        <option value="4">Snacks</option>
                        <option value="5">Dessert</option>
                    </select>
                </label>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "100px"
            }}>
                <div>Name: {this.state.name}</div>
                <div>Lastname: {this.state.lastname}</div>
                <div>Street: {this.state.street}</div>
                <div>Subject: {this.state.subject}</div>
                <div>City: {this.state.city}</div>
                <div>Fruit: {this.state.fruit}</div>
                <div>Meal: {this.state.meal}</div>
            </div>
        </>)
    }
}

export default FormClass