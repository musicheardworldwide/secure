import Header from '../components/Header';

`const Settings = () => (
  <>
    <Header />
    <main className="p-4">
      <h2 className="text-2ll mb-4">Settings</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Enable Two-Factor Authentication
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Enable Notifications
        </label>
      </div>
    </main>

</>
);  
export default Settings;