import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default class Lookup extends Component {
  render() {
    return (
      <div className="Navbar_lookup">
                            <input type='text' className="input_lookup" placeholder="Tìm kiếm sản phẩm ...." />
                            <button ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
    )
  }
}
