import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface MessageInputProps {
    onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (!message.trim()) return;
        onSend(message);
        setMessage('');
    };

    return (
        <View className="p-2 flex-row gap-2 dark:bg-zinc-800">
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Escribe un mensaje..."
                className="border border-gray-300 p-2 rounded-lg flex-auto focus-visible:outline-none dark:text-white"
                onSubmitEditing={handleSend}
                blurOnSubmit={false}
                multiline={true} // Permitir múltiples líneas
                textAlignVertical="top" // Alinear el texto en la parte superior
            />
            <TouchableOpacity onPress={handleSend} className='justify-center items-center bg-gray-200 dark:bg-zinc-500 rounded-lg flex-none w-14'>
                <FontAwesome name="send" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default MessageInput;