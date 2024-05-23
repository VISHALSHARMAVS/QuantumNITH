/* eslint-disable react/prop-types */


function ContactBtn({children,className,onClick}) {
  return (
  
   <button onClick={onClick} className={`btn btnClass ${className}`} >
{children}
   </button>
   
  )
}

export default ContactBtn