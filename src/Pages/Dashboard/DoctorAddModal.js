import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';


const DoctorAddModal = ({ refetch, setIsAddDoctorModal }) => {
    const [selectedHospital, setSelectedHospital] = useState({})
    const [selectedDepartment, setSelectedDepartment] = useState({})
    const [departments, setDepartments] = useState([]);

    // create hospital
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false)

    const slots = [
        "08.00 AM - 08.30 AM",
        "08.30 AM - 09.00 AM",
        "09.00 AM - 9.30 AM",
        "09.30 AM - 10.00 AM",
        "10.00 AM - 10.30 AM",
        "10.30 AM - 11.00 AM"
    ]

    // Use useQuery hook to fetch Departments
    // const { data: departments, isLoading: isDepartmentLoading, error: departmentLoadingError } = useQuery(['departments'], () =>
    //     fetch(`http://localhost:5000/departments`)
    //         .then(res => res.json()

    //         )
    // )

    // Use useQuery hook to fetch hospital
    const { data: hospitals, isLoading: isHospitalLoading, error: hospitalLoadingError } = useQuery(['hospitals'], () =>
        fetch(`http://localhost:5000/hospitals`)
            .then(res => res.json()

            )
    )

    const { data: services, isLoading } = useQuery('service', () => fetch('http://localhost:5000/services').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleHospitalSelect = (e) => {
        console.log(e.target.value);
        fetch(`http://localhost:5000/departments/${e.target.value}`)
            .then(res => res.json())
            .then(data => setDepartments(data))
        // .catch(error => console.error('Error fetching hospital data:', error));

        // setSelectedHospital(e.target.value);
        // setSelectedDepartment(null); // Reset department when hospital changes
        // setSelectedDoctor(null); // Reset doctor when hospital changes
    };

    const handleDepartmentSelect = (e) => {
        console.log(e.target.value);
        fetch(`http://localhost:5000/doctor/${e.target.value}`)
            .then(res => res.json())
    };

    const imageStorageKey = 'ce22460ba9e84d521ec301107d6406f1';

    const onSubmit = async data => {
        console.log(data);
        setLoading(true)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        // specialty: data.specialty,
                        department: data.department,
                        hospital: data.hospital,
                        slots: slots,
                        img: img
                    }
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                refetch()
                                reset();
                                setIsAddDoctorModal(false)
                                toast.success('Doctor added successfully')
                            }
                            else {
                                toast.error('doctor not added')
                            }
                        })
                }
            })
        setLoading(false)

    };

    if (loading) console.log(loading);
    return (
        <div>
            <input type="checkbox" id="doctor-create-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle" style={{ zIndex: '9999' }}>
                <div className="modal-box">
                    <label htmlFor="doctor-create-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center mb-2">Add Hospital</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Doctor Name</span>
                            </label>
                            <input
                                type="text" placeholder="Enter Name"
                                className="input input-bordered "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.name && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Hospital</span>
                            </label>
                            <select
                                className="select select-bordered "
                                {...register("hospital", {
                                    required: {
                                        value: true,
                                        message: 'Hospital is required'
                                    },
                                    onChange: (e) => handleHospitalSelect(e)
                                })}
                            >
                                <option>Select Hospital</option>
                                {
                                    hospitals?.map((d, index) => {
                                        return (
                                            <option key={index} value={d._id} >{d.name} ({d.district})</option>
                                        )
                                    })
                                }

                            </select>
                            <label className="label">
                                {errors?.hospital && <span className="label-text-alt text-red-500">{errors.hospital.message}</span>}

                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Department / Specialist</span>
                            </label>
                            <select
                                className="select select-bordered "
                                {...register("department", {
                                    required: {
                                        value: true,
                                        message: 'department is required'
                                    },
                                    onChange: (e) => handleDepartmentSelect(e)
                                })}
                            >
                                <option>Select Department</option>
                                {
                                    departments?.map((d, index) => {
                                        return (
                                            <option key={index} value={d._id} >{d.name}</option>
                                        )
                                    })
                                }

                            </select>
                            <label className="label">
                                {errors?.department === 'required' && <span className="label-text-alt text-red-500">{errors.department.message}</span>}

                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Doctor Email</span>
                            </label>
                            <input
                                type="email" placeholder="Enter email"
                                className="input input-bordered "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.email && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>


                        {/* <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Specialization</span>
                    </label>
                    <select {...register("specialty")} className="select  input-bordered">
                        {
                            services?.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div> */}

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered "
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.image && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <input className='btn text-white  bg-gradient-to-r from-secondary to-primary' value='Add Doctor' type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );;
};

export default DoctorAddModal;