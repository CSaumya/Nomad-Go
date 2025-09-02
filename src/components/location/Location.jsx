import React from 'react'

const Location = () => {
  return (
    <div>
      <div>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-[#3c5cdc] py-2 pl-2 text-3xl font-bold'>Location To Visit</h1>
            <div className='rounded-xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28852.65318833413!2d82.9824112!3d25.3182561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756738651433!5m2!1sen!2sin" width="100%" height="360" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius: "20px"}}></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Location
