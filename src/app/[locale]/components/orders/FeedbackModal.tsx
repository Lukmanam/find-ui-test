import React, { useState } from 'react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Give feedback</h2>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              onClick={() => setRating(index + 1)}
              className={`w-8 h-8 cursor-pointer ${
                index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.384a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.1 3.385c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.95 2.134c-.784.57-1.838-.197-1.54-1.118l1.1-3.385a1 1 0 00-.364-1.118L2.45 8.812c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.1-3.384z" />
            </svg>
          ))}
        </div>
        <p className="mb-2">Do you have any thoughts you’d like to share?</p>
        <textarea
          className="w-full border rounded-lg p-2 mb-4"
          rows={4}
          placeholder="Additional Comments..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={() => {
              console.log({ rating, comment });
              onClose();
            }}
          >
            Submit review
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={onClose}
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
