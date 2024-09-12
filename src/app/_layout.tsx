// Importa los estilos globales y los componentes necesarios
import "../global.css";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "../components/header"; // Importa el componente Header
import * as SplashScreen from 'expo-splash-screen';

/* SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000); */

export default function Layout() {
  
  return (
    <>
      <Header />
      <Slot />
    </>
  );
}
