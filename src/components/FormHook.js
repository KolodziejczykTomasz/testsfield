import React, {useState} from "react"

const FormHook = () => {


    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [street, setStreet] = useState()
    const [subject, setSubject] = useState()
    const [city, setCity] = useState()
    const [month, setMonth] = useState()


    return (<>
        <h1>Form component with hook</h1>
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
                       value={name}
                       onChange={e => setName(e.target.value)}
                /></label>
            <label>Last name
                <input name="lastname"
                       placeholder="...text"
                       type="text"
                       value={lastname}
                       onChange={e => setLastname(e.target.value)}
                /></label>
            <label>Street
                <input name="street"
                       placeholder="...text"
                       type="text"
                       value={street}
                       onChange={e => setStreet(e.target.value)}
                /></label>
            <label>Subject
                <input name="subject"
                       placeholder="...text"
                       type="text"
                       value={subject}
                       onChange={e => setSubject(e.target.value)}
                /></label>
            <label>City:
                <select value={city}
                        onChange={e => setCity(e.target.value)}>
                    <option>Warszawa</option>
                    <option>Sosnowiec</option>
                    <option>Inne</option>
                </select></label>
            <label>Favorite month:
                <select
                    multiple="multiple"
                    value={month}
                    name="month"
                    onChange={(e) => {
                        let target = e.target.value
                        setName({
                            month: target
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
            <div>Name: {name}</div>
            <div>Lastname: {lastname}</div>
            <div>Street: {street}</div>
            <div>Subject: {subject}</div>
            <div>City: {city}</div>
        </div>
    </>)
}

export default FormHook