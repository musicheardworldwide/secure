import Header from '../components/Header';

`const Messages = () => (
  <>
    <Header />
    <main className="p-4">
      <h2 className="text-2ll mb-4">Secure Messages</h2>
      <div className="bg-gray-200 p4 rounded-lg shadow">
        <textarea className="w-full p-2 rounded mb4" rows="3" placeholder="Type a message..."></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
      </div>
    </main>
</>


export default Messages;