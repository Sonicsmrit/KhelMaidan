import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function OwnerForm(){

    const navigate = useNavigate()

    const[formData, setFormData] = useState({
        Venuename: '',
        OwnerName: '',
        PrimarySport: '',
        email: '',
        District: '',
        FullAddress: '',
        ContactNumber: '',
        Description: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleDistrict = (district) => {
        setFormData({ ...formData, District: district })
    }

    const handleSubmit = () =>{

        if (!formData.District) {
            setError('Please select a district')
            return
        }
        if(!formData.PrimarySport){
            setError('Please select a primary sport')
            return
        }
        if(!formData.Venuename){
            setError('Venue name is required')
            return
        }

        if(!formData.OwnerName){
            setError('Owner name is required')
            return
        }
        if(!formData.email){
            setError('Email is required')
            return
        }

        if(!formData.ContactNumber){
            setError('Contact number is required')
            return
        }

        if(!formData.FullAddress){
            setError('Full address is required')
            return
        }

        if(!formData.Description){
            setError('Description is required')
            return
        }
        if(!formData.password){
            setError('Password is required')
            return
        }
        if(!formData.confirmPassword){
            setError('Please confirm your password')
            return
        }

        if(formData.password !== formData.confirmPassword){
            setError('Passwords do not match')
            return
        }
        

        // locaStorage to save data

        const existing = JSON.parse(localStorage.getItem('ownerData')) || [] // Get existing data or initialize as empty array

        const duplicate = existing.find(item => item.email === formData.email) // Check for duplicate email

        if(duplicate){
            setError('An entry with this email already exists')
            return
        }

        setError('')

        const updatedData = [...existing, formData] // Add new form data to existing data

        localStorage.setItem('ownerData', JSON.stringify(updatedData)) // Save all owners
        localStorage.setItem('loggedInOwner', JSON.stringify(formData)) // Save updated data back to localStorage

        console.log("Saved", updatedData)

        navigate('/owner-dashboard') // Redirect to dashboard page after saving

    }

    return (
        <div className="form-wrapper">
            <h1 className="form-title">Join the Network</h1>

            <div className="form-card">
                <h2>Venue Basics</h2>
                <p className="form-subtitle">Tell us the core details about your facility.</p>
                <hr />

                <div className="form-row">
                    <div className="form-group">
                        <label>VENUE NAME</label>
                        <input
                            type="text"
                            name="Venuename"
                            placeholder="e.g. Football Arena"
                            value={formData.Venuename}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>OWNER NAME</label>
                        <input
                            type="text"
                            name="OwnerName"
                            placeholder="e.g. Ram Sharma"
                            value={formData.OwnerName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="e.g. owner@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>CONTACT NUMBER</label>
                        <input
                            type="text"
                            name="ContactNumber"
                            placeholder="e.g. 98XXXXXXXX"
                            value={formData.ContactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>PRIMARY SPORT</label>
                        <select name="PrimarySport" value={formData.PrimarySport} onChange={handleChange}>
                            <option value="">Select sport</option>
                            <option value="football">Football</option>
                            <option value="basketball">Basketball</option>
                            <option value="cricket">Cricket</option>
                            <option value="badminton">Badminton</option>
                            <option value="tennis">Tennis</option>
                            <option value="volleyball">Volleyball</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>DISTRICT (NEPAL)</label>
                    <div className="district-buttons">
                        {['Kathmandu', 'Lalitpur', 'Bhaktapur'].map(d => (
                            <button
                                key={d}
                                className={`district-btn ${formData.District === d ? 'selected' : ''}`}
                                onClick={() => handleDistrict(d)}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>FULL ADDRESS</label>
                    <textarea
                        name="FullAddress"
                        placeholder="Street name, landmark, nearby city center..."
                        value={formData.FullAddress}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>DESCRIPTION</label>
                    <textarea
                        name="Description"
                        placeholder="Tell us about your venue..."
                        value={formData.Description}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>CONFIRM PASSWORD</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {error && <p className="error-text">{error}</p>}
                    </div>
                </div>

                <div className="form-nav">
                    <button className="btn-next" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default OwnerForm