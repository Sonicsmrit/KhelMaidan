import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

    const [owner, setOwner] = useState(null)
    const [venueName, setVenueName] = useState('')
    const [pricing, setPricing] = useState('')
    const [image, setImage] = useState(null)
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        const loggedIn = JSON.parse(localStorage.getItem('loggedInOwner'))
        if (!loggedIn) {
            navigate('/owner-login')
            return
        } 

        setOwner(loggedIn)
        setVenueName(loggedIn.Venuename)
        setPricing(loggedIn.Pricing || '')
        setImage(loggedIn.Image || null)

    },[])


    const handleImageUpload = (e) => {

        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onloadend = () => setImage(reader.result)
        reader.readAsDataURL(file)

    }

    const handleSave = () => {

        const updated = { ...owner, Venuename: venueName, pricing, image }

        localStorage.setItem('loggedInOwner', JSON.stringify(updated))

        const allOwners = JSON.parse(localStorage.getItem('ownerData')) || []
        const updatedAll = allOwners.map(o => o.email === owner.email ? updated : o)
        localStorage.setItem('ownerData', JSON.stringify(updatedAll))

        setOwner(updated)
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)

    }

    if (!owner) return null

    return(
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Arena Overview</h1>
                    <p className="dashboard-subtitle">Manage your venue details.</p>
                </div>


            </div>

            <div className="dashboard-card">

                {/* Image Upload */}
                <div className="image-upload-box">
                    {image ? <img src={image} alt="venue" className="venue-image" />
                        : <label className="upload-placeholder">
                            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                            <span>+ Upload Venue Image</span>
                        </label>
                    }
                    {image && (
                        <label className="change-image-btn">
                            Change Image
                            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                        </label>
                    )}
                </div>

                {/* Venue Name */}
                <div className="form-group">
                    <label>VENUE NAME</label>
                    <input
                        type="text"
                        value={venueName}
                        onChange={(e) => setVenueName(e.target.value)}
                        placeholder="Enter venue name"
                    />
                </div>


                {/* Pricing */}
                <div className="form-group">
                    <label>PRICING (NPR per hour)</label>
                    <input
                        type="text"
                        value={pricing}
                        onChange={(e) => setPricing(e.target.value)}
                        placeholder="e.g. 1500"
                    />

                </div>

                {saved && <p className="saved-msg">Changes saved!</p>}

                <button className="save-btn" onClick={handleSave}>Save Changes</button>
            

            </div>


            {/* Listing Preview */}
            <div className="dashboard-card">
                <h2 className="section-title">Your Listing</h2>
                <div className="listing-preview">
                    {image
                        ? <img src={image} alt="venue" className="listing-img" />
                        : <div className="listing-img-placeholder">No image</div>
                    }
                    <div className="listing-info">
                        <h3>{owner.Venuename}</h3>
                        <p>{owner.PrimarySport} · {owner.District}</p>
                        <p>{owner.FullAddress}</p>
                        <p className="listing-price">{owner.pricing ? `NPR ${owner.pricing}/hr` : 'Pricing not set'}</p>
                    </div>
                </div>
            </div>


        </div>
    )


}

export default Dashboard