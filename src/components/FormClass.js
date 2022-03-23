import React, {Component} from "react"

class FormClass extends Component {
    state = {
        name: "",
        lastname: "",
        street: '',
        subject: "",
        city: "",
        month: []
    }

    handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
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
                <label>Favorite month:
                    <select
                        multiple={true}
                        value={this.state.month}
                        name="month"
                        id="month"
                        onChange={(e) => {
                            let target = e.target.value
                            this.setState({
                                month: target,
                            });
                        }}

                    >
                        <option value="April">April</option>
                        <option value="August">August</option>
                        <option value="December">December</option>
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
            </div>
        </>)
    }
}

export default FormClass