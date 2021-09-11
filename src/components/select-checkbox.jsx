import React, { useEffect, useState } from "react";
const SelectCheckbox = (props) => {
  const [expandedCheckboxList, setExpandedCheckBoxList] = useState(true);
  const [allSelection, setAllSelection] = useState(1);
  const [labelList, setLabelList] = useState([]);

  useEffect(() => {
    const updatedListOptions = props.listOptions.map((item) => {
      return { label: item, selected: 1 };
    });
    setLabelList(updatedListOptions);
    refreshAllselectionCheckbox(allSelection);
  }, []);

  const onShowCheckboxList = () => {
    const checkboxes = document.getElementById("checkbox-list");
    if (!checkboxes) return null;
    console.log({ checkboxes });
    if (expandedCheckboxList) {
      checkboxes.style.display = "block";
      setExpandedCheckBoxList(false);
    } else {
      checkboxes.style.display = "none";
      setExpandedCheckBoxList(true);
    }
  };

  const onSelectAll = () => {
    console.log({ allSelection });
    const updatedAllselection = !allSelection;
    setAllSelection(updatedAllselection);
    console.log({ updatedAllselection });
    setLabelList(
      labelList.map((item) => {
        item.selected = updatedAllselection;
        return item;
      })
    );
  };

  const onCheckboxChange = (index) => {
    labelList[index].selected = !labelList[index].selected;
    setLabelList([...labelList]);
    updateAllselection();
  };

  const updateAllselection = () => {
    let allTrue = true;
    let allFalse = true;
    labelList.forEach((item) => (item.selected ? (allFalse = false) : (allTrue = false)));
    const updateAllselection = allTrue ? 1 : allFalse ? 0 : 2;
    console.log({ updateAllselection });
    setAllSelection(updateAllselection);
    refreshAllselectionCheckbox(updateAllselection);
  };

  const refreshAllselectionCheckbox = (selectionState) => {
    let checkbox = document.getElementById("checkbox-all-selection");
    switch (selectionState) {
      case 0:
        checkbox.checked = false;
        checkbox.indeterminate = false;
        break;
      case 1:
        checkbox.checked = true;
        checkbox.indeterminate = false;
        break;
      default:
        checkbox.indeterminate = true;
        break;
    }
  };

  return (
    <div className="select-checkbox">
      <div className="select-box">
        <input type="checkbox" id="checkbox-all-selection" key={"checkbox-all-selection"} onChange={() => onSelectAll()} />

        <div className="select-input" onClick={() => onShowCheckboxList()}>
          <select id="select-checkbox">
            <option id="option-title" value="1">
              All Contacts
            </option>
          </select>
          <div className="select-over"></div>
        </div>
      </div>

      <div className="select-checkbox-list" id="checkbox-list">
        {labelList.map((item, index) => (
          <label key={"label-" + item.label + "-" + index}>
            <input type="checkbox" key={"checkbox-" + item.label + "-" + index} checked={item.selected} onChange={() => onCheckboxChange(index)} />
            <div className="select-checkbox-text">{item.label}</div>
          </label>
        ))}
      </div>
    </div>
  );
};
export default SelectCheckbox;
