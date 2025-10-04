import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
    return (
        <div>
            <form>
                <p>Add Doctor</p>
                <div>
                    <div>
                        <label htmlFor="doc-img">
                            <img src={assets.upload_area} alt="" />
                        </label>
                        <input type="file" id="doc-img" hidden />
                        <p>Upload Doctor <br />picture</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>Your name</p>
                                <input type="text" placeholder='Name' required />
                            </div>
                            <div>
                                <p>Doctor Email</p>
                                <input type="email" placeholder='Email' required />
                            </div>
                            <div>
                                <p>Doctor Password</p>
                                <input type="password" placeholder='Password' required />
                            </div>
                            <div>
                                <p>Experience</p>
                                <select name="" id="">
                                    <option value="1">1 year</option>
                                    <option value="2">2 years</option>
                                    <option value="3">3 years</option>
                                    <option value="4">4 years</option>
                                    <option value="5">5 years</option>
                                    <option value="6">6 years</option>
                                    <option value="7">7 years</option>
                                    <option value="8">8 years</option>
                                    <option value="9">9 years</option>
                                    <option value="10">10+ years</option>
                                </select>
                            </div>
                            <div>
                                <p>Fees</p>
                                <input type="number" placeholder='Fees' required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Speciality</p>
                                <select name="" id="">
                                    <option value="General physician">General physician</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Pediatricians">Pediatricians</option>
                                    <option value="Neurologist">Neurologist</option>
                                    <option value="Gastroenterologist">Gastroenterologist</option>
                                </select>
                            </div>

                            <div>
                                <p>Education</p>
                                <input type="text" placeholder='Education' required />
                            </div>

                            <div>
                                <p>Address</p>
                                <input type="text" placeholder='address 1' required />
                                <input type="text" placeholder='address 2' required />

                            </div>

                        </div>
                    </div>
                    <div>
                        <p>About Doctor</p>
                        <textarea placeholder='write about doctor' rows={5} required />
                    </div>
                    <button>Add Doctor</button>
                </div>
            </form>
        </div>
    )
}

export default AddDoctor