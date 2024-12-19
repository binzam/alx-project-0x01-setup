import Button from '@/components/common/Button';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { UserData, UserProps } from '@/interfaces';
import { useState } from 'react';

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: users.length + 1 });
    users.unshift({ ...newUser, id: users.length + 1 });
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex justify-between w-1/2 mx-auto mb-4">
          <h1 className=" text-2xl font-semibold text-white">Users</h1>
          <Button onClick={() => setModalOpen(true)} label="Add User" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users?.map(
            (
              {
                id,
                name,
                username,
                email,
                address,
                phone,
                website,
                company,
              }: UserData,
              key: number
            ) => (
              <UserCard
                id={id}
                name={name}
                username={username}
                email={email}
                address={address}
                phone={phone}
                website={website}
                company={company}
                key={key}
              />
            )
          )}
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}
export default Users;
