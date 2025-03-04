import React, { Component } from 'react';

class Component1_3 extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder='Name' className='name' />
                <input type="email" placeholder="Email" className="email" />
				<input type="text" placeholder="Subject" className="subject" />
				<textarea placeholder="Message" className="message" />
				<input type="submit" value="Send Message" />
				<input type="reset" value="Reset Form" />
            </form>
        );
    }
}

export default Component1_3;