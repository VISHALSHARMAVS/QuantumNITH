/* eslint-disable react/prop-types */

import './ModalForm.css'

function ModalForm({onClose,isOpen,children}) {
  return (
    <>
        {isOpen && (<>
        <div className="form">
                <div className='innerForm'>
            <span className='close' onClick={onClose}>X</span>
                    {children}
                </div>
        </div>
    {/* <div className='selfClosing'/> */}
    </>)}
    </>
 )
}

export default ModalForm




	

	
		

