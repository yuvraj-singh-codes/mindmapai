import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000'); // FastAPI server URL

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) {
            setError('Message cannot be empty');
            return;
        }
        try {
            socket.emit('message', input);
            setInput('');
            setError(null);
        } catch (err) {
            setError('Failed to send message');
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Chat;