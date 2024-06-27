import React, { useEffect, useState } from 'react';

const HospitalInfo = () => {
    const [hospitals, setHospitals] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        fetch('hospitalInfo.json')
            .then(res => res.json())
            .then(data => setHospitals(data))
            .catch(error => console.error('Error fetching hospital data:', error));
    }, []);

    const handleHospitalSelect = (hospital) => {
        setSelectedHospital(hospital);
        setSelectedDepartment(null); // Reset department when hospital changes
        setSelectedDoctor(null); // Reset doctor when hospital changes
    };

    const handleDepartmentSelect = (department) => {
        setSelectedDepartment(department);
        setSelectedDoctor(null); // Reset doctor when department changes
    };

    const handleDoctorSelect = (doctor) => {
        setSelectedDoctor(doctor);
    };

    // Extract department names from the selected hospital
    const hospitalDepartments = selectedHospital ? Object.keys(selectedHospital.Department.reduce((acc, dep) => ({ ...acc, ...dep }), {})) : [];

    // Extract doctor names from the selected department
    const departmentDoctors = selectedDepartment ? selectedHospital.Department.find(dep => Object.keys(dep)[0] === selectedDepartment)[selectedDepartment] : [];

    return (
        <div>
            <section>
                <h2>Hospital Info</h2>
                <details className="dropdown">
                    <summary className="m-1 btn">Hospital</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-teal-50 rounded-box w-52">
                        {hospitals.map(hospital => (
                            <li key={hospital._id}>
                                <button onClick={() => handleHospitalSelect(hospital)}>
                                    {hospital.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
                <details className="dropdown" disabled={!selectedHospital}>
                    <summary className="m-1 btn">Department</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-teal-400 rounded-box w-52">
                        {hospitalDepartments.map(departmentName => (
                            <li key={departmentName}>
                                <button onClick={() => handleDepartmentSelect(departmentName)}>
                                    {departmentName}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
                <details className="dropdown" disabled={!selectedDepartment}>
                    <summary className="m-1 btn">Doctor</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-teal-600 rounded-box w-52">
                        {departmentDoctors.map(doctor => (
                            <li key={doctor.doctor.name}>
                                <button onClick={() => handleDoctorSelect(doctor.doctor.name)}>
                                    {doctor.doctor.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
            </section>
            {selectedDoctor && (
                <section>
                    <h2>Selected Doctor: {selectedDoctor}</h2>
                    {/* Render doctor-specific information here */}
                </section>
            )}
        </div>
    );
};

export default HospitalInfo;
