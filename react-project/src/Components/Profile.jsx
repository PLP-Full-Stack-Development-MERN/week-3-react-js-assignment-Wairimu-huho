import React from "react";

const Profile = ({name, email}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-4">
      <div className="flex items-center space-x-4">
        <div className="bg-cyan-100 text-cyan-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {name && name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
