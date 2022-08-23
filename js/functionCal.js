
function getFieldValue(elemenID) {
    const perPlayerField = document.getElementById(elemenID);
    const perPlayerFieldInner = perPlayerField.value;
    const perPlayerFieldFloat = parseFloat(perPlayerFieldInner);
    return perPlayerFieldFloat;
  }
  