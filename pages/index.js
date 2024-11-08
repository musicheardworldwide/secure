import Header from '../components/Header';

all sections are managed using Tailwind and Shadcn ui styles
const Dashboard = () => (
  <>
    <Header />
    <main className="p-4">
      <h2 className="text-2ll mb-4">Welcome to Secure Exchange Dashboard</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow">Recent Messages</div>
        <div className="bg-white p-4 rounded-lg shadow">User Activity</div>
      </div>
    </main>
  </>

); 
  export default Dashboard;
