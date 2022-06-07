import { useContext } from "react";
import { AppThemeContext } from "../contexts/themeContext";

const useThemeContext = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error(
      "No puede acceder al contexto para el cambio de theme de la aplicación"
    );
  }
  return {
    theme: context.theme,
    third_color: context.third_color,
    changeTheme: context.changeTheme,
    changeThirdColor: context.changeThirdColor,
  };
};

export { useThemeContext };
