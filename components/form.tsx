import React from 'react'
import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    orderNo: '',
    date: '',
    status: '',
    customer: '',
    contact: '',
    salesman: '',
    orderType: 'LTL',
    location: '',
    billTo: '',
    poNum: ''
  })

  const handleSubmit =  (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='external_order_container'>
      <div className='order_container'>
        <div className='tabs'>
          <h2 className='tabCreation tab'>Order Info</h2>
          <h2 className='tab'>Select from Existing Order</h2>
        </div>

        <form onSubmit={handleSubmit} className='form'>
          
          <div className='field'>
            <label htmlFor='Order no'>Order No</label>
            <input type="text" name='Order no' onChange={(e) => setFormData({...formData, orderNo: e.target.value})} />
          </div>

          <div className='field'>
            <label htmlFor='Order date'>Order Date</label>
            <input type="date" name='Order date' onChange={(e) => setFormData({...formData, date: e.target.value})}/>
          </div>

          <div className='field'>
            <label htmlFor='Status'>Status</label>
            <select name="Status" onChange={(e) => setFormData({...formData, status: e.target.value})}>
              <option value=''>--Select one--</option>
              <option value='Available'>Available</option>
              <option value='On route'>On route</option>
              <option value='Transit'>Transit</option>
            </select>
          </div>

          <div className='field'>
            <label htmlFor='Customer'>Customer</label>
            <input type='text' name='Customer' onChange={(e) => setFormData({...formData, customer: e.target.value})}/>
          </div>

          <div className='field'>
            <label htmlFor='Contact'>Contact</label>
            <input type='text' name='Contact' onChange={(e) => setFormData({...formData, contact: e.target.value})}/>
          </div>

          <div className='field'>
            <label htmlFor="Salesman">Salesman</label>
            <select name='Salesman'onChange={(e) => setFormData({...formData, salesman: e.target.value})}>
              <option value=''>--Select one--</option>
              <option value='Adrian Enriquez'>Adrian Enriquez</option>
              <option value='Aylin Miranda'>Aylin Miranda</option>
              <option value='Roberto Ramirez'>Roberto Ramirez</option>
            </select>
          </div>

          <div className='field'>
            <legend>Order Type</legend>

            <div>
              <input type='radio' name='LTL' value='LTL' onChange={(e) => setFormData({...formData, orderType: e.target.value})}/>
              <label htmlFor='LTL'>LTL</label>
            </div>

            <div>
              <input type='radio' name='Full Load' value='Full Load' onChange={(e) => setFormData({...formData, orderType: e.target.value})}/>
              <label htmlFor='Full Load'>Full Load</label>
            </div>
          </div> 

          <div className='field'>
            <label htmlFor="Location">Location</label>
            <select name='Location' onChange={(e) => setFormData({...formData, location: e.target.value})}>
              <option value=''>--Select one--</option>
              <option value='Nogales'>Nogales</option>
              <option value='Hermosillo'>Hermosillo</option>
              <option value='Obregón'>Obregón</option>
            </select>
          </div>

          <div className='field'>
            <label htmlFor="Bill To">Bill To</label>
            <select name='Bill To' onChange={(e) => setFormData({...formData, billTo: e.target.value})}>
              <option value=''>--Select one--</option>
              <option value='Juan Perez'>Juan Perez</option>
              <option value='Gabriel Lopez'>Gabriel Lopez</option>
              <option value='Franciso Montoya'>Transit</option>
            </select>
          </div>

          <div className='field'>
            <label htmlFor='PO Num'>PO Num</label>
            <input type='text' name='PO Num' onChange={(e) => setFormData({...formData, poNum: e.target.value})}/>
          </div>
          <button type="submit">Next</button>
        </form>



      </div>
    </div>

  )
}

export default Form
