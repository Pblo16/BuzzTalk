import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import { socket } from '../app/index';

const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string, sender: string }[]>([]);

  useEffect(() => {
    // Escuchar el evento 'chat message' para agregar el mensaje al estado
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Limpiar el evento cuando se desmonta el componente
    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSendMessage = (message: string) => {
    const newMessage = { text: message, sender: '1' };

    // Emitir el mensaje al servidor a través del WebSocket, pero no lo agregues al estado aquí
    socket.emit('chat message', newMessage);
  };

  return (
    <View className="flex flex-1">
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </View>
  );
};

export default MessagesPage;
