import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">City</label>
                    </div>
                    <button class="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        )
    }
}
