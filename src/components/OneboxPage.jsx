import React, { useState, useEffect } from 'react';
import CustomEditor from './CustomEditor';

const mockEmails = [
  {
    id: 1,
    sender: "aditya@gmail.com",
    recipient: "college.j@mail.com",
    subject: "highest cgpa in college",
    body: "Hi aditya, We would like you to present best...",
    timestamp: "20 June 2024, 9:16 AM"
  },
  {
    id: 2,
    sender: "beata@gmail.com",
    recipient: "orlando@gmail.com",
    subject: "Interested in Campaign",
    body: "I've tried a lot and...",
    timestamp: "7 March 2024, 10:00 AM"
  },
  {
    id: 3,
    sender: "johnson@gmail.com",
    recipient: "lennon.j@mail.com",
    subject: "Could you tell me more about it",
    body: "I'd like to know more about the campaign...",
    timestamp: "7 March 2024, 10:05 AM"
  },
  {
    id: 4,
    sender: "william@gmail.com",
    recipient: "orlando@gmail.com",
    subject: "Payment not going through",
    body: "I'm having issues with the payment process...",
    timestamp: "7 March 2024, 11:00 AM"
  },
  {
    id: 5,
    sender: "orlando@gmail.com",
    recipient: "jeanne@icloud.com",
    subject: "Re: New Product Launch",
    body: "Hi Jeanne, I'm interested in learning more...",
    timestamp: "2 March 2023, 12:00 PM"
  },
  {
    id: 6,
    sender: "orlando@gmail.com",
    recipient: "jeanne@icloud.com",
    subject: "Re: New Product Launch",
    body: "Hi Jeanne, I'm interested in learning more...",
    timestamp: "1 March 2023, 12:00 PM"
  },
  {
    id: 7,
    sender: "orlando@gmail.com",
    recipient: "jeanne@icloud.com",
    subject: "Re: New Product Launch",
    body: "Hi Jeanne, I'm interested in learning more...",
    timestamp: "7 March 2023, 12:00 PM"
  },


  // More mock emails as needed...
];

const OneboxPage = () => {
    const [emails, setEmails] = useState(mockEmails.map(email => ({ ...email, replies: [] })));

  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedEmailId !== null) {
        if (e.key === 'd') {
          setShowDeleteModal(true);
        } else if (e.key === 'r') {
          setIsReplying(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEmailId]);

  const deleteEmail = (id) => {
    setEmails(emails.filter(email => email.id !== id));
    setSelectedEmailId(null);
    setShowDeleteModal(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSaveReply = (content) => {
    setReplyContent(content);
    setIsReplying(false);
  };

  const handleSendReply = () => {
    setEmails(emails.map(email => {
      if (email.id === selectedEmailId) {
        return {
          ...email,
          replies: [...email.replies, replyContent],
        };
      }
      return email;
    }));
    setReplyContent('');
    setIsReplying(false);
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">MailBox</h1>
        <div>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-700">
            {darkMode ? '🌙' : '☀️'}
          </button>
          <span className="ml-4">Aditya's Workspace</span>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-900 p-4">
          <div className="flex justify-between items-center mb-4">
            <input type="text" className="p-2 bg-gray-800 rounded w-full" placeholder="Search" />
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
            {emails.map(email => (
              <div
                key={email.id}
                className={`p-4 mb-2 cursor-pointer ${selectedEmailId === email.id ? 'bg-gray-700' : 'bg-gray-800'} rounded`}
                onClick={() => setSelectedEmailId(email.id)}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-semibold">{email.sender}</p>
                    <p className="text-sm">{email.subject}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{email.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Email Detail Panel */}
        <div className="flex-1 p-4 bg-gray-800">
          {selectedEmailId && (
            <div className="bg-gray-700 p-4 rounded">
              <h2 className="text-xl font-semibold">Email Details</h2>
              <div className="mt-2">
                <p>From: {emails.find(email => email.id === selectedEmailId).sender}</p>
                <p>To: {emails.find(email => email.id === selectedEmailId).recipient}</p>
                <p>Subject: {emails.find(email => email.id === selectedEmailId).subject}</p>
                <p>Body: {emails.find(email => email.id === selectedEmailId).body}</p>
              </div>
              {emails.find(email => email.id === selectedEmailId).replies.map((reply, index) => (
  <div key={index} className="mt-4 p-4 bg-gray-600 rounded">
    <h4 className="text-md font-semibold">Reply {index + 1}</h4>
    <p>{reply}</p>
  </div>
))}

              {isReplying && (
                <div className="mt-4 bg-gray-800 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-4">Reply to Email</h3>
                  <div className="mb-4">
                    <label className="block text-gray-400">To:</label>
                    <input 
                      type="text" 
                      value={emails.find(email => email.id === selectedEmailId).sender} 
                      readOnly 
                      className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400">From:</label>
                    <input 
                      type="text" 
                      value="youremail@domain.com" // Replace with the user's email
                      readOnly 
                      className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400">Subject:</label>
                    <input 
                      type="text" 
                      value={"Re: " + emails.find(email => email.id === selectedEmailId).subject} 
                      readOnly 
                      className="w-full p-2 bg-gray-700 text-white rounded mb-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400">Message:</label>
                    <CustomEditor onSave={handleSaveReply} />
                  </div>
                  <div className="flex justify-between mt-4">
                    <button onClick={handleSendReply} className="p-2 bg-blue-500 text-white rounded">Send</button>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-gray-700 text-white rounded">Attach</button>
                      <button className="p-2 bg-gray-700 text-white rounded">Emoji</button>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setIsReplying(true)}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Reply
                </button>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="text-sm mb-4">Your selected email will be deleted.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="p-2 bg-gray-700 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteEmail(selectedEmailId)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneboxPage;
