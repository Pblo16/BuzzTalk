import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

interface MessageProps {
    text: string;
    sender: string;
    isCurrentUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, sender, isCurrentUser }) => {
    const { width } = useWindowDimensions(); // Obtener el ancho de la pantalla
    console.log(isCurrentUser);
    return (
        <View className={`p-2 bg-gray-200 dark:bg-zinc-800 rounded-lg mb-4 min-w-16 ${isCurrentUser ? 'justify-self-end' : 'justify-self-start'}`}
            style={{ maxWidth: width * 0.5}}>
            <Text className="font-bold dark:text-white">{sender}</Text>
            <Text className="dark:text-white">{text}</Text>
        </View>
    );
};

export default Message;
