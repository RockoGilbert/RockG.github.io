import React from 'react'


const styles = {
  container: {
    marginTop: "95px",
    "@media (max-width: 940px)": {
      marginTop: "50px",
      paddingTop: "50px"
    }
  }
};

const Contact = () => {
  return (
    <div style={styles.container} name='contact' className='w-full h-90vh bg-[#07224f] items-start p-15'>
      <div className="flex justify-center items-center p-4 pt-6">
        <form method='POST' action="https://getform.io/f/f809a263-7fab-4170-8e8d-a8959d823856" className='flex flex-col max-w-[600px] w-full text-black'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-600 py-4'> Submit the form below or shoot me an email - evolve2122@gmail.com</p>
          </div>
          <input className='text-black bg-[#ccd6f6] p-2' type="text" placeholder='Enter your Name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Enter your Email' />
          <textarea className='bg-[#ccd6f6] p-2  text-gray-900' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
    </div>
  )
}

export default Contact