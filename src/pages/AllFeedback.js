
import React, { useState, useEffect } from 'react';
import { apiConnector } from '../services/apiconnector';
import { feedbackEndpoint } from '../services/apis';

const AllFeedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await apiConnector("GET", feedbackEndpoint.ALL_FEEDBACK);
                setFeedbackList(response.data);
            } catch (error) {
                console.error("Error fetching feedback:", error.message);
            }
        };

        fetchFeedback();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">All Feedback</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Feedback Details</th>
                            <th className="px-4 py-2">Rating</th>
                            <th className="px-4 py-2">Additional Comments</th>
                            <th className="px-4 py-2">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {feedbackList.map((feedback, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 whitespace-nowrap">{feedback.name}</td>
                                <td className="px-4 py-2 whitespace-nowrap">{feedback.feedbackDetails}</td>
                                <td className="px-4 py-2 whitespace-nowrap">{feedback.rating}</td>
                                <td className="px-4 py-2 whitespace-nowrap">{feedback.additionalComments}</td>
                                <td className="px-4 py-2 whitespace-nowrap">{new Date(feedback.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFeedback;


