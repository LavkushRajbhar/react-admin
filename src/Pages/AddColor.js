import React from 'react'
import CustomInput from '../Components/CustomInput'

const AddColor = () => {
    return (
        <div><h3 className="mb-4 title">Add Color</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Color" />
                    <button type="submit" className="btn btn-success border-0 rounded-3 my-5 p-2">Add Color</button>
                </form>
            </div>
        </div>
    )
}

export default AddColor