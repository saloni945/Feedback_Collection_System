// src/components/FeedbackForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { apiConnector } from '../services/apiconnector';
import { feedbackEndpoint } from '../services/apis';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const Navigate = useNavigate();

    const submitFeedbackForm = async (data) => {
        console.log("Logging Data", data);
        try {
            setLoading(true);
            const response = await apiConnector("POST", feedbackEndpoint.SUBMIT_FEEDBACK, data);
            console.log("Logging response", response);
            toast.success("Feedback Submitted Successfully");
            Navigate('/all-feedback')
            setLoading(false);
        } catch (error) {
            console.log("Error:", error.message);
            toast.error("Error submitting feedback");
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: "",
                feedbackDetails: "",
                rating: "",
                additionalComments: ""
            });
        }
    }, [reset, isSubmitSuccessful]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                className="flex flex-col gap-7 w-full max-w-md p-6 bg-richblack-800 rounded-lg"
                onSubmit={handleSubmit(submitFeedbackForm)}
            >
               <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your name.
                        </span>
                    )}
                </div>


                <div className="flex flex-col gap-2">
                    <label htmlFor="feedbackDetails" className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Feedback Details
                    </label>
                    <textarea
                        name="feedbackDetails"
                        id="feedbackDetails"
                        cols="30"
                        rows="5"
                        placeholder="Enter feedback details"
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                        {...register("feedbackDetails", { required: true })}
                    />
                    {errors.feedbackDetails && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your feedback details.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="rating" className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Rating (1-5)
                    </label>
                    <div className="flex space-x-4 text-white">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value} className="flex items-center space-x-1">
                                <input
                                    type="radio"
                                    name="rating"
                                    value={value}
                                    className="form-radio text-yellow-50"
                                    {...register("rating", { required: true })}
                                />
                                <span>{value}</span>
                            </label>
                        ))}
                    </div>
                    {errors.rating && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter a valid rating between 1 and 5.
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="additionalComments" className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Additional Comments
                    </label>
                    <textarea
                        name="additionalComments"
                        id="additionalComments"
                        cols="30"
                        rows="5"
                        placeholder="Enter additional comments (optional)"
                        className="w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5"
                        {...register("additionalComments")}
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                    ${
                        !loading &&
                        "transition-all duration-200 hover:scale-95 hover:shadow-none"
                    }  disabled:bg-richblack-500 sm:text-[16px] `}
                >
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
