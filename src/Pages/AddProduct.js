import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const AddProduct = () => {
    const [desc, setDesc] = useState('');  // Initialize the state for description

    const handleDescChange = (value) => {
        setDesc(value);  // Update the state when Quill editor content changes
        console.log(value);  // Optionally log the content to console
    };

    return (
        <div><h3 className="mb-4 title">Add Products</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Product Title" />
                    <div className="mb-3">
                        <ReactQuill className='bg-white'
                            theme="snow"
                            value={desc}
                            onChange={(evt) => { handleDescChange(evt); }}
                            placeholder="Write your Product content here..."
                        />
                    </div>
                    <CustomInput type="number" label="Enter Product Price" />
                    <select name="" className='form-control py-3 mb-3' id="">
                        <option value="">Select Product Brand</option>
                    </select>
                    <select name="" className='form-control py-3 mb-3' id="">
                        <option value="">Select Product Category</option>
                    </select>

                    <select name="" className='form-control py-3 mb-3' id="">
                        <option value="">Select Product Color</option>
                    </select>
                    <CustomInput type="number" label="Enter Product Quantity" />
                        <Dragger {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">
                                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                                banned files.
                                            </p>
                                        </Dragger>
                    <button type="submit" className="btn btn-success border-0 rounded-3 my-5 p-2">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct