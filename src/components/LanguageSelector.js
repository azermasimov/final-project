import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    const { onLanguageChange, language } = this.context;
    console.log(language);
    return (
      <div>
        <button onClick={() => onLanguageChange("english")}>EN</button>
        <button onClick={() => onLanguageChange("azeri")}>AZ</button>
      </div>
    );
  }
}

export default LanguageSelector;
