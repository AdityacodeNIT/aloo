import  {useState} from "react";
import UserContext from "./UserContext";


const UserContextProvider=({children})=>{
    const [alert, SetAlert] = useState(null);
    const [backgroundColo, setBackgroundColo] = useState("light");
  
    const showAlert = (message, type) => {
      SetAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        SetAlert(null);
      }, 1700);
    };
    const removeBodyClasses = () => {
      document.body.classList.remove("bg-light");
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("bg-warning");
      document.body.classList.remove("bg-success");
      document.body.classList.remove("bg-primary");
      document.body.classList.remove("bg-light");
    };
    const toggleMode = (cls) => {
      removeBodyClasses();
      document.body.classList.add("bg-" + cls);
      showAlert(`${cls} mode has been enabled`, "success");
    };
    const toggleColor = () => {
      if (backgroundColo === "light") {
        setBackgroundColo("dark");
        document.body.style.backgroundColor = "#032845";
  
        showAlert("dark mode has been enabled", "success");
      } else {
        setBackgroundColo("light");
        document.body.style.backgroundColor = "white";
        showAlert("light mode has been enabled", "success");
      }   
    };  

    <UserContext.Provider value={{alert,backgroundColo,showAlert,removeBodyClasses,toggleColor}}>
        {children}
    </UserContext.Provider>
}
export default UserContextProvider;