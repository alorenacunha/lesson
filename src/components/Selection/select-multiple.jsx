import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckboxList from "./chackbox-list";
import CheckboxSummary from "./checkbox-summary";
import SelectInput from "./select-input";

const SelectBox = styled.div`
  width: 216.72px;
  margin-top: ${({ theme }) => theme.space[3]};

  background: ${({ theme }) => theme.color.light};
  border: ${({ theme }) => theme.borderWidth[0]} solid ${({ theme }) => theme.color.gray};
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius[0]};
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 44.46px;
  align-items: center;
  padding: 0px ${({ theme }) => theme.space[2]};
`;

const SelectMultipleCheck = (props) => {
  const [expandedCheckboxList, setExpandedCheckBoxList] = useState(false);
  const [allSelection, setAllSelection] = useState(1);
  const [labelList, setLabelList] = useState(() => {
    const updatedListOptions = props.listOptions.map((item) => {
      return { label: item, selected: 1 };
    });
    return updatedListOptions;
  });

  useEffect(() => {
    let checkbox = document.getElementById(props.id + "-checkbox-all-selection");
    switch (allSelection) {
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
  }, [allSelection, props.id]);

  useEffect(() => {
    let allTrue = true;
    let allFalse = true;
    labelList.forEach((item) => (item.selected ? (allFalse = false) : (allTrue = false)));
    const updateAllselection = allTrue ? 1 : allFalse ? 0 : 2;
    setAllSelection(updateAllselection);
  }, [labelList]);

  const onShowCheckboxList = () => {
    if (expandedCheckboxList) {
      setExpandedCheckBoxList(false);
    } else {
      setExpandedCheckBoxList(true);
    }
  };

  const onSelectAll = () => {
    const updatedAllselection = allSelection === 1 ? 0 : 1;
    setAllSelection(updatedAllselection);
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
  };

  return (
    <SelectBox>
      <SelectContainer>
        <CheckboxSummary type="checkbox" id={props.id + "-checkbox-all-selection"} key={"checkbox-all-selection"} onChange={() => onSelectAll()} />

        <SelectInput id={props.id + "-select"} expanded={expandedCheckboxList} onClick={() => onShowCheckboxList()}></SelectInput>
      </SelectContainer>

      <CheckboxList id={props.id + "-checkbox"} expanded={expandedCheckboxList} labelList={labelList} onChange={(index) => onCheckboxChange(index)}></CheckboxList>
    </SelectBox>
  );
};
export default SelectMultipleCheck;
