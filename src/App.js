import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
// import { useTranslation } from "react-i18next";
// import { useState } from 'react';

function App() {

//   const languages = [
//     { value: "", text: "Select Options" },
//     { value: "en", text: "English" },
//     { value: "hi", text: "Hindi" },
//     { value: "de", text: "German" },
//   ];

//   const { t } = useTranslation();

//   const [lang, setLang] = useState("en");


    // This function put query that helps to
    // change the language
    // const handleChange = (e) => {
    //   setLang(e.target.value);
    //   let loc = "http://localhost:3000/";
    //   window.location.replace(
    //       loc + "?lng=" + e.target.value
    //   );
    // };
  
  return (
    <div className="App">
      <BrowserRouter>
      
          <div className='container'>
            {/* <h1>{t("firstlabel")}</h1> */}

            {/* <select value={lang} onChange={handleChange}>
                {languages.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.text}
                        </option>
                    );
                })}
            </select> */}
            
        <Routes>
          <Route>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/addemployee" element={<CreateEmployee heading={"Add Employee"} />}  />
            <Route path="/editemployee/:id" element={<UpdateEmployee  heading={"Update Employee"} />} />
          </Route>
        </Routes>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
