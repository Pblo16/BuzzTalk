import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { View } from "react-native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';


export default function Header() {
    const { top } = useSafeAreaInsets();
    return (
        <>
            <View>
                <View className="px-4 lg:px-6 h-auto flex items-center flex-row justify-between dark:bg-zinc-950 " style={{ paddingTop: top }}>
                    <Link className="py-2 font-bold flex-1 items-center justify-center dark:text-white text-5xl" href="/">
                        BuzzTalk
                    </Link>
                    <View className="flex flex-row gap-4 sm:gap-6">
                        <Link
                            className="text-md font-medium hover:underline web:underline-offset-4 dark:text-white"
                            href="/about"
                        >
                            About
                        </Link>
                    </View>
                </View>
            </View>
        </>
    );
}