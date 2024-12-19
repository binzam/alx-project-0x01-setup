import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">Contact Info:</h3>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Phone: {phone}</p>
        <p className="text-gray-600">
          Website:{' '}
          <a
            href={`https://${website}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">Address:</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
        <p className="text-gray-500 text-sm">
          Geo: {address.geo.lat}, {address.geo.lng}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700">Company:</h3>
        <p className="text-gray-600 font-semibold">{company.name}</p>
        <p className="text-gray-500 italic">&quot;{company.catchPhrase}&quot;</p>
        <p className="text-gray-500">{company.bs}</p>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
