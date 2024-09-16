import React, { useEffect, useRef } from 'react';
import { View, ScrollView } from 'react-native';
import Message from './Message';

interface MessageListProps {
    messages: { text: string, sender: string }[];
    currentUser: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
            className="flex-1 p-4 dark:bg-zinc-950"
        >
            <View className="grid justify-items-stretch">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} isCurrentUser={msg.sender === "Yo"} />
                ))}
            </View>
        </ScrollView>
    );
};

export default MessageList;