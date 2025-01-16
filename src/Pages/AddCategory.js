import React from 'react'
import CustomInput from '../Components/CustomInput'

const AddCategory = () => {
    return (
        <div><h3 className="mb-4 title">Add Product Category</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Category" />
                    <button type="submit" className="btn btn-success border-0 rounded-3 my-5 p-2">Add Category</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory