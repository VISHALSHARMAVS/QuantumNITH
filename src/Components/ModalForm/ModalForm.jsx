/* eslint-disable react/prop-types */

import './ModalForm.css'

function ModalForm({onClose,isOpen,children}) {
  return (
    <>
        {isOpen && (<>
        <div className="form">
                <div className='innerForm'>
            <div className='close' onClick={onClose}><span>X</span></div>
                    {children}
                </div>
        </div>
    {/* <div className='selfClosing'/> */}
    </>)}
    </>
 )
}

export default ModalForm




	

	
		

