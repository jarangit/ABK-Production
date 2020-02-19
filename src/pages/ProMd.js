import React, { useState } from 'react'
import Modal1 from '../components/Modal/Modal1'

const Modal = () => {
    const [show] = useState(false)

    const setShow = () => {
        this.setState({
          ...this.state,
          show: !this.state.show
        });
      }

        return(
            <div >
        <input type="button"
          onClick={setShow()}
          value="Show Modal" />

        <Modal1 onClose={this.setShow} show={this.show}>
              This message is from Modal!
        </Modal1>
      </div>
        )
    }


export default Modal