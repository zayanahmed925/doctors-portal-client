import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AvailableService from '../AvailableService/AvailableService';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import FilterDoctors from '../FilterDoctors/FilterDoctors';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState('');
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [departments, setDepartments] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [doctors, setDoctors] = useState([]);



    // Use useQuery hook to fetch hospital
    const { data: hospitals, isLoading: isHospitalLoading, error: hospitalLoadingError } = useQuery(['hospitals'], () =>
        fetch(`http://localhost:5000/hospitals`)
            .then(res => res.json()

            )
    )

    const handleHospitalSelect = (e) => {
        console.log(e.target.value);
        fetch(`http://localhost:5000/departments/${e.target.value}`)
            .then(res => res.json())
            .then(data => setDepartments(data))
        // .catch(error => console.error('Error fetching hospital data:', error));
        // setSelectedHospital(e.target.value);
        setSelectedDepartment(''); // Reset department when hospital changes
    };

    const handleDepartmentSelect = (e) => {
        console.log('e.target.value');
        fetch(`http://localhost:5000/doctor/${e.target.value}`)
            .then(res => res.json())
            .then(data => setDoctors(data))
        setSelectedDepartment(e.target.value);
        // setSelectedDoctor(null); // Reset doctor when department changes
    };

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
    };


    const formattedDate = format(date, 'PP')
    const { data: services, isLoading, error, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json()

            )
    )

    // console.log(services)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-12 mt-4'>
            {/* section added */}
            <div>
                <section>
                    {/* <h2>Hospital Info</h2> */}
                    <h2 className='text-xl  text-center font-bold py-3'>Search for Doctors</h2>

                    <div className="flex justify-center gap-3">
                        {/* // hospital select */}
                        <select onChange={(e) => handleHospitalSelect(e)} className="select select-info select-bordered w-full max-w-xs">
                            <option disabled selected>Hospital</option>
                            {hospitals?.map(hospital => <option value={hospital?._id}>{hospital?.name}</option>)}
                        </select>
                        {/* department select */}
                        <select onChange={(e) => handleDepartmentSelect(e)} className="select select-info select-bordered w-full max-w-xs">
                            <option disabled selected>Department</option>
                            {departments?.map(dep => <option value={dep._id}>{dep?.name}</option>)}
                        </select>
                        {/* <select onChange={(e) => handleDoctorSelect(e)} className="select select-info select-bordered w-full max-w-xs">
                            <option disabled selected>Doctor</option>
                            {doctors?.map(d => <option value={d?._id}>{d?.name}</option>)}
                        </select> */}
                    </div>
                </section>
                {selectedDoctor && (
                    <section>
                        <h2>Selected Doctor: {selectedDoctor}</h2>
                        {/* Render doctor-specific information here */}
                    </section>
                )}
            </div>
            {/* section endded */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* {

                    services?.map(service => <AvailableService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></AvailableService>)
                } */}
                {
                    doctors?.map((doctor) => {
                        // console.log(doctor)
                        return (
                            <FilterDoctors
                                key={doctor._id}
                                doctor={doctor}
                                setTreatment={setTreatment}
                                appointmentDate={formattedDate}
                            />
                        )
                    })
                }
            </div>
            <div>
                {/* {
                    treatment && <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                        date={date}
                        refetch={refetch}
                    ></BookingModal>
                } */}
            </div>
        </div>
    );
};

export default AvailableAppointment;