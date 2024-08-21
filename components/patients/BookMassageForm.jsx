"use client";
import { getRMTSetup } from "@/app/_actions";
import React, { useEffect, useState } from "react";

function BookMassageForm({ rmtSetup }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    duration: "",
    appointmentTime: "",
    workplace: "",
  });

  useEffect(() => {
    console.log("Updated formData:", formData);

    console.log("rmtSetup:", rmtSetup);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (formData.location === "268 Shuter Street") {
        setCurrentStep(2); // Proceed to select duration
      } else if (formData.location === "workplace") {
        setCurrentStep(2.5); // Proceed to workplace selection
      }
    } else if (currentStep === 2.5) {
      // After selecting "workplace", regardless of which specific workplace is chosen, proceed to duration
      setCurrentStep(2); // Proceed to select duration
    } else if (currentStep === 2) {
      // After selecting duration (either from "268 Shuter St" or after workplace selection), proceed to time
      setCurrentStep(3); // Proceed to select time
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your database
    console.log("final", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <div className="mx-auto max-w-4xl px-4 mt-28 mb-28">
          <div className="flex items-center space-x-8">
            <div className="space-y-2 flex-grow">
              <div>
                <div className="mb-4">
                  <h1 className="text-3xl">
                    Select the location where you would like to book a massage:
                  </h1>
                </div>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a location
                  </option>
                  {rmtSetup.map((setup, index) => (
                    <option
                      key={index}
                      value={setup?.formattedFormData?.address?.streetAddress}
                    >
                      {setup?.formattedFormData?.address?.streetAddress}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn" type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2.5 && (
        <div className="mx-auto max-w-4xl px-4 mt-28 mb-28">
          <div className="flex items-center space-x-8">
            <div className="space-y-2 flex-grow">
              <div>
                <div className="mb-4">
                  <h1 className="text-3xl">Select your workplace:</h1>
                </div>
                <select
                  name="workplace"
                  value={formData.workplace}
                  onChange={handleInputChange}
                >
                  <option value="workplace1">Workplace 1</option>
                  <option value="workplace2">Workplace 2</option>
                  // Add more workplaces as needed
                </select>
              </div>
              <button className="btn" type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="mx-auto max-w-4xl px-4 mt-28 mb-28">
          <div className="flex items-center space-x-8">
            <div className="space-y-2 flex-grow">
              <div>
                <div className="mb-4">
                  <h1 className="text-3xl">
                    What length of massage session would you like to book?
                  </h1>
                </div>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select a service
                  </option>
                  {rmtSetup
                    .filter(
                      (setup) =>
                        setup.formattedFormData.address.streetAddress ===
                        formData.location
                    )
                    .flatMap(
                      (setup) => setup.formattedFormData?.massageServices || []
                    )
                    .map((service, index) => (
                      <option key={index} value={service?.duration}>
                        {service?.duration} minute {service?.service} - $
                        {service?.price} {service?.plusHst ? "+HST" : ""}
                      </option>
                    ))}
                </select>
              </div>
              <button className="btn" type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="mx-auto max-w-4xl px-4 mt-28 mb-28">
          <div className="flex items-center space-x-8">
            <div className="space-y-2 flex-grow">
              <div>
                <label>Appointment Time:</label>
                <p>
                  Call an action to get google calendar, compare with available
                  times then show available times to book
                </p>
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                />
              </div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export default BookMassageForm;
