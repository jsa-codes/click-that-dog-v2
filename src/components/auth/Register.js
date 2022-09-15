import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [client, setClient] = useState({
        fullName: "",
        email: "",
        isTrainer: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("click_that_dog_user", JSON.stringify({
                        id: createdUser.id,
                        trainer: createdUser.isTrainer
                    }))

                    navigate("/")
                }
            })
    }

    // ^ 9-13-2022
    // ^ Why can't new user sign up?

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${client.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateClient = (evt) => {
        const copy = {...client}
        copy[evt.target.id] = evt.target.value
        setClient(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Click That Dog</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateClient}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateClient}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phoneNumber"> Phone Number </label>
                    <input onChange={updateClient}
                           type="text" id="phoneNumber" className="form-control"
                           placeholder="Enter your phone number" required autoFocus />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...client}
                        copy.isTrainer = evt.target.checked
                        setClient(copy)
                    }}
                        type="checkbox" id="isTrainer" />
                    <label htmlFor="email"> I am a Trainer </label>
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

