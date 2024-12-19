import React, { useState } from 'react';
import { UserModalProps, UserProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.includes('address.geo')) {
      const [key] = name.split('.').slice(2);
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          geo: {
            ...prevUser.address.geo,
            [key]: value,
          },
        },
      }));
    } else if (name.includes('address')) {
      const [key] = name.split('.').slice(1);
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [key]: value,
        },
      }));
    } else if (name.includes('company')) {
      const [key] = name.split('.').slice(1);
      setUser((prevUser) => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [key]: value,
        },
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div
        style={{
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
        className="bg-white rounded-lg p-8 shadow-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user name"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 mb-2 font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-2 font-medium"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-gray-700 mb-2 font-medium"
              >
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter website URL"
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-lg text-gray-700">Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input
                type="text"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                placeholder="Street"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                placeholder="Suite"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                placeholder="City"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address.geo.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                placeholder="Latitude"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address.geo.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                placeholder="Longitude"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-medium text-lg text-gray-700">Company</h3>
            <input
              type="text"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              placeholder="Company Name"
              className="mt-2 px-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              placeholder="Catchphrase"
              className="mt-2 px-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              placeholder="Business Slogan"
              className="mt-2 px-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
